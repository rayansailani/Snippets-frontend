import axios from "axios";
export function getList() {
  return axios.get("http://127.0.0.1:8000/snippets");
}
