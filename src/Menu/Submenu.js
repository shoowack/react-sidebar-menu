import React from "react";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";

export default function Submenu(props) {
  return (
    <>
      {props.items.map((subMenuItem, index) => {
        const { url, text, icon } = subMenuItem;

        return (
          <li key={index}>
            <a key={index} href={url}>
              {icon ? <i className={icon}></i> : ""}
              <span>{text}</span>
            </a>
          </li>
        );
      })}
    </>
  );
}
