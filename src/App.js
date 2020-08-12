import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

// we can create items inside the component for outside the component it does not matter because it is a static Array
const items = [
   {
      title: "What is React?",
      content: "React is a front-end javascript library.",
   },
   {
      title: "Why use react?",
      content: "React is a good JS library.",
   },
   {
      title: "How do you use react?",
      content: "You can use react by creating component.",
   },
];

const App = () => {
   return (
      <div>
         {/* <Accordion items={items} /> */}
         <Search />
      </div>
   );
};

export default App;
