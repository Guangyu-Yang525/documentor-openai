import { createContext, useContext, useEffect, useState } from "react";
import apiFetch from "../api/apiFetch";
import { UserContext } from "./user.context";

export const DocumentContext = createContext({
  documents: [],
  setDocuments: () => null,
  isUpdated: false,
  updateDocuments: () => null,
});

export const DocumentProvider = ({ children }) => {
  const [documents, setDocuments] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const { authenticated } = useContext(UserContext)
  const updateDocuments = () => setIsUpdated(!isUpdated)
  const getDocuments = async () => {
    if (!authenticated) {
      setDocuments([])
      return
    }
    try {
      const response = await apiFetch.get("document/all", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      });
      setDocuments(response.data.documents)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDocuments()
  }, [authenticated, isUpdated]);

  const value = { documents, setDocuments, isUpdated, updateDocuments};
  return (
    <DocumentContext.Provider value={value}>
      {children}
    </DocumentContext.Provider>
  );
};
