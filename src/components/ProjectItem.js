import "../styles/layout/ProjectItem.scss";
// import ls from "../services/localStorage";

const ProjectItem = ({ eachCard, allCards, index }) => {
  // Function to delete a selected card
  // function deleteCard(ev){
  //     ev.preventDefault();
  //     const idSelected = ev.currentTarget.id;
  //     const indexCard = allCards.findIndex(oneCard => oneCard.id === idSelected);
  //     allCards.splice(indexCard, 1);
  // }
  // const test = ls.get('projectsLS', allCards);

  // const deleteCardTest = (ev) => {
  //     console.log('quiero borrar esta tarjeta')
  //     const idCardSelected = ev.target.id
  //     console.log(idCardSelected, 'idCardSelected');
  //     console.log(ev)
  // }

  return (
    <li>
      {/* <section className="pi__icons">
                <a onClick={deleteCardTest}>
                    <i className="fa-regular fa-circle-xmark"></i>
                </a>
                <a href={`${eachCard.urlD}`} target='_blank'>
                    <i className="fa-solid fa-expand"></i>
                </a>
            </section> */}
      <section className="author">
        <section className="author__ip">
          <p className="author__ip__subtitle">{eachCard.name}</p>
          {/* <hr className='author__ip__line' /> */}

          <h2 className="author__ip__title">
            {eachCard.name || "Elegant Workspace"}
          </h2>
          <p className="author__ip__slogan">
            {eachCard.slogan || "Diseños Exclusivos"}
          </p>
          <p className="author__ip__desc">
            {eachCard.desc ||
              `Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Amet faucibus commodo
                    tellus lectus lobortis.`}
          </p>
          <section className="author__ip__tech">
            <p className="author__ip__tech__text">
              {eachCard.technologies || "React JS, MongoDB"}
            </p>
            <div className="author__ip__tech__icons">
              <a className="icon" href={`${eachCard.demo}`} target="_blank">
                <i className="fa-solid fa-globe"></i>
              </a>
              <a href={`${eachCard.repo}`} target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </section>
        </section>

        <section className="author__ia">
          <img className="author__ia__image" src={eachCard.photo} alt="" />
          <p className="author__ia__job">
            {eachCard.job || "Full Stack Developer"}
          </p>
          <p className="author__ia__name">
            {eachCard.autor || "Emmelie Björklund"}
          </p>
        </section>
      </section>
    </li>
  );
};

export default ProjectItem;
