import React from "react";
import styled from "styled-components";

const eventStyleGetter = (event, start, end, isSelected) => {
  function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  var r = () => (Math.random() * 256) >> 0;
  var color = `rgb(${r()}, ${r()}, ${r()})`;

  const greenColorArray = [
    "#4dab3c",
    "#75BC63",
    "#009900",
    "#99cd89",
    "#bcdeb0",
  ];

  const pickedGreen = greenColorArray.splice(
    Math.floor(Math.random() * greenColorArray.length),
    1
  )[0];

  const style = {
    borderRadius: "0px",
    opacity: 1.0,
    height: "22px",
    border: "0px",
    display: "block",
    // marginTop: "0.3px",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: pickedGreen,
    fontSize: "12px",
    marginTop: "1px",
    color: "#ffffff",
    border: "0.5px solid #ffffff",
    "&:hover, &:focus": {
      outline: "none",
    },
  };

  return {
    style: style,
  };
};

export default eventStyleGetter;
