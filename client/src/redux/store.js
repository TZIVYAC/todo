import { createStore,combineReducers } from "redux";
import contacts from "./reducers/contacts"
import tasks from "./reducers/tasks";

const reducer=combineReducers({contacts,tasks});

const store = createStore(reducer);
window.store = store;
export default store;