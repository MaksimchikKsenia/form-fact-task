import "./error.css";
import errorGif from "./errorGif.gif";
const Error = () => {
  return (
    <div className="wrapper-error">
      <img className='error-img' src={errorGif} alt="Error!" />
      <p className="blinking-text text">
        Error!Please try to upload the page and check the Internet connection!
      </p>
    </div>
  );
};

export default Error;
