import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
   const [term, setTerm] = useState("");

   useEffect(() => {
      const search = async () => {
         await axios.get("abc");
      };
      search();
   }, [term]);

   const onTextChange = (event) => {
      console.log(event.target.value);
      setTerm(event.target.value);
   };

   return (
      <div className="ui container">
         <div className="ui form">
            <div className="field">
               <label>Enter Search Term</label>
               <input
                  value={term}
                  onChange={onTextChange}
                  className="input"
                  required
                  placeholder="Search..."
               />
            </div>
         </div>
      </div>
   );
};

export default Search;
