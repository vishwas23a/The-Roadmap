import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import About from "./pages/About";
import Contact from "./pages/Contact.jsx";
import Page2 from "./components/Page2.jsx";
import Javapage from "./components/Javapage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Clang from "./components/Clang.jsx";
import Python from "./components/Python.jsx";
import Javascript from "./components/Javascript.jsx";
import Cplus from "./components/Cplus.jsx";
import Csharp from "./components/Csharp.jsx";
import Reactjs from "./components/Reactjs.jsx";
import Reactnative from "./components/Reactnative.jsx";
import Flutter from "./components/Flutter.jsx";
import Navbar from "./components/Navbar.jsx";
import Body from "./components/Body.jsx";
import Angular from "./components/Angular.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
  },

  {
    path: "Navbar",
    element: <Navbar />,
    children: [
      {
        path: "",
        element: <Page2 />,
      },
      {
        path: "Page2",
        element: <Page2 />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "Javapage",
        element: <Javapage />,
      },
      {
        path: "Clang",
        element: <Clang />,
      },
      {
        path: "Cplus",
        element: <Cplus />,
      },
      {
        path: "Python",
        element: <Python />,
      },
      {
        path: "Javascript",
        element: <Javascript />,
      },
      {
        path: "Csharp",
        element: <Csharp />,
      },
      {
        path: "Reactjs",
        element: <Reactjs />,
      },
      {
        path: "Reactnative",
        element: <Reactnative />,
      },
      {
        path: "Flutter",
        element: <Flutter />,
      },
      {
        path: "Angular",
        element: <Angular />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
