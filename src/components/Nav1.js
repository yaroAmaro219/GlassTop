import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from '../hooks';
import { GlobalStyles } from '../global';
import { theme } from '../theme';
import  Burger from './Burger';
import  Menu from './Menu'
import FocusLock from 'react-focus-lock';

function Nav1() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <div>
     
        <div class='nav-text'>
          <a class='link' href='/begin'>Services</a>
          <a class='link' href='/work'>How We Work</a>
          <a class='link' href='/about'>About Us</a>
          <a class='link' href='/reviews'>Reviews</a>
          <a class='link' href='/contact'>Contact</a>
        </div>
      <div class='burger-container'>
        <ThemeProvider class='theme' theme={theme}>
          <>
            <GlobalStyles />
            <div ref={node}>
              <FocusLock disabled={!open}>
                <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
                <Menu open={open} setOpen={setOpen} id={menuId} />
              </FocusLock>
            </div>
          </>
        </ThemeProvider>
        </div>
      </div>
  );
}

export default Nav1;
