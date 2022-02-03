import React from "react";
import dataQuiz from "../data/Data";

function Accueil({ clique }) {
  return (
    <div>
      <div>
        <h1 className="titreAccueil">{dataQuiz.titre}</h1>
        <button className="buttonAccueil" type="button" onClick={clique}>
          Commencer
        </button>
      </div>
    </div>
  );
}

export default Accueil;
