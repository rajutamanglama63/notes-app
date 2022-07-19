import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";
import App from "./App";

// const notes = [
//   {
//     id: 1,
//     content: "HTML is easy",
//     date: "2019-05-30T17:30:31.098Z",
//     important: true,
//   },
//   {
//     id: 2,
//     content: "Browser can execute only JavaScript",
//     date: "2019-05-30T18:39:34.091Z",
//     important: false,
//   },
//   {
//     id: 3,
//     content: "GET and POST are the most important methods of HTTP protocol",
//     date: "2019-05-30T19:20:14.298Z",
//     important: true,
//   },
// ];

axios
  .get("http://localhost:5000/notes")
  .then((response) => {
    console.dir(response);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <App notes={response.data} />
      </React.StrictMode>
    );
  })
  .catch((err) => {
    console.log(err.message);
  });
