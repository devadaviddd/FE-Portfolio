import { motion, AnimatePresence, useInView } from "framer-motion";
import { wrap } from "popmotion";
import { cvs } from "../../constant";
import { useEffect, useRef, useState } from "react";
import "./style.css";
import { ResponsiveCVLayout } from "../../layout/Signin";
import { useScrollBlock } from "../../hooks";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      y: 0,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1,
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const CVCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
 const buttonRef = useRef<any>(null);

  const [blockScroll, allowScroll] = useScrollBlock();
  const [isClickable, setIsClickable] = useState(true);
  const handleNextClick = (direction: number) => {
    if (!isClickable) {
      return; 
    }
    paginate(direction);
    blockScroll();
    setIsClickable(false); 
    setTimeout(() => {
      setIsClickable(true); 
    }, 900);
    
  };
  const imageIndex = wrap(0, cvs.length, page);


  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <div className="container">
          <div className="prev" onClick={() => handleNextClick(-1)}>
            {"‣"}
          </div>
          <div ref={buttonRef} className="next" onClick={() => handleNextClick(1)}>
            {"‣"}
          </div>
        </div>
        <ResponsiveCVLayout
          key={page}
          src={require("../../" + cvs[imageIndex].imagePath + ".png")}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          style={{
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            transitionDuration: "0.5s"
          }}
          id="cvImage"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          onTransitionEnd={() => {
            allowScroll();
            
          }}
        />
      </AnimatePresence>
    </>
  );
};
