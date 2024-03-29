import React, { useState } from "react";

function Slideshow({ slides }) {

  /* Crée un Hook d'état */
  const [current, setCurrent] = useState(0); //je définie l'index du premier slide à 0
  //const length = slides.length; //longueur du tableau de slides
const length = slides ? slides.length : 0;

  /**Function pour l'image  suivante */
  const nextImage = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); // on repart au premier slide quand on arrive au dernier
  };
  /**Function pour l'image precedente */
  const prevImage = () => {
    setCurrent(current === 0 ? length - 1 : current - 1); // on repart au dernier slide quand on est au premier
  };

  if (!Array.isArray(slides) || slides.length <= 0) {

    return null;
  }
  return (
    <section className="slide">
      {length > 1 && (
        <p className="left-Arrow" onClick={prevImage}>
        </p>
      )}
      {length > 1 && (
        <p className="right-Arrow" onClick={nextImage}>
        </p>
      )}
      {slides.map((image, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slider" : "slider"}
          >
            {index === current && (
              <img src={image} alt="img-appartement" className="slider__image" />
            )}
           
          </div>
        );
      })}
    </section>
  );
}

export default Slideshow;