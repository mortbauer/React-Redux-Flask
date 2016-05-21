import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
import routes from '../routes';

export default class Root extends Component{
    render(){
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    <Redirect from="/" to="main"/>
                    {routes}
                </Router>
            </Provider>
        );
    }
}
