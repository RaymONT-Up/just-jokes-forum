import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AddJoke from "./pages/AddJoke";
import JokeDetails from "./pages/JokeDetails";
import Jokes from "./pages/Jokes";
import NotFound from "./pages/NotFound";
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/jokes" />
        </Route>
        <Route path="/jokes" exact>
          <Jokes />
        </Route>
        <Route path="/jokes/:jokeId">
          <JokeDetails />
        </Route>
        <Route path="/add-joke">
          <AddJoke />
        </Route>

        {/* Not Found */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
