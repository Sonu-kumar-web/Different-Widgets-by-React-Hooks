import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

// we can create items inside the component for outside the component it does not matter because it is a static Array
const options = [
   {
      label: "The Color Red",
      value: "red",
   },
   {
      label: "The Color Green",
      value: "green",
   },
   {
      label: "A Shade of Blue",
      value: "blue",
   },
   {
      label: "The Color Orange",
      value: "orange",
   },
];

const App = () => {
   const [selected, setSelected] = useState(options[0]);

   // Routes
   // const showDropdown = () => {
   //    if (window.location.pathname === "/Dropdown") {
   //       return <Dropdown />;
   //    }
   // };

   return (
      <div>
         <Header />
         <Route path="/">
            <Accordion items={items} />
         </Route>
         <Route path="/list">
            <Search />
         </Route>
         <Route path="/dropdown">
            <Dropdown
               label="Select a Color"
               options={options}
               selected={selected}
               onSelectedChange={setSelected}
            />
         </Route>
         <Route path="/translate">
            <Translate />
         </Route>
      </div>
   );
};

export default App;
