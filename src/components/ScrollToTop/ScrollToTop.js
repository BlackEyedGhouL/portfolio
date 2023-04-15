import React, { useEffect, useState } from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import "./ScrollToTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => (window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false));

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isVisible ? (
    <div className="scroll-top">
      <ArrowUpwardIcon fontSize="large" onClick={handleClick} />
    </div>
  ) : null;
};

export default ScrollToTop;
