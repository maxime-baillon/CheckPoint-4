import React from "react";
import dataQuiz from "../data/Data";

function Accueil({ start }) {
  return (
    <div className="general">
      <div>
        <h1 className="titreAccueil">{dataQuiz.titre}</h1>
        <button className="button" type="button" onClick={start}>
          Commencer
        </button>
      </div>
    </div>
  );
}

export default Accueil;
