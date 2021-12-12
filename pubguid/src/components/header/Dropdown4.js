import React, { useState } from "react";
import { waDropdown } from "./Navitem";
import { Link } from "react-router-dom";


function Dropdown4() {
  const [dropdown4, setDropdown4] = useState(false);

  return (
    <>
      <ul
        className={dropdown4 ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown4(!dropdown4)}
      >
        {waDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown4(false)}
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

export default Dropdown4;