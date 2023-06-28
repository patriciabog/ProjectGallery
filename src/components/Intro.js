import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="main__landing__container">
      <h1 className="main__landing__container__title">Project Gallery</h1>
      <p className="main__landing__container__subtitle">
        Online showcase to collect ideas through technology.
      </p>
      <div className="main__landing__container__buttons">
        <Link to="/create">
          <button className="main__landing__container__buttons__button-new-project">
            New Proyect
          </button>
        </Link>
        <button className="main__landing__container__buttons__button-view-projects">
          Proyects
        </button>
      </div>
    </div>
  );
}

export default Intro;
