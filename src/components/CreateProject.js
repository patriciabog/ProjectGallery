import { useState } from "react";
import React from "react";
import dataApi from "../services/api.js";
import Header from "./Header";
import Preview from "./Preview";
import Form from "./Form";
import { Route, Routes } from "react-router-dom";
import Footer from "./Footer.js";
import GetAvatar from "./GetAvatar";
import ls from "../services/localStorage";
import { Link } from "react-router-dom";
import Intro from "./Intro";

function CreateProject({ allCards, handleLs }) {
  const [data, setData] = useState(
    ls.get("lastCard", {
      name: "",
      slogan: "",
      technologies: "",
      repo: "",
      demo: "",
      desc: "",
      autor: "",
      job: "",
      photo: "",
      image: "",
    })
  );

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    slogan: "",
    technologies: "",
    repo: "",
    demo: "",
    desc: "",
    autor: "",
    job: "",
    photo: "",
    image: "",
  });

  const [errorMessageCard, setErrorMessageCard] = useState("");
  const [url, setUrl] = useState("");
  const [cardMessage, setCardMessage] = useState("");
  const [classHidden, setClassHidden] = useState(true);
  const patternName = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
  const patternDemo =
    /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;

  const updateImages = (avatar) => {
    setData({ ...data, image: avatar });
  };
  const updatePhoto = (avatar) => {
    setData({ ...data, photo: avatar });
  };

  // Funciones handle
  const handleClickCreateCard = (ev) => {
    console.log("create card");
    ev.preventDefault();
    setData({ ...data });
    console.log(url);
    console.log(data);

    dataApi(data).then((info) => {
      console.log("info~~~~~~~");
      console.log(info);
      if (info.success === true) {
        setUrl(info.cardURL);
        setCardMessage("Ver tarjeta");
        setErrorMessageCard("");
        setClassHidden(false);
        // Añado el nuevo proy
        ls.set("lastCard", data);
        handleLs([...allCards, data]);

        ls.set("projectsLS", allCards);

        console.log(url);
        console.log(data);

        console.log(allCards);
      } else if (info.error.includes("Mandatory")) {
        setCardMessage("");
        setErrorMessageCard("Faltan datos. Por favor rellena todos los campos");
        setClassHidden(true);
      } else if (info.error.includes("Database error: ER_DATA_TOO_LONG")) {
        setCardMessage("");
        setErrorMessageCard("Las imágenes son demasiado grandes.");
        setClassHidden(true);
      } else {
        setCardMessage("");
        setClassHidden(true);
        setErrorMessageCard(
          "Se ha producido un error. Por favor, inténtalo más tarde "
        );
      }
    });
  };

  // const updateAvatar = (avatar) => {
  //   setData({ ...data, photo: avatar });
  // };

  const handleInput = (inputValue, inputName) => {
    setData({ ...data, [inputName]: inputValue });

    if (inputName === "name") {
      validateRequired(inputValue, setErrorMessage, "name");
    }
    if (inputName === "slogan") {
      validateRequired(inputValue, setErrorMessage, "slogan");
    }

    if (inputName === "technologies") {
      validateRequired(inputValue, setErrorMessage, "technologies");
    }
    if (inputName === "repo") {
      if (inputValue.length > 0 && !patternDemo.test(inputValue)) {
        const clonedErrorMessages = { ...errorMessage };
        clonedErrorMessages.repo = "* Introducir el enlace";
        setErrorMessage(clonedErrorMessages);
      } else {
        validateRequired(inputValue, setErrorMessage, "repo");
      }
    }
    if (inputName === "demo") {
      if (inputValue.length > 0 && !patternDemo.test(inputValue)) {
        const clonedErrorMessages = { ...errorMessage };
        clonedErrorMessages.demo = "* Introducir el enlace";
        setErrorMessage(clonedErrorMessages);
      } else {
        validateRequired(inputValue, setErrorMessage, "demo");
      }
    }
    if (inputName === "desc") {
      validateRequired(inputValue, setErrorMessage, "desc");
    }
    if (inputName === "autor") {
      if (inputValue.length > 0 && !patternName.test(inputValue)) {
        const clonedErrorMessages = { ...errorMessage };
        clonedErrorMessages.autor = "* Introducir solo letras";
        setErrorMessage(clonedErrorMessages);
      } else {
        validateRequired(inputValue, setErrorMessage, "autor");
      }
    }
    if (inputName === "job") {
      validateRequired(inputValue, setErrorMessage, "job");
    }
    if (inputName === "photo") {
      validateRequired(inputValue, setErrorMessage);
    }
    if (inputName === "image") {
      validateRequired(inputValue, setErrorMessage);
    }
  };

  const validateRequired = (inputValue, setError, field) => {
    if (!inputValue) {
      const clonedErrorMessages = { ...errorMessage };
      clonedErrorMessages[field] = "* Campo requerido";
      setError(clonedErrorMessages);
    } else {
      setError(" ");
    }
  };

  const handleErrorMessage = (value) => {
    setErrorMessage(value);
  };

  const handleResetButton = () => {
    setData({
      name: "",
      slogan: "",
      technologies: "",
      repo: "",
      demo: "",
      desc: "",
      autor: "",
      job: "",
      photo: "",
      image: "",
    });
  };

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Intro />
        <main className="main">
          <Preview data={data} />
          <Routes>
            <Route path="getAvatar" element={<GetAvatar />}></Route>
          </Routes>

          {/*   Form -  Patricia */}
          <Form
            handleInput={handleInput}
            data={data}
            errorMessage={errorMessage}
            handleErrorMessage={handleErrorMessage}
            url={url}
            cardMessage={cardMessage}
            handleClickCreateCard={handleClickCreateCard}
            errorMessageCard={errorMessageCard}
            updateImages={updateImages}
            updatePhoto={updatePhoto}
            classHidden={classHidden}
            handleResetButton={handleResetButton}
          />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default CreateProject;
