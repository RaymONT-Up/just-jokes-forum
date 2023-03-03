import { Fragment } from "react";
import { Link, Route, useParams } from "react-router-dom";
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
      <Route path={`/jokes/${params.jokeId}`} exact>
        <Link to={`/jokes/${params.jokeId}/comments`}>Show comments</Link>
      </Route>
      <Route path={`/jokes/${params.jokeId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default JokeDetails;
