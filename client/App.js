import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
// import './App.css';
import Home from './pages/Home';
import List from './pages/List';

import axios from 'axios';

class App extends Component {
    state = {
        value: ''
    };
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: ''
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleSubmit = this.handleSubmit.bind(this);
    // }

    // componentDidMount() {}

    handleChange = event => {
        this.setState({
            value: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { value } = this.state;
        axios.post('/', { value }).then(result => {
            console.log(value);
        });
    };
    render() {
        // const App = () => (
        // <div>
        //     <Switch>
        //         <Route exact path="/" component={Home} />
        //         <Route path="/list" component={List} />
        //     </Switch>
        // </div>
        //     <div>
        //         <Switch>
        //             <form
        //                 onSubmit={this.handleSubmit}
        //                 method="POST"
        //                 action="/api/data"
        //             >
        //                 <label>
        //                     Name:
        //                     <input
        //                         type="text"
        //                         value={this.state.value}
        //                         onChange={this.handleChange}
        //                     />
        //                 </label>
        //                 <input type="submit" value="Submit" />
        //             </form>
        //         </Switch>
        //     </div>
        // );
        return (
            <div>
                <Switch>
                    // <Route exact path="/" component={Home} />
                    // <Route path="/list" component={List} />
                    //{' '}
                </Switch>
                <form onSubmit={this.handleSubmit} method="POST" action="/">
                    <label>
                        Name:
                        <input
                            type="text"
                            value={this.state.value}
                            onChange={this.handleChange}
                        />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            // <Switch>
            //     <App />
            // </Switch>
        );
    }
}

export default App;
