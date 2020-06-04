import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { AppBar, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import FilterVintageIcon from '@material-ui/icons/FilterVintage';
// import {HeaderBox, MyBox, MyDarkLink, MyLightLink, StyledToolbar} from "../../css/styles";
// import NavHeader from "../NavHeader";

import './App.css';

const menuItems = ["Strona główna", "Oferta", "Realizacje", "Galeria", "Kontakt"];

const menuItemsButtons = menuItems.map(text => {
  return (
    <Button key={text}>
      <Link to={`/${text.replace(/ +/g, "").replace("ł", "l").replace("ó", 'o')}`}>
        {text}
      </Link>
    </Button>
  );
});

function App() {
  const [open, setOpen] = useState(false);
  const mediaQuery = useMediaQuery("(max-width:600px)");

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const hamburger = (
    <IconButton
      edge="end"
      color="inherit"
      aria-label="menu"
      onClick={handleDrawerOpen}
    >
      <MenuIcon />
    </IconButton>
  );

  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}
        {/* <NavHeader/> */}
        <AppBar style={{ backgroundColor: '#1ea366' }} position="static">
          <Toolbar>
            {mediaQuery ? hamburger : <div>{menuItemsButtons}</div>}
            <Drawer open={open} onClose={handleDrawerClose}>
              <List>
                {menuItems.map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {text === "Strona główna" ? (
                        <FilterVintageIcon />
                      ) : (
                          <FilterVintageIcon />
                        )}
                    </ListItemIcon>
                    <ListItemText>
                      <Link
                        to={`/${text.replace(/ +/g, "").replace("ł", "l").replace("ó", 'o')}`}
                        onClick={handleDrawerClose}
                      >
                        {text}
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </List>
            </Drawer>
          </Toolbar>
        </AppBar>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/Stronaglowna">
            <div>Stronaglowna</div>
          </Route>
          <Route path="/Oferta">
            <div>Oferta</div>
          </Route>          
          <Route path="/Realizacje">
            <div>Realizacje</div>
          </Route>
          
          {/** And what will happen if path="/" was first instead last? */}
          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
