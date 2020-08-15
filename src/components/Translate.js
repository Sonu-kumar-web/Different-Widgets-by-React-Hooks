// API Key=> "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM"
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
   {
      label: "Afrikaans",
      value: "af",
   },
   {
      label: "Arabic",
      value: "ar",
   },
   {
      label: "Hindi",
      value: "Hi",
   },
   {
      label: "Bengali",
      value: "bn",
   },
   {
      label: "Kannada",
      value: "kn",
   },
];

const Translate = () => {
   const [language, setLanguage] = useState(options[0]);
   const [text, setText] = useState("");

   return (
      <div>
         <div className="ui form">
            <div className="field">
               <label>Enter text</label>
               <input
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your word"
               />
            </div>
         </div>
         <br />
         <Dropdown
            display="none"
            label="Select a Language"
            options={options}
            selected={language}
            onSelectedChange={setLanguage}
         />
         <hr />
         <h3 className="ui header">Output</h3>
         <Convert text={text} language={language} />
      </div>
   );
};

export default Translate;
