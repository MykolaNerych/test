import sx from "./Header.module.scss";

export const Header = () => (
  <header className={sx.header}>
    <h1>TMDB Movie Search</h1>
    <p>Find your favorite movies with powerful search and autocomplete</p>
  </header>
);
