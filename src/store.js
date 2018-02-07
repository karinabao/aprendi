import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers';
import { createLogger } from 'redux-logger'
import axios from 'axios';
import { multiClientMiddleware } from 'redux-axios-middleware';
const loggerMiddleware = createLogger()

const clients = {
  default: {
    client: axios.create({ //all axios can be used, shown in axios documentation
      baseURL:'http://localhost:3333',
      responseType: 'json'
    })
  },
  auth: {
    client: axios.create({
        baseURL:'https://librarieswithoutborders.auth0.com/api/v2/',
        responseType: 'json'
    })
  }
}

const store = createStore(
	rootReducer,
	applyMiddleware(
    multiClientMiddleware(clients), // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
	)
)

export default store;