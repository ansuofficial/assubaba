import React, { useState, useEffect, useRef } from "react";

const HeaderItems = () => {
  const [isSticky, setIsSticky] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > headerRef.current.offsetTop) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isSticky) {
      headerRef.current.classList.add("sticky");
    } else {
      headerRef.current.classList.remove("sticky");
    }
  }, [isSticky]);

  return (
    <div ref={headerRef} className="header-items-wrapper">
      <div className="header-items">
        <ul>
          <li>
            <a href="#">For</a>
          </li>
          <li>
            <a href="#">Top sales</a>
          </li>
          <li>
            <a href="#">Categories</a>
          </li>
        </ul>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default HeaderItems;
