import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section>
      <h1>Страница не найдена</h1>
      <p>Простите, URL не валиден, вернитесь на домашнюю страницу</p>
      <Link to="/jokes">Домой</Link>
    </section>
  );
};
export default NotFound;
