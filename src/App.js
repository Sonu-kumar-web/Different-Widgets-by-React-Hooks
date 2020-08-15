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
      content:
         "React is a JavaScript library created for building fast and interactive user interfaces for web and mobile applications. It is an open-source, component-based, front-end library responsible only for the application’s view layer. In Model View Controller (MVC) architecture, the view layer is responsible for how the app looks and feels.",
   },
   {
      title: "Why react?",
      content:
         "Because React is easy creation of dynamic applications,Improved performance,Reusable components,Unidirectional data flow,It can be used for the development of both web and mobile apps",
   },
   {
      title: "What is JavaScript framework?",
      content:
         "Javascript is a dynamic programming language which is widely used for developing web applications. It is very lightweight and is supported by most of the modern browsers. Moreover, JavaScript supports both object-oriented programming and procedural programming. Thus, it is used for creating web pages with a client-side script to interact with the user and make the web pages dynamic and robust.",
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
