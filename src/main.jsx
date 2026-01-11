import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import ProjectDetails from "./components/projects/ProjectDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('/projectsData.json'),
  },
  {
    path: "/projects/:id",
    element: <ProjectDetails/>,
    loader: () => fetch('/projectsData.json'),
  },

]);


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);