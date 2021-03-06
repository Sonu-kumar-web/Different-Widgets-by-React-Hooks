import React, { useState } from "react";

const Accordion = ({ items }) => {
   // Initialization of state by Array Destructuring.
   const [activeIndex, setActiveIndex] = useState(null);

   // Helper function
   const onTitleClick = (index) => {
      //   console.log(index);
      setActiveIndex(index);
   };

   // index is the second argument of map() method
   const renderedItems = items.map((item, index) => {
      // title and content will active when we click on it.
      const active = index === activeIndex ? "active" : "";
      return (
         <React.Fragment key={item.title}>
            <div
               className={`title ${active}`}
               onClick={() => onTitleClick(index)}
            >
               <i className="dropdown icon"></i>
               {item.title}
            </div>
            <div className={`content ${active}`}>
               <p>{item.content}</p>
            </div>
         </React.Fragment>
      );
   });
   return (
      <div className="ui styled accordion" style={{ width: 1500 }}>
         {renderedItems}
      </div>
   );
};

export default Accordion;
