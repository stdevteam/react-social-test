import './App.css';
import Create from "./components/forms/post/create"
import PostPage from "./pages/posts"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PostPage/>
        </Route>
        <Route path="/posts/create">
          <Create/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
