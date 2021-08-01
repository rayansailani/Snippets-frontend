import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { PostSnippet } from "../services/postSnippet";
const CreateSnippet = () => {
  const [snippet, setSnippet] = useState({});
  const history = useHistory();
  const createSnippetHandler = (event) => {
    event.preventDefault();
    PostSnippet(snippet)
      .then(
        (error) => console.log(error),
        (response) => {
          console.log(response);
        }
      )
      .then((_) => history.push("/"));
  };
  return (
    <form onSubmit={createSnippetHandler}>
      <h1>Create a New Snippet</h1>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        onChange={(event) =>
          setSnippet((prev) => {
            return {
              ...prev,
              title: event.target.value,
            };
          })
        }
      />
      <br />
      <br />
      <label htmlFor="code">Code</label>
      <input
        type="text"
        id="code"
        onChange={(event) =>
          setSnippet((prev) => {
            return {
              ...prev,
              code: event.target.value,
            };
          })
        }
      />
      <br />
      <br />
      <label htmlFor="lang">Language</label>
      <input
        type="text"
        id="lang"
        onChange={(event) =>
          setSnippet((prev) => {
            return {
              ...prev,
              language: event.target.value,
            };
          })
        }
      />
      <br />
      <br />
      <button type="submit">Create</button>
    </form>
  );
};
export default CreateSnippet;
