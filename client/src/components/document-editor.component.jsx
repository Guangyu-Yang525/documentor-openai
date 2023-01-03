import Input from "./input.component";
import TextArea from "./textarea.component";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../api/apiFetch";
import { DocumentContext } from "../contexts/documents.context";

const DocumentEditor = () => {
  const { id } = useParams();
  const { documents, isUpdated, updateDocuments } = useContext(DocumentContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleChangeHandler = (event) => setTitle(event.target.value);
  const contentChangeHandler = (event) => setContent(event.target.value);
  const navigate = useNavigate();
  useEffect(() => {
    const document = documents.filter((doc) => doc.doc_id === parseInt(id))[0];
    setTitle(document.doc_title);
    setContent(document.doc_content);
  }, [documents, isUpdated]);

  const backToDocument = () => navigate(`/documents/${id}`);
  const handleEdit = async () => {
    try {
      const route = `/document/${id}`;
      const apiInput = {
        doc_title: title,
        doc_content: content,
      };
      await apiFetch.put(route, apiInput, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      updateDocuments();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4">
      <pre className="text-3xl dark:text-white">Edit Documents</pre>
      <button
        onClick={backToDocument}
        className="text-white bg-sky-500 rounded p-2 w-36 hover:bg-sky-600"
      >
        Back
      </button>
      <Input value={title} onChange={titleChangeHandler} />
      <TextArea value={content} onChange={contentChangeHandler} />
      <button
        onClick={handleEdit}
        className="text-white bg-sky-500 rounded p-2 w-36 hover:bg-sky-600"
      >
        Submit
      </button>
    </div>
  );
};

export default DocumentEditor;
