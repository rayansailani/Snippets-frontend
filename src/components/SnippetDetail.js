import React from "react";
import { useParams } from "react-router-dom";

const SnippetDetail = () => {
  const { id } = useParams();
  return <h1>Snippet Detail - {id}</h1>;
};
export default SnippetDetail;
