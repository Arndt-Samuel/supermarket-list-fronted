import './App.css';
import { HomeScreen, ListScreen } from './screens'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/" element={<ListScreen />}/>
      </Routes>
    </Router>
  )
}

export default App;
 