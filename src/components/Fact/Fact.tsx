import "./factStyle.css";
import { useState, useRef, useEffect } from "react";
import useService from "../Service";
import Spinner from "../spinner/Spinner";
const Fact = () => {
  const [fact, setFact] = useState("");
  const { getNewFact, setProcess, process } = useService();
  const [flag, setFlag] = useState(true);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      const text = inputRef.current.value;
      const firstSpace = text.indexOf(" ");
      if (firstSpace !== -1) {
        inputRef.current.setSelectionRange(firstSpace, firstSpace);
        inputRef.current.focus();
      }
    }
  }, [fact]);

  const updateFact = () => {
    setFlag(false);
    getNewFact()
      .then(onInfoLoaded)
      .then(() => setProcess("confirmed"))
      .catch(() => setProcess("error"));
  };
  const onInfoLoaded = (info) => {
    if (info.length == 0 && process != "loading") {
      throw new Error(" no facts");
    }
    setFact(info.fact);
  };

  return (
    <div className="fact-wrapper">
      {flag ? (
        <textarea
          name=""
          id="fact-textarea"
          defaultValue="New fact about cats is..."
        ></textarea>
      ) : process == "confirmed" ? (
        <textarea
          ref={inputRef}
          name=""
          id="fact-textarea"
          defaultValue={fact}
        ></textarea>
      ) : (
        <Spinner />
      )}
      <button className="fact-btn" onClick={updateFact}>
        New fact
      </button>
    </div>
  );
};

export default Fact;
