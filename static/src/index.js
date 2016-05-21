require('expose?$!expose?jQuery!jquery');
require("bootstrap-webpack");
import React from 'react';
import { render } from 'react-dom';
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import 'style.scss';
import configureStore from './store/configureStore';
import Root from './containers/Root';

injectTapEventPlugin();
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Root store={store} history={history}/>,
    document.getElementById('root')
);
