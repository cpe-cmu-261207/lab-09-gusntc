import React, { useState, useContext } from "react";
import {
  IconCheck,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
} from "@tabler/icons";
import { ThemeContext } from "../context/ThemeContext";

export default function Todolist(props) {
  const [showBtn, setshowBtn] = useState(false);
  const { selTheme } = useContext(ThemeContext);

  return (
    <div
      className="border-bottom p-1 py-2 fs-2 d-flex gap-2"
      onMouseOver={() => setshowBtn(true)}
      onMouseOut={() => setshowBtn(false)}
    >
      {/* Todolist */}
      <span
        className="me-auto"
        style={
          props.complete
            ? { textDecoration: "line-through", color: selTheme.foreground }
            : null
        }
      >
        {props.title}
      </span>
      {/* control hide and show BTN */}
      {showBtn && (
        <>
          {" "}
          <button className="btn btn-success" onClick={() => props.markBtn()}>
            <IconCheck />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.moveupBtn()}
          >
            <IconArrowUp />
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => props.movedownBtn()}
          >
            <IconArrowDown />
          </button>
          <button className="btn btn-danger" onClick={() => props.deleteBtn()}>
            <IconTrash />
          </button>{" "}
        </>
      )}
    </div>
  );
}
