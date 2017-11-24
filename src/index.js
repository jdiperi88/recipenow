import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import FavoriteRecipeList from './components/FavoriteRecipeList'
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Switch, Route } from 'react-router-dom'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers'

const store = createStore(rootReducer);
store.subscribe(()=>console.log(store.getState()))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Switch >
                <Route exact path='/' component={App} />
                <Route exact path='/favorites' component={FavoriteRecipeList} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root')); registerServiceWorker();
