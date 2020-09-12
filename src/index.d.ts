import * as React from "react";
interface SwipezorProps {
  mainText: any;
  overlayText: any;
  onSwipeDone: function;
  reset?: Number;
  classList?: String;
  overlayClassList?: String;
  caretClassList?: String;
  delta?: Number;
  minSwipeWidth?: Number;
  minSwipeVelocity?: Number;  
  caret?: any;
}
declare class Swipezor extends React.Component<SwipezorProps, any> {}

export default Swipezor;