import "../styles/App.scss";
import {Route, Routes} from 'react-router-dom';
import Landing from "./Landing";
import CreateProject from "./CreateProject"; 

import ls from '../services/localStorage';
import { useEffect, useState } from "react";


function App() {
  const [allCards, setAllCards] = useState (ls.get('projectsLS', [])); 

  const handleLs = (value) => {
    setAllCards(value)
  }
//useEffect 

  useEffect(() => {
    api.listProjectsApi().then((cleanData) => {
      setAllCards(cleanData);
    });
  }, []);

  return(
    <Routes>
      <Route path="/" element={<Landing allCards={allCards} />}>
      </Route>
      <Route path="/create" element={<CreateProject allCards={allCards} handleLs={handleLs} />}></Route>
    </Routes>

  );
};

export default App;