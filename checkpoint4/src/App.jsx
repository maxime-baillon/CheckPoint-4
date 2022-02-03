import { useState } from "react";
import "./App.css";
import Accueil from "./components/Accueil";
import Question from "./components/Question";
import dataQuiz from "./data/Data";

function App() {
  const [etape, setEtape] = useState(1);

  const startHandler = () => {
    setEtape(2);
  };

  return (
    <div className="App">
      {etape === 1 && <Accueil start={startHandler} />}
      <header className="App-header">
        {dataQuiz.data.map((question) => (
          <Question question={question} />
        ))}
      </header>
    </div>
  );
}

export default App;
