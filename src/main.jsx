import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import App from "./fragments/App";
import LogIn from "./fragments/Usuario/LogIn";
import Registro from "./fragments/Usuario/Registro";
import ListaExamenes from "./fragments/Examenes/ListaExamenes";
import Examen from "./fragments/Examenes/Preguntas/Examen";
import RespuestasExamen from "./fragments/Examenes/Respuestas/RespuestasExamen";

const MainContext = createContext();
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "login", element: <LogIn /> },
      { path: "registro", element: <Registro />},
      { path: "examenes", element: <ListaExamenes /> },
      { path: "examen", element: <Examen />},
      { path: "respuestas", element: <RespuestasExamen />}
    ],
  },
  {
    path: "/admin",
    element: <h1>hola admin</h1>,
  },
  {
    path: "*",
    element: <Navigate to="/login" />,
  },
]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
export { MainContext };