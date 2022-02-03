import React from "react";

function Question({ question, etape }) {
  return (
    <div className="general">
      <div className="questionnaire">
        <div className="">
          <h2>{question.question}</h2>
          {question.choix.map((choi, i) => (
            <label className="labelQuestion" htmlFor="question" key={(choi, i)}>
              <input
                type="radio"
                name="inputQuestion"
                value={choi}
                onChange={() => {}}
              />
              {choi}
            </label>
          ))}
          <button
            className="button"
            type="submit"
            name="inputQuestion"
            value=""
            onClick={etape}
          >
            Validé
          </button>
        </div>
      </div>
    </div>
  );
}

export default Question;
