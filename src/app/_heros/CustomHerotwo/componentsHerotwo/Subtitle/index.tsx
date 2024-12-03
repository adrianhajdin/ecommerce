import React from "react";
import classes from "./index.module.css";

export default function Subtitle(props) {
  return <h2 className={classes.Container}>{props.children}</h2>;
}
