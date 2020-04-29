
const title = 'Indecision App';


const app = {
    title: 'Indecision App',
    subTitle: 'Put your life in the hands of a computer',
    options: []
};


function getLocation(location){
    if (location){
        return <p>Location: {location}</p>
    }
}

const onFormSubmit = (e) => {
    //console.log(event);
    e.preventDefault();

    const option = e.target.elements.option.value;
    console.log(option);

    if (option){
        app.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
};

const resetForm = () => {
    app.options = [];
    renderApp();
}

const numbers = [21,7,22];
let shouldShowDetails = false;

const showDetails = () => {
    shouldShowDetails = true;
    renderApp();
}


const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subTitle && <p>{app.subTitle}</p>}

            <button onClick={showDetails}>Show Details</button>
            {shouldShowDetails && <div>

            <button onClick={resetForm}>Remove All</button>
            
            <p>{app.options.length > 0 ? 'Here are your options': 'No Options'}</p>
    <p>{app.options.length}</p>
            <ol>
                {
                    app.options.map((option) => {
                        return <li key={option}>{option}</li>;
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"></input>
                <button>Add Option</button>
            </form>

            </div>}
    
        </div>
    );    
    const appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot);
}
renderApp();