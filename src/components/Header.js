import React from "react";
import Link from "./Link";

const Header = () => {
   return (
      <div className="ui secondary pointing menu">
         <Link href="/" className="item">
            <button className="ui button">Accordion</button>
         </Link>
         <Link href="/list" className="item">
            <button className="ui button">Search</button>
         </Link>
         <Link href="/dropdown" className="item">
            <button className="ui button">Dropdown</button>
         </Link>
         <Link href="/translate" className="item">
            <button className="ui button">Translate</button>
         </Link>
      </div>
   );
};

export default Header;
