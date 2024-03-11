import Spinner from "./spinner/Spinner";
import Error from "./Error/Error";
import NotFound from "./NotFound/NotFound";

const setContent = (process, Component, data) => {
 
  switch (process) {
    case "loading":
      return <Spinner />;
    case "confirmed":
      return <Component data ={data}/> ;
    case "error":
      return <Error />;
    case "founding":
      return <NotFound />;
  }
};

export default setContent;
