import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label, options, selected, onSelectedChange }) => {
   const [open, setOpen] = useState(false);

   const ref = useRef();

   // useEffect hook run only once
   useEffect(() => {
      const onBodyClick = (event) => {
         if (ref.current.contains(event.target)) {
            return;
         }
         setOpen(false);
      };

      document.body.addEventListener("click", onBodyClick);

      // Clean-up function
      return () => {
         document.body.removeEventListener("click", onBodyClick);
      };
   }, []);

   const renderedOptions = options.map((option) => {
      // Filter the option list
      if (option.value === selected.value) {
         return null;
      }

      return (
         <div
            key={option.value}
            className="item"
            onClick={() => onSelectedChange(option)}
         >
            {option.label}
         </div>
      );
   });

   // console.log(ref.current);

   return (
      <div ref={ref} className="ui form">
         <div className="field">
            {/* <label className="label">Select a Color</label> */}
            <label className="label">{label}</label>
            <div
               onClick={() => setOpen(!open)}
               // For showing and hiding the list
               className={`ui selection dropdown ${
                  open ? "visible active" : ""
               }`}
            >
               <i className="dropdown icon"></i>
               <div className="text">{selected.label}</div>
               {/* For showing and hiding the list */}
               <div className={`menu ${open ? "visible transition" : ""}`}>
                  {renderedOptions}
               </div>
            </div>
         </div>
         <div style={{ textAlign: "center", display: "none" }}>
            <h1
               style={{ color: `${selected.value}`, fontSize: 50 }}
            >{`The text color is ${selected.value}!`}</h1>
         </div>
      </div>
   );
};

export default Dropdown;
