import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Redirect } from 'react-router';
import routes from '../routes';
import DevTools from './DevTools';

export default class Root extends Component{
    render(){
        const { store, history } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Router history={history}>
                        <Redirect from="/" to="main"/>
                        {routes}
                    </Router>,
                    <DevTools/>
                </div>
            </Provider>
        );
    }
}
