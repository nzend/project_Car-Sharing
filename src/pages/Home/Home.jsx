import css from "./Home.module.css";

const Home = () => {
  return (
    <div className={css.home__container}>
      <p className={css.home__title}>
        Hello world. <br /> This is my educational project in which I practice
        component React development with state saving in Redax. Routing with
        private and public routes. With user registration and authorization.
        <br />
        Enjoy.
      </p>
    </div>
  );
};

export default Home;