import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class List extends Component {
    render() {
        return (
            <div className="App">
                <h1>List Page</h1>
                <Link to={'/'}>
                    <button variant="raised">Back to Home page</button>
                </Link>
            </div>
        );
    }
}
export default List;
