import JokeList from "../components/jokes/JokeList";
const DUMMY_JOKES = [
  { id: "j1", topic: "Topic", text: "text" },
  { id: "j2", topic: "Topic2", text: "text2" },
];
const Jokes = () => {
  return (
    <div>
      <JokeList jokes={DUMMY_JOKES} />
    </div>
  );
};
export default Jokes;
