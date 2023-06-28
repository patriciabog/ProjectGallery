import "../styles/layout/Error.scss";
import { Link } from "react-router-dom";
import errorGif from "../images/error404.gif";

const Error404 = () => {
    return (
        <main className="main__error">
            <img className="main__error__image" src={errorGif} alt="error animation" />
            <div className="container">
                <h1 className="main__error__title">404</h1>
                <p className="main__error__text">
                    Whoops... This page has gone to find other cool projects that don't exist yet!
                </p>
                <span className="main__error__span">
                    Error 404: Sorry, we couldn't find the page you're looking for
                </span>
                <p className="main__error__links__paragraph">
                    Here are some links that may help you:
                </p>
                <div className="main__error__container">
                    <Link className="main__error__container__home" to="/">
                        Start
                    </Link>
                    <Link className="main__error__container__new-project" to="/create">
                        New proyect
                    </Link>
                </div>
            </div>
        </main>
        

    );
};

export default Error404;