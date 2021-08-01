import axios from "axios";

export function DeleteSnippet(id) {
  return axios.delete("http://127.0.0.1:8000/snippets/" + id.toString());
}
