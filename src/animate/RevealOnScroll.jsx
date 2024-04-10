import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const RevealOnScroll = ({ children, type = "regular" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const scrollObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        scrollObserver.unobserve(entry.target);
      }
    });

    scrollObserver.observe(ref.current);

    return () => {
      if (ref.current) {
        scrollObserver.unobserve(ref.current);
      }
    };
  }, []);

  let transitionClass = "",
    defaultClass = "";

  switch (type) {
    case "regular": {
      defaultClass = "translate-y-0";
      transitionClass = "translate-y-[8rem]";
      break;
    }
    case "bounce-in": {
      defaultClass = "translate-x-0";
      transitionClass = "translate-x-[8rem]";
      break;
    }
    case "-bounce-in": {
      defaultClass = "translate-x-0";
      transitionClass = "-translate-x-[8rem]";
      break;
    }
    default:
      break;
  }
  const classes = `w-full transition-all duration-1000 
        ${
          isVisible
            ? `${defaultClass} opacity-100`
            : `${transitionClass} opacity-0`
        }`;
  return (
    <div ref={ref} className={classes}>
      {children}
    </div>
  );
};

RevealOnScroll.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.oneOf(["regular", "bounce-in", "-bounce-in"]),
};

export default RevealOnScroll;
