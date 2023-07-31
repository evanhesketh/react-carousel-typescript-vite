import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";
import { PhotoInterface } from "./interfaces";

interface CarouselPropsInterface {
  photos: PhotoInterface[];
  title: string;
};

/** Carousel: displays images and arrows to navigate through them
 *
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 *
 * State:
 * - currCardIdx: integer for current card index
 *
 * App --> Carousel --> Card
 */
function Carousel({ photos, title }: CarouselPropsInterface) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;

  //Increments currCardIdx state by 1
  function goForward() {
    setCurrCardIdx(currCardIdx + 1);
  }

  //Decrements currCardIdx state by 1
  function goBackward() {
    setCurrCardIdx(currCardIdx - 1);
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle
          ${currCardIdx !== 0 ? "visible" : "invisible"}`}
          onClick={goBackward}
        />

        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />

        <i
          className={`bi bi-arrow-right-circle
          ${currCardIdx !== total - 1 ? "visible" : "invisible"}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
