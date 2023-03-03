import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";

import Card from "../UI/Card";
import Loader from "../UI/Loader";
import styles from "./JokeForm.module.css";

const JokeForm = props => {
  const topicInputRef = useRef();
  const textInputRef = useRef();

  const submitFormHandler = event => {
    event.preventDefault();

    const enteredTopic = topicInputRef.current.value;
    const enteredText = textInputRef.current.value;

    props.onAddJoke({ topic: enteredTopic, text: enteredText });
  };

  return (
    <Fragment>
      <Prompt
        when={true}
        message={location => {
          console.log(location);
          return `Вы уверенны что хотите покинуть данную страницу и перейти на ${location.pathname}? Все данные из формы будут удалены.`;
        }}
      />
      <Card>
        <form className={styles.form} onSubmit={submitFormHandler}>
          {props.isLoading && (
            <div className={styles.loading}>
              <Loader />
            </div>
          )}

          <div className={styles.control}>
            <label htmlFor="topic">Topic</label>
            <input type="text" id="topic" ref={topicInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="text">Text</label>
            <textarea id="text" rows="5" ref={textInputRef}></textarea>
          </div>
          <div className={styles.actions}>
            <button className="btn">Add Joke</button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default JokeForm;
