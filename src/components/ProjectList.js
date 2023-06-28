import "../styles/layout/ProjectList.scss";
import ProjectItem from "./ProjectItem";

const ProjectList = ({allCards}) => {
    // Map to show every li
    const projects = allCards.map((eachCard, index) => {
        return <ProjectItem eachCard={eachCard} key={index} allCards={allCards} id={index} />
    });

    return (
        <section className="project__list">
            <ul className="project__list_ul">{projects}</ul>
        </section>
    );
};

export default ProjectList;