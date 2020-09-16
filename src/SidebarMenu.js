import React, { useState } from "react";
import "./menu.scss";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "jquery";
import "bootstrap";
import BgOverlay from "./BgOverlay";
import Submenu from "./Menu/Submenu";
import menuItems from "./Menu/Items";

export default function SidebarMenu() {
  const [menuState, setMenuState] = useState(false);
  const [bgOverlayState, setBgOverlayState] = useState(false);

  const toggleMenu = () => {
    setBgOverlayState(!bgOverlayState);
    setMenuState(!menuState);
  };

  return (
    <>
      <BgOverlay state={bgOverlayState} onClick={toggleMenu} />
      <div
        className="topbar-navigation-toggler"
        onClick={toggleMenu}
        aria-controls="mainNavigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={"menu" + (menuState ? " active" : "")}>
        <div className="menu-header">
          <div
            className="menu-header__close ml-3"
            onClick={toggleMenu}
            aria-controls="mainNavigation"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
          </div>
        </div>
        <ul className="menu-links py-2 m-0">
          <ul className="list-unstyled components">
            {menuItems.map((menuItem, index) => {
              const { url, text, icon, submenu, disabled } = menuItem;

              var menuItemProps = {
                key: index,
                href: submenu ? `#${text.toString().toLowerCase()}` : url,
                "data-toggle": submenu ? "collapse" : "",
                "aria-expanded": "false"
              };

              return (
                <li key={index}>
                  <a
                    {...menuItemProps}
                    className={
                      (disabled ? "disabled " : "") +
                      (submenu ? "dropdown-toggle collapsed " : "")
                    }
                  >
                    {icon ? <i className={icon}></i> : ""}
                    <span>{text}</span>
                  </a>
                  {submenu ? (
                    <ul
                      className="collapse list-unstyled"
                      id={`${text.toString().toLowerCase()}`}
                    >
                      <Submenu items={submenu} />
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              );
            })}
          </ul>
        </ul>
      </div>
    </>
  );
}
