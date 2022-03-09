const React = require('react');


class Index extends React.Component {
    render(){
       
        return <div>
            <link rel="stylesheet" href="/css/app.css"/>
        <h1>Fruits Index Page</h1>
        <br/><br/>
        <nav>
           <a href="/fruits/new">Create A New Fruit</a>
        </nav>
        <ul>
            {
               this.props.fruits.map((fruit, i) => {
                return (
                    <li key={i}>
        The <a href={`/fruits/${ fruit.id }`}> { fruit.name } </a> is { fruit.color }
        { fruit.readyToEat ? `. It is ready to eat` : `. It is not ready to eat` } 
        
        <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
            <input type="submit" value="DELETE"/>
        </form>
        <a href={`/fruits/${fruit._id}/edit`}>Edit This Fruit</a> 
        </li>
                    )
                })
            }
        </ul>
        
    </div>
    }
}



module.exports = Index;
















// {this.props.fruits.map((fruit,i) => {
//     return <li key={i}>
//         <a href={`/fruits/${fruit.id}`}>{fruit.name}</a>
//         is { fruit.readyToEat? <span>It is ready to eat</span>: <span> It is not ready to eat </span>}
//         {/* Your Delete Form Goes Here  It's incomplete we will fix below*/}



// // class Index extends React.Component {
// //     render() {
//         //destructuring
//         const { fruits } = this.props;
//         return (
//                 <div>
//                     <h1>Fruits Index Page</h1>
//                     <ul>
//                         {fruits.map((fruit, i) => {
//                             return (
//                                 <li>
//                                     The{' '}
//                                     <a href={`/fruits/${i}`}>
//                                         {fruit.name}
//                                     </a>{' '}
//                                     is {fruit.color} <br></br>
//                                     {fruit.readyToEat
//                                         ? `It is ready to eat`
//                                         : `It is not ready to eat`}
//                                     <br />
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                     <nav>
//                         <a href="/fruits/new">Create A New Fruit</a>
//                     </nav>
//                 </div>
//         );
//     }
//   }

// module.exports = Index;

//in react - will map through a list of an array
