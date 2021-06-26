import React from "react";
import { Box } from "grommet";
import "../css/Plant.css";

function Plant(props) {
  return (
    <Box
      className="Plant-Box"
      align="center"
      justify="center"
      gridArea={props.areaName}
    >
      {props.visible ? (
        <Box
          className="Plant"
          onClick={() => props.togglePlant(props.id)}
          background="url('plant.png')"
          focusIndicator={false}
        ></Box>
      ) : (
        <Box
          className="Plant"
          onClick={() => props.togglePlant(props.id)}
          focusIndicator={false}
        ></Box>
      )}
    </Box>
  );
}

export default Plant;
