import { createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers';
import DevTools from '../containers/DevTools';
import createLogger from 'redux-logger';
import { persistState} from 'redux-devtools';

const debugMiddleware = [
    createLogger({
        collapsed: true
    })
]

const enhancer = compose(
    applyMiddleware(thunkMiddleware, ...debugMiddleware),
    DevTools.instrument(),
    persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    )
);

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        enhancer,
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
