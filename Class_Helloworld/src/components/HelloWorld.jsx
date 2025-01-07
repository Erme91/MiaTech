import { Component } from 'react';

class HelloWorld extends Component {
    
    title = "Creazione classe";

    render() {
        return (
            <>
            <h2>{this.title}</h2>
            </>
        )
    }
}

export default HelloWorld