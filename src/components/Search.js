import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
   // Initialization of states
   const [term, setTerm] = useState("Programming");
   const [results, setResults] = useState([]);

   // Fetch data from wikipedia Api
   useEffect(() => {
      const search = async () => {
         const { data } = await axios.get(
            "https://en.wikipedia.org/w/api.php",
            {
               params: {
                  action: "query",
                  list: "search",
                  origin: "*",
                  format: "json",
                  srsearch: term,
               },
            }
         );
         setResults(data.query.search);
         console.log(data);
      };

      // Searching on initial render
      if (term && !results.length) {
         search();
      } else {
         //   User for Delay Request
         const timeoutId = setTimeout(() => {
            if (term) {
               search();
            }
         }, 500);

         // A function return by useEffect hook as a CLEANUP
         return () => {
            clearTimeout(timeoutId);
         };
      }
      // we have added result.length inside depencecny array (second argument) because of this warning
      // React Hook useEffect has a missing dependency: 'results.length'. Either include it or remove the dependency array  react-hooks/exhaustive-deps
   }, [term, results.length]);

   //    Render results
   const renderedResults = results.map((result) => {
      return (
         <div
            key={result.pageid}
            className="item"
            style={{ backgroundColor: "#d4d4d5", margin: 2 }}
         >
            <div className="right floated content">
               <a
                  className="ui button"
                  href={`https://en.wikipedia.org?curid=${result.pageid}`}
                  target="blank"
               >
                  Go
               </a>
            </div>
            <div className="content">
               <div className="header">{result.title}</div>
               <span
                  dangerouslySetInnerHTML={{ __html: result.snippet }}
               ></span>
               {/* {result.snippet} */}
            </div>
         </div>
      );
   });

   const onTextChange = (event) => {
      //   console.log(event.target.value);
      setTerm(event.target.value);
   };

   return (
      <div className="ui">
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
         <div className="ui celled list">{renderedResults}</div>
      </div>
   );
};

export default Search;
