import React from "react";
import { Transition } from "react-transition-group";

export default function BgOverlay(props) {
  const defaultStyles = {
    position: "fixed",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1030,
    backgroundColor: "#000",
    transition: "all 0.5s cubic-bezier(0.7, 0.3, 0, 1)"
  };

  const transitionStyles = {
    entering: { opacity: 0, display: "block" },
    entered: { opacity: 0.5, display: "block" },
    exiting: { opacity: 0.1, display: "block" },
    exited: { opacity: 0, display: "none" }
  };

  return (
    <Transition in={props.state} timeout={300}>
      {(state) => (
        <div
          onClick={props.onClick}
          style={{
            ...defaultStyles,
            ...transitionStyles[state]
          }}
        />
      )}
    </Transition>
  );
}
