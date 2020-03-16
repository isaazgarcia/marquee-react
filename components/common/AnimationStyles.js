import {keyframes} from "@emotion/core";
import {css} from "emotion";

export const fadeUp = ({percentageIn = `10%`}) => keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, ${percentageIn}, 0) ;
    transform: translate3d(0, ${percentageIn}, 0) ;
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`;
export const fadeDown = ({percentageIn = `-5%`}) => keyframes`
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, ${percentageIn} , 0);
    transform: translate3d(0, ${percentageIn}, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0 , 0);
  }
`;
