import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import apiFetch from "../api/apiFetch";
import { DocumentContext } from "../contexts/documents.context";

const Document = () => {
  const { id } = useParams();
  const { documents, isUpdated, updateDocuments} = useContext(DocumentContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const document = documents.filter((doc) => doc.doc_id === parseInt(id))[0];
    setTitle(document.doc_title);
    setContent(document.doc_content);
  }, [isUpdated]);

  const deleteDocuments = async () => {
    try {
      await apiFetch.delete(`/document/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      updateDocuments()
      backToDocuments()
    } catch (error) {
      console.log(error);
    }
  };

  const backToDocuments = () => navigate("/documents");

  return (
    <div className="w-full flex flex-col gap-4 p-4">
      <pre className="dark:text-white text-3xl whitespace-pre-wrap">{title}</pre>
      <div className="flex gap-4">
        <button
          onClick={backToDocuments}
          className="text-white bg-sky-500 rounded p-2 hover:bg-sky-600 w-36"
        >
          Back
        </button>
        <button className="text-white bg-sky-500 rounded p-2 hover:bg-sky-600 w-36">
          Edit
        </button>
        <button onClick={deleteDocuments} className="text-white bg-red-500 rounded p-2 hover:bg-red-600 w-36">
          Delete
        </button>
      </div>
      <div className="w-full rounded bg-gray-300 dark:bg-gray-600">
        <pre className="dark:text-white whitespace-pre-wrap p-2">{content}</pre>
      </div>
    </div>
  );
};
export default Document;
