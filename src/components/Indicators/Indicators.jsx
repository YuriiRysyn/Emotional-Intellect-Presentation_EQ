import React from 'react';
import classNames from 'classnames/bind';

import './Indicators.scss';

export const Indicators = ({ selectedSlide, setSelectedSlide}) => {

  const toNextSlide = () => {
    if (selectedSlide === 3) {
      setSelectedSlide(1)
      return;
    };

    setSelectedSlide(selectedSlide + 1)
  }

  return (
    <>
    <div className="indicators">

      <button className= {classNames(
        "indicators__btn ", 
        { "indicators__btn--active": selectedSlide === 1 }
        )} 
        onClick={()=> setSelectedSlide(1)}
      />

      <button className= {classNames(
        "indicators__btn ", 
        { "indicators__btn--active": selectedSlide === 2 }
        )} 
        onClick={()=> setSelectedSlide(2)}
      />

      <button className= {classNames(
        "indicators__btn ", 
        { "indicators__btn--active3": selectedSlide === 3 }
        )} 
        onClick={()=> setSelectedSlide(3)}
      />
    </div>
    
    <button 
      className= {classNames(
        "nextSlideBtn", 
        { "nextSlideBtn3": selectedSlide === 3 }
      )} 
      onClick={toNextSlide}
    />
    </>
  );
}
