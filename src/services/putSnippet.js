import axios from "axios";

export function PostSnippet(newSnippet) {
  return axios.put("http://127.0.0.1:8000/snippets/", {
    title: newSnippet.title,
    code: newSnippet.code,
    linenos: false,
    language: newSnippet.language,
    style: "friendly",
  });
}
