import React, { useState } from "react";
import { jsDropdown } from "./Navitem";
import { Link } from "react-router-dom";


function Dropdown2() {
  const [dropdown2, setDropdown2] = useState(false);

  return (
    <>
      <ul
        className={dropdown2 ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown2(!dropdown2)}
      >
        {jsDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown2(false)}
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

export default Dropdown2;