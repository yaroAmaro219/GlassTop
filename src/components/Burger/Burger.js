import React, {useState} from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './Burger.styled';
import useWindowScrollPosition from "@rehooks/window-scroll-position";

// TestNav = () => {
//   const [change, setChange] = useState(false);
//   const changePosition = 10;

//   let position = useWindowScrollPosition();
//   // position == { x: 0, y: 0 }

//   if (position.y > changePosition && !change) {
//     setChange(true);
//   }

//   if (position.y <= changePosition && change) {
//     setChange(false);
//   }

//   let style = {
//     backgroundColor: change ? "white" : "transparent",
//     transition: ".3s ease",
//     height: "69px",
//     position: "fixed",
//     right: 0,
//     left: 0,
//     top: 0,
//   };
 
//   let style2 = {
//     color: change ? "#464646" : "white",
//   }

//   let navtext = {
//     width: '100%',
//     display: 'flex',
//   }
// }

const Burger = ({ open, setOpen, ...props }) => {
  const [change, setChange] = useState(false);
  const changePosition = 10;

  let position = useWindowScrollPosition();

  if (position.y > changePosition && !change) {
    setChange(true);
  }

  if (position.y <= changePosition && change) {
    setChange(false);
  }

  let style2 = {
    backgroundcolor: change ? "#464646" : "white",
  }
  const isExpanded = open ? true : false;
  
  return (
    <StyledBurger  class='burger' aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span style={style2} />
      <span style={style2} />
      <span style={style2} />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;
