import './App.css';
import Create from "./pages/posts/create"
import PostPage from "./pages/posts/index"
import PostUpdate from "./pages/posts/update";
import PostShow from "./pages/posts/show";

import {
  BrowserRouter as Router,
  Switch,
  Route,
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
        <Route path="/posts/update/:post_id">
          <PostUpdate />
        </Route>
        <Route path="/post/:post_id">
          <PostShow />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
