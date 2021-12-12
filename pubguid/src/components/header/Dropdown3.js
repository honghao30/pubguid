import React, { useState } from "react";
import { feDropdown } from "./Navitem";
import { Link } from "react-router-dom";


function Dropdown3() {
  const [dropdown3, setDropdown3] = useState(false);

  return (
    <>
      <ul
        className={dropdown3 ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown3(!dropdown3)}
      >
        {feDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown3(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown3;