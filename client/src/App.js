import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginData from './component/login';
import Connect from './component/connect';
import TaskData from './component/task';
import ShowTaskList from './component/presentationTasks';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Provider store={store}>

        {/* <LoginData></LoginData> */}
        {/* <Connect></Connect> */}
        // <TaskData id={2}></TaskData>
        {/* <ShowTaskList></ShowTaskList> */}
      </Provider>
    </div>
  );
}

export default App;
