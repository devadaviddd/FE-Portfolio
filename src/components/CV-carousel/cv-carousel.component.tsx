import { motion, AnimatePresence, useInView } from "framer-motion";
import { wrap } from "popmotion";
import { cvs } from "../../constant";
import { useRef, useState } from "react";
import "./style.css";
import { ResponsiveCVLayout } from "../../layout/Signin";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: -1,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export const CVCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, cvs.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction} mode="sync">
        <div className="container">
          <div className="prev" onClick={() => paginate(-1)}>
            {"‣"}
          </div>
          <div className="next" onClick={() => paginate(1)}>
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
          exit="exit"
          ref={ref}
          transition={{
            opacity: {
              opacity: isInView ? 1 : 0,
              duration: 0.2,
            },
          }}
          style={{
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
            position: "absolute",
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
        />
      </AnimatePresence>
    </>
  );
};
