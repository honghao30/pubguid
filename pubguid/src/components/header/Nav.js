import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Nav.scss';
import './dropdown.scss';
import { navItems } from './Navitem';
import Dropdown from "./Dropdown1";
import Dropdown2 from "./Dropdown2";
import Dropdown3 from "./Dropdown3";
import Dropdown4 from "./Dropdown4";

function Nav() {
  const [ScrollY, setScrollY] = useState(0); 
  const [ScrollActive, setScrollActive] = useState(false);
  function  handleScroll() {
    if(ScrollY > 120) {
      setScrollY(window.pageYOffset);
      setScrollActive(true);
    } else {
      setScrollY(window.pageYOffset);
      setScrollActive(false);
    }    
  }
  // 스크롤시 메뉴 고정
  useEffect(() => {
    function scrollListener(){
      window.addEventListener('scroll',handleScroll);
    }
    scrollListener();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);

    return (
      <div className={ScrollActive ? "gnb__section fixed" : "gnb__section"}>      
        <h1>
          <Link to="/">
            봄이 오나         
          </Link>
        </h1>
        <ul className="gnb__list">
          {navItems.map((item) => {
            if (item.title === "퍼블리싱"){
              return (
                <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
               >
                <Link to={item.path}>{item.title}</Link>
                  {dropdown && <Dropdown />}
              </li>                
              );
            }
            if (item.title === "스크립트"){
              return (
                <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown2(true)}
                onMouseLeave={() => setDropdown2(false)}
               >
                <Link to={item.path}>{item.title}</Link>
                  {dropdown2 && <Dropdown2 />}
              </li>                
              );
            }      
            if (item.title === "프론트엔드"){
              return (
                <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown3(true)}
                onMouseLeave={() => setDropdown3(false)}
               >
                <Link to={item.path}>{item.title}</Link>
                  {dropdown3 && <Dropdown3 />}
              </li>                
              );
            }       
            if (item.title === "웹접근성"){
              return (
                <li
                key={item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown4(true)}
                onMouseLeave={() => setDropdown4(false)}
               >
                <Link to={item.path}>{item.title}</Link>
                  {dropdown4 && <Dropdown4 />}
              </li>                
              );
            }                         
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );            
          })}                 
        </ul>
      </div>

  );
}
export default Nav;
