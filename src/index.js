import React, { useState, useEffect, useRef } from 'react'
import { useSwipeable } from 'react-swipeable';
import Arrow from "./arrow.png";

import "./swipezor.css";

function findLeft(element) {
  var rec = element.getBoundingClientRect();
  return rec.left + window.scrollX;
}

function SwipeButton({
  mainText,
  overlayText,
  onSwipeDone,
  reset,
  classList = '',
  overlayClassList = '',
  caretClassList = '',
  delta = 10,
  minSwipeWidth = 0.6,
  minSwipeVelocity = 0.6,
  caret = null
}) {
  const [overlayWidth, setOverlayWidth] = useState(40);
  const [swipeComplete, setSwipeComplete] = useState(false);
  const buttonRef = useRef();

  useEffect(() => {
    if (reset) {
      setSwipeComplete(false);
      setOverlayWidth(40);
    }
  }, [reset]);

  const handlers = useSwipeable({
    onSwipedRight: (data) => {
      if (swipeComplete)
        return;
      const butWidth = buttonRef.current.offsetWidth;
      if (data.velocity > minSwipeVelocity) {
        setOverlayWidth(butWidth);
        setSwipeComplete(true);
        setTimeout(() => onSwipeDone(), 100);
      }
      else {
        const offsetLeft = findLeft(buttonRef.current);
        const startPos = Math.abs(data.initial[0] - offsetLeft);
        if (startPos <= 100 &&
          (data.event.type === "touchend" ? data.event.changedTouches[0].clientX - offsetLeft : data.event.offsetX) > minSwipeWidth * butWidth
        ) {
          setOverlayWidth(butWidth);
          setSwipeComplete(true);
          setTimeout(() => onSwipeDone(), 100);
        }
        else
          setOverlayWidth(40);
      }
    },
    onSwiping: (data) => {
      if (swipeComplete)
        return;
      const offsetLeft = findLeft(buttonRef.current);
      const startPos = Math.abs(data.initial[0] - offsetLeft);
      if (startPos <= 100) {
        if (data.event.type && data.event.type === "touchmove")
          setOverlayWidth(data.event.touches[0].clientX - offsetLeft);
        else
          setOverlayWidth(data.event.offsetX);
      }

    },
    delta,
    trackMouse: true,
    preventDefaultTouchmoveEvent: true
  });

  return (
    <div className={`swipezor-but ${classList}`} {...handlers} ref={(t) => {
      handlers.ref(t);
      buttonRef.current = t;
    }}>
      <div className={`swipezor-overlay ${overlayClassList}`} style={{ width: overlayWidth }}>
        <div className="swipezor-overlay-wrapper">
          <div className={`swipezor-caret-wrapper ${caretClassList}`}>
            {caret ? caret : <img src={Arrow} alt="caret" style={{ maxWidth: '100%' }} />}
          </div>
          <div className="swipezor-overlay-txt">
            {overlayText}
          </div>
        </div>
      </div>
      {mainText}
    </div>
  )
}

export default SwipeButton;
