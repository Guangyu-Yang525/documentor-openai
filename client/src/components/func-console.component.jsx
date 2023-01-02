import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { EXAMPLES, FUNCTIONALITIES } from "../constants/functionalities";
import { UserContext } from "../contexts/user.context";
import TextArea from "./textarea.component";

const FuncConsole = () => {
  const { id } = useParams();
  const { authenticated } = useContext(UserContext);
  const navigate = useNavigate();
  const [func, setFunc] = useState({
    id: 0,
    title: "",
    description: "",
  });
  const [example, setExample] = useState({
    input: "",
    output: "",
  });

  useEffect(() => {
    if (!authenticated) {
      navigate("/login");
      return;
    }
    setFunc(FUNCTIONALITIES.filter((func) => func.id === parseInt(id))[0]);
    setExample(EXAMPLES[id]);
  }, []);

  return (
    <div className="mt-5 ml-3 mr-3 mb-5 flex flex-col gap-4">
      <h1 className="text-3xl dark:text-white">{func.title}</h1>
      <p className="dark:text-white">{func.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <TextArea title="Input" placeholder={example.input} />
        <TextArea title="Output" placeholder={example.output} />
      </div>
    </div>
  );
};
export default FuncConsole;
