import React from "react";

const Link = ({ className, href, children }) => {
   const onClick = (event) => {
      //this is used for 1) In Window "CTRL+click", In Mack "CMD+click" then link will be open in new Tab
      if (event.metaKey || event.ctrlKey) {
         return;
      }

      event.preventDefault();
      window.history.pushState({}, "", href);

      const navEvent = new PopStateEvent("popstate");
      window.dispatchEvent(navEvent);
   };

   return (
      <a onClick={onClick} className={className} href={href}>
         {children}
      </a>
   );
};

export default Link;
