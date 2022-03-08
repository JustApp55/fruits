require('dotenv').config()
const express = require('express');
const Fruit = require('./models/fruits.js');
const app = express();
const mongoose = require('mongoose');

//MUST BE FIRST 
//middleware
app.use((req, res, next) =>{
    console.log('I run for all routes')
    next()
})

app.use(express.urlencoded({extended:false}));


//set up view engine
app.set('view engine', 'jsx');
  app.engine('jsx', require('express-react-views').createEngine());

app.get('/fruits/seed', (req, res)=>{
    Fruit.create([
        {
            name:'grapefruit',
            color:'pink',
            readyToEat:true
        },
        {
            name:'grape',
            color:'purple',
            readyToEat:false
        },
        {
            name:'avocado',
            color:'green',
            readyToEat:true
        }
    ], (err, data)=>{
        res.redirect('/fruits');
    })
});

   //index route
   app.get('/fruits', function(req, res){
     Fruit.find({}, (error, allFruits)=>{
      res.render('Index', {fruits: allFruits});
     })
   
}); 

  //create a page that will allow us to create a new fruit
  app.get('/fruits/new', (req, res)=> {
      res.render('New')
  })

  app.post('/fruits/', (req, res)=>{
    if(req.body.readyToEat === 'on'){//if checked, req.body.readyToEat is set to'on'
  req.body.readyToEat = true; // do some data correction
  }else {//if not checked, req.body.readyToEat is undefined
      req.body.readyToEat = false; //do some data correction
  }
  Fruit.create(req.body, (error, createFruit) =>{
    res.redirect('/fruits')
  });
  })

  //res.redirect('/fruits') //send the user back to /fruits
//});

 //GET: Show one
app.get('/fruits/:id', function(req, res){
      Fruit.findById(req.params.id, (err, foundFruits)=>{
        res.render('Show', {
          fruit:foundFruits
        })
      }
      )
        })
  
 
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true});
  mongoose.connection.once('open', ()=> {
      console.log('connected to mongo');
  });


app.listen(3000, () => {
    console.log('listening');
});

