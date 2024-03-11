import { useHttp } from "./useHTTP";
const useService = () => {
  const { request, process, setProcess } = useHttp();
  const _req1 = "https://catfact.ninja/fact";
  const _req2 = "https://api.agify.io?name=";

  const getNewFact = async () => {
    const res = await request(`${_req1}`);
    return _transformData(res);
  };

  const getAge = async (name) => {
    const response = await request(`${_req2}${name}`);
    return _transformData2(response);
  };

  const _transformData = (text) => {
    return {
      length: text.length,
      fact: text.fact,
    };
  };
  const _transformData2 = (data) => {
    return {
      name: data.name,
      age: data.age,
    };
  };

  return {
    getNewFact,
    getAge,
    process,
    setProcess,
  };
};

export default useService;
