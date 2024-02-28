import React from "react";
import Headingg from "./components/Headingg";
import "bootstrap/dist/css/bootstrap.min.css";
import Inputt from "./components/Inputt";
import Show from "./components/Show";
import "./App.css";
import TodoItemsContextProvider from "./store/ItemsContext";
// import ContextProvider from "../store/ContextStore";
export default function App() {
  return (
    <>
      {/* <ContextProvider></ContextProvider> */}
      <TodoItemsContextProvider>
        <Headingg></Headingg>
        <Inputt></Inputt>

        <Show></Show>
      </TodoItemsContextProvider>
    </>
  );
}
