import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import * as thunk from 'redux-thunk';

import reducer from './reducers';

const logger = createLogger();
const middleware = applyMiddleware(thunk.default, logger);

export default createStore(reducer, middleware);
