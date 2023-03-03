import { Fragment } from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedJoke from "../components/jokes/HighlightedJoke";
import NotFound from "./NotFound";
const DUMMY_JOKES = [
  { id: "j1", topic: "Topic", text: "text" },
  { id: "j2", topic: "Topic2", text: "text2" },
];
const JokeDetails = () => {
  const params = useParams();
  const joke = DUMMY_JOKES.find(item => item.id === params.jokeId);
  if (!joke) {
    return <NotFound />;
  }
  return (
    <Fragment>
      <HighlightedJoke text={joke.text} topic={joke.topic} />
      <Route path="/jokes/:jokeId/comments">
        <Comments />
      </Route>
    </Fragment>
  );
};
export default JokeDetails;
