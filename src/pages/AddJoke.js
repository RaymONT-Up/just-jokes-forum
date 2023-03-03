import JokeForm from "../components/jokes/JokeForm";
const AddJoke = () => {
  const addJokeHandler = jokeData => {
    console.log(jokeData);
  };
  return (
    <div>
      <JokeForm onAddJoke={addJokeHandler} />
    </div>
  );
};
export default AddJoke;
