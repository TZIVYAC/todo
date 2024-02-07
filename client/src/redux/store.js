import { createStore,combineReducers ,applyMiddleware} from "redux";
import contacts from "./reducers/contacts"
import tasks from "./reducers/tasks";

const reducer=combineReducers({contacts,tasks});

const mid_task = (store) => (next) => (action) => {
        console.log('action: ' , action);
        return next(action);
    }
    

const store = createStore(reducer,applyMiddleware(mid_task));
window.store = store;
export default store;