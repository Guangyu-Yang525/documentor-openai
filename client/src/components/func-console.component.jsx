import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import apiFetch from "../api/apiFetch";
import { EXAMPLES, FUNCTIONALITIES, URLS } from "../constants/functionalities";
import { DocumentContext } from "../contexts/documents.context";
import { UserContext } from "../contexts/user.context";
import TextArea from "./textarea.component";

const FuncConsole = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { updateDocuments } = useContext(DocumentContext)
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const backToFeatures = () => navigate("/func")
  const [func, setFunc] = useState({
    id: 0,
    title: "",
    description: "",
  });
  const [example, setExample] = useState({
    input: "",
    output: "",
  });

  const onChangeHandler = (event) => setInput(event.target.value);
  const onSubmitHandler = async () => {
    const route = "/func" + URLS[id];
    const apiInput = {
      prompt: input,
    };
    try {
      const response = await apiFetch.post(route, apiInput, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setOutput(response.data.results.trim());
    } catch (error) {
      console.log(error);
      const { message } = error.response.data;
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
      });
    }
  };
  const clear = () => {
    setInput("");
    setOutput("");
  };
  const copyOutputToClipboard = () => navigator.clipboard.writeText(output);
  const saveOutputToDocument = async () => {
    const apiInput = {
      doc_title: URLS[id].slice(1) + " " + new Date().toLocaleString(),
      doc_content: output,
    };
    try {
      await apiFetch.post("/document/add", apiInput, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      updateDocuments()
    } catch (error) {
      console.log(error);
      const { message } = error.response.data;
      Swal.fire({
        title: "Error",
        text: message,
        icon: "error",
      });
    }
  };

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      navigate("/login");
      return;
    }
    setFunc(FUNCTIONALITIES.filter((func) => func.id === parseInt(id))[0]);
    setExample(EXAMPLES[id]);
  }, []);

  return (
    <div className="mt-5 ml-3 mr-3 mb-5 flex flex-col gap-4">
      <h1 className="text-3xl dark:text-white">{func.title}</h1>
      <button className="text-white bg-sky-500 rounded p-2 w-36" onClick={backToFeatures}>Back</button>
      <p className="dark:text-white">{func.description}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <TextArea
          title="Input"
          placeholder={example.input}
          value={input}
          onChange={onChangeHandler}
        />
        <TextArea
          title="Output"
          placeholder={example.output}
          value={output}
          disabled
        />
      </div>
      <div className="flex flex-row justify-end gap-4">
        <button
          className="text-white bg-sky-500 rounded p-2 w-36 hover:bg-sky-600"
          onClick={onSubmitHandler}
        >
          Submit
        </button>
        <button
          className="text-white bg-sky-500 rounded p-2 w-36 hover:bg-sky-600"
          onClick={clear}
        >
          Clear
        </button>
        <button
          className="text-white bg-sky-500 rounded p-2 w-36 hover:bg-sky-600"
          onClick={copyOutputToClipboard}
        >
          Copy output
        </button>
        <button
          className="text-white bg-sky-500 rounded p-2 w-36 hover:bg-sky-600"
          onClick={saveOutputToDocument}
        >
          Save output
        </button>
      </div>
    </div>
  );
};
export default FuncConsole;
