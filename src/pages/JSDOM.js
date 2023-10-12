import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cardGen from "../images/carouselImages/cardGen.png";
import colourGuesser from "../images/carouselImages/colourGuesser.png";
import dice1Player from "../images/carouselImages/dice1Player.png";
import dice2Player from "../images/carouselImages/dice2Player.png";
import diceRoller from "../images/carouselImages/diceRoller.png";
import drumKit from "../images/carouselImages/drumKit.png";
import keyCodeGen from "../images/carouselImages/keyCodeGen.png";

const JSDOM = () => {
  return (
    <>
      <div className="JSDOMBox">
        <h1>JSDOM</h1>
        <p>
          As part of the Master:Software course, I gained knowledge and practice
          in the use of JSDOM.
        </p>
        <p>
          I have used this to create different applications to show the acquired
          knowledge.
        </p>{" "}
        <div className="carouselWindow">
          <Carousel
            width="25%"
            autoPlay="true"
            infiniteLoop="true"
            dynamicHeight="false"
          >
            <div>
              <img
                className="carouselImage"
                src={keyCodeGen}
                alt="keyCodeGen"
              />
            </div>
            <div>
              <img
                className="carouselImage"
                src={colourGuesser}
                alt="colourGuesser"
              />
            </div>
            <div>
              <img className="carouselImage" src={drumKit} alt="drumKit" />
            </div>
            <div>
              <img className="carouselImage" src={cardGen} alt="cardGen" />
            </div>
            <div>
              <img
                className="carouselImage"
                src={dice1Player}
                alt="dice1Player"
              />
            </div>
            <div>
              <img
                className="carouselImage"
                src={dice2Player}
                alt="dice2Player"
              />
            </div>
            <div>
              <img
                className="carouselImage"
                src={diceRoller}
                alt="diceRoller"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default JSDOM;
