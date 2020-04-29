class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this); 
        this.handleMinusOne = this.handleMinusOne.bind(this); 
        this.handleReset = this.handleReset.bind(this); 

        this.state = {
            count: 0,
            name: 'Chris'
        } 

    }

    handleAddOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        })
        console.log(this.state);
    }
    handleMinusOne(){
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        })
    }
    handleReset(){
        this.setState(() => {
            return {
                count: 0
            };
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne} className="button">+1</button>
                <button onClick={this.handleMinusOne} className="button">-1</button>
                <button onClick={this.handleReset} className="button">reset</button>                
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// const title = 'Indecision App';

// const user = {
//     name: 'Chris',
//     age: 48,
//     location: 'Monroe'
// };

// function getLocation(location){
//     if (location){
//         return <p>Location: {location}</p>
//     }
// }

// const template = (
//     <div>
//         <h1>{title}</h1>
//         <p>This is some info</p>
//         <p>{user.name}</p>
//         <p>Age: {user.age}</p>

//         {getLocation()}
//     </div>
// );

// let count = 0;
// const addOne = () => {
//     console.log(`addOne ${count}`);
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     console.log('minusOne');
//     count--;
//     renderCounterApp();
// }

// const reset = () => {
//     console.log('reset');
//     count = 0;
//     renderCounterApp();
// }

// const someId = 'myIdHere';


// const renderCounterApp = () => {

//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne} className="button">+1</button>
//             <button onClick={minusOne} className="button">-1</button>
//             <button onClick={reset} className="button">reset</button>
//     <p>Count Value: {count}</p>
//         </div>
//     );
    
//     console.log(templateTwo);
//     const appRoot = document.getElementById('app');
//     ReactDOM.render(templateTwo, appRoot);    

// }

// renderCounterApp();