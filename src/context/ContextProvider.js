import React, { useContext, useState } from "react";

const StateContext = React.createContext();
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

function GetProperItem() {
  if (localStorage.getItem("colorMode") !== "#03C9D7") {
    return localStorage.getItem("colorMode");
  } else {
    return "#03C9D7";
  }
}
export const AppProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [ScreenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);
    setThemeSettings(false);
  };
  const setColor = (Color) => {
    setCurrentColor(Color);
    localStorage.setItem("colorMode", Color);
    setThemeSettings(false);
  };
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };
  const handleClose = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: false });
  };
  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        ScreenSize,
        setScreenSize,
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings,
        setMode,
        setColor,
        handleClose,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
export const useGlobalStateContext = () => useContext(StateContext);
