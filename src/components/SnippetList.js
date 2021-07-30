import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getList } from "../services/getList";
import SnippetDetail from "./SnippetDetail";
const SnippetList = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    let mounted = true;
    getList().then((items) => {
      if (mounted) {
        setList(items.data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <div>
      {list.map((snippet) => {
        return (
          <div>
            <p>Title: {snippet.title}</p>
            <Link to={"/snippet/" + snippet.id.toString()}>
              Code: {snippet.code}
            </Link>
            <p>Language: {snippet.language}</p>
          </div>
        );
      })}
    </div>
  );
};
export default SnippetList;
