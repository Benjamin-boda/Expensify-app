import {createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import expensesReducer from "../reducers/expenses";
import filterReducer from "../reducers/filters";
import authReducer from "../reducers/auth";

// Store creation

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose;

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducer,
            auth: authReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};

