import "./Form.css";
import { useState, useRef } from "react";
import useService from "../Service";
import setContent from "../setContent.jsx";
const Form = () => {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [timerId, setTimerId] = useState(null);
  const previous = useRef("");

  const { getAge, setProcess, process } = useService();

const getName = (e) => {
  const regexp = /[^a-zA-Zа-яА-Я]/g;
  e.target.value = e.target.value.replace(regexp, "");
  const name = e.target.value;
  setName(name);
};


  const updateAge = () => {
    getAge(name)
      .then(onInfoLoaded)
      .then(() => setProcess("confirmed"))
      .catch((errMsg) => {
        if (
          errMsg.message === "no matching age!" ||
          errMsg.message === "name is not found"
        ) {
          setProcess("founding");
        }
      });
  };

  const changeOnBlur = () => {
    if (timerId) {
      clearTimeout(timerId);
    }
    const timer = setTimeout(() => {
      if (name !== previous.current) {
        updateAge();
        previous.current = name;
      }
    }, 3000);

    setTimerId(timer);
  };

  const changeOnClick = () => {
    if (name !== previous.current) {
      updateAge();
      previous.current = name;
    }
  };

  const onInfoLoaded = (info) => {
    if (info.length == 0 && process != "loading") {
      throw new Error("no matching age!");
    }
    else if(!info.age){
      throw new Error('name is not found')
    }
    setAge(info);
  };

  return (
    <div className="form-wrapper">
      <form>
        <textarea
          className="form-textarea"
          placeholder={"Enter the name to get age"}
          onChange={(e) => getName(e)}
          onBlur={changeOnBlur}
        ></textarea>
        {setContent(process, Text, age)}
      </form>
      <button className="form-btn" onClick={changeOnClick}>
        Get age
      </button>
    </div>
  );
};

const Text = (props) => {
  return <p>Potential age is {props.data.age}</p>;
};
export default Form;
