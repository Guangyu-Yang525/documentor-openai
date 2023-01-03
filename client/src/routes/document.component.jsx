/**
 * saved documents page use grids as well
 * but it should have an additional searchBar
 * for searching the documents
 * related components: document preview and document details(editor)
 * @returns
 */

import { Route, Routes } from "react-router-dom";
import Document from "../components/document.component";
import DocumentPreview from "../components/documents-preview.component";

const Documents = () => {
  return (
    <Routes>
      <Route index element={<DocumentPreview/>}/>
      <Route path=":id" element={<Document/>}/>
    </Routes>
  );
};
export default Documents;
