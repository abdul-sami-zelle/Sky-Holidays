import React, { useState, useRef, useEffect, useContext } from 'react';
import './index.css';
import CircularButtons from '../../utils/circularButtons/circularButton';
import CardDesign3 from '../../utils/CardDesign3';
import HeadingTitle1 from '../../utils/HeadingTitle1';
import { destinations } from '../../TestData/data';


export default function TopDestinationSlider() {
  const appointmentDatesRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);


  useEffect(() => {
    const handleScroll = () => {
      if (appointmentDatesRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = appointmentDatesRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
      }
    };

    if (appointmentDatesRef.current) {
      appointmentDatesRef.current.addEventListener('scroll', handleScroll);
      handleScroll();
    }

    return () => {
      if (appointmentDatesRef.current) {
        appointmentDatesRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);


  const handleMouseDown = (e) => {
    setStartX(e.pageX - appointmentDatesRef.current.offsetLeft);
    setScrollLeft(appointmentDatesRef.current.scrollLeft);
    appointmentDatesRef.current.style.cursor = 'grabbing';
  };

  const handleMouseMove = (e) => {
    if (!startX) return;
    e.preventDefault();
    const x = e.pageX - appointmentDatesRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    appointmentDatesRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setStartX(null);
    appointmentDatesRef.current.style.cursor = 'grab';
  };



  return (
    <div className="topDestinationSlider">

      <HeadingTitle1 textAlign={"center"} color={"var(--secondary-color)"} marginBottom={"30px"} marginTop={"0px"} heading={"Top Destinations"} />


      {canScrollLeft && (
        <div
          style={{
            position: "absolute",
            left: 50,
            top: "55%",
            transform: "translateY(-50%)",
            zIndex: 9999,
          }}
        >
          <CircularButtons
            type={"back"}
            onpressed={() =>
              appointmentDatesRef.current.scrollBy({ left: -100, behavior: "smooth" })
            }
          />
        </div>
      )}
      {canScrollRight && (
        <div
          style={{
            position: "absolute",
            right: 50,
            top: "55%",
            transform: "translateY(-50%)",
            zIndex: 9999,
          }}
        >
          <CircularButtons
            type={"forward"}
            onpressed={() =>
              appointmentDatesRef.current.scrollBy({ left: 100, behavior: "smooth" })
            }
          />
        </div>
      )}


      <div
        className="appointmentDates"
        ref={appointmentDatesRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >


        {destinations.map((item, index) => (
          <CardDesign3 title={item.name} img={item.image} />
        ))}


      </div>
    </div>
  )
}