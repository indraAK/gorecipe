import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Bookmark from "./pages/Bookmark";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/recipe/:key">
            <Detail />
          </Route>
          <Route path="/bookmark">
            <Bookmark />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
