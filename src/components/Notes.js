import React from "react";
import { NewItem, ItemList } from "./Items";

export default function Note() {
  return (
    <header className="App-header">
      <h2>Note App</h2>
      <NewItem />
      <ItemList />
    </header>
  );
}
