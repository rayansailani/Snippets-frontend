import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getSnippetDetail } from "../services/getSnippetDetail";
import { DeleteSnippet } from "./deleteSnippet";
import { PostSnippet } from "../services/putSnippet";
const SnippetDetail = () => {
  const [snippet, setSnippet] = useState({});
  const { id } = useParams();
  const history = useHistory();
  useEffect(() => {
    getSnippetDetail(id).then((items) => setSnippet(items.data));
  }, []);
  const handleDelete = () => {
    DeleteSnippet(id)
      .then((response) => console.log(response))
      .then((_) => history.push("/"));
  };
  return (
    <div>
      <p>Title: {snippet.title}</p>
      <code>Code: {snippet.code}</code>
      <p>Language: {snippet.language}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};
export default SnippetDetail;
