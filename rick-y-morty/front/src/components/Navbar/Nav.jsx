import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { useNavigate } from "react-router-dom";

const Nav = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/");
  };

  const handleAboutClick = () => {
    navigate("/about");
  };

  const handleHomeClick = () => {
    navigate("/home");
  };

  const handleFavoritesClick = () => {
    navigate("/favorites");
  };

  return (
    <nav className={style.nav}>
      <div className={style.btns}>
        <button
          className={`${style.button} ${style.logout}`}
          onClick={handleLogoutClick}
        >
          Logout
        </button>

        <button
          className={`${style.button} ${style.about}`}
          onClick={handleAboutClick}
        >
          About
        </button>

        <button
          className={`${style.button} ${style.home}`}
          onClick={handleHomeClick}
        >
          Home
        </button>

        <button
          className={`${style.button} ${style.favorites}`}
          onClick={handleFavoritesClick}
        >
          Favorites
        </button>
      </div>

      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;