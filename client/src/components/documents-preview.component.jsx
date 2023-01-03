import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DocumentContext } from "../contexts/documents.context";
import Card from "./card.component";
import SearchBar from "./searchBar.component";

const DocumentPreview = () => {
  const { documents, isUpdated} = useContext(DocumentContext);
  const navigate = useNavigate();
  const [displayDocuments, setDisplayDocuments] = useState(documents);
  const [searchKeyword, setSearchKeyword] = useState("");
  const onChangeHandler = (event) => setSearchKeyword(event.target.value);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const filteredDocuments = documents.filter((doc) =>
      doc.doc_content.toLowerCase().includes(searchKeyword.toLowerCase()) || 
      doc.doc_title.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setDisplayDocuments(filteredDocuments)
  };
  const clickHandler = (id) => () => {
    navigate(`/documents/${id}`);
  };

  useEffect(() => {
    setDisplayDocuments(documents)
  }, [documents])

  return (
    <div className="mt-5 ml-5 mr-5">
      <div className="flex flex-col md:flex-row md:justify-between gap-2">
        <h1 className="text-3xl dark:text-white">Documents</h1>
        <SearchBar
          onChangeHandler={onChangeHandler}
          value={searchKeyword}
          onSubmitHandler={onSubmitHandler}
        />
      </div>
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {displayDocuments.map((doc) => (
          <Card
            key={doc.doc_id}
            id={doc.doc_id}
            title={doc.doc_title}
            description={doc.doc_content.slice(0, 100) + "..."}
            onClick={clickHandler(doc.doc_id)}
          />
        ))}
      </div>
    </div>
  );
};
export default DocumentPreview;
