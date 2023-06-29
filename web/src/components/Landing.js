import "../styles/layout/Landing.scss";
import Header from "./Header";
import Footer from "./Footer";
import ProjectList from "./ProjectList";
import Intro from "./Intro";

function Landing({ allCards }) {
  console.log(allCards);
  return (
    <>
      <div
        className={`container__landing ${
          allCards.length >= 3 ? "min-height" : ""
        }`}
      >
        <Header />
        <main className="main__landing">
          <Intro />
          <ProjectList allCards={allCards} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
