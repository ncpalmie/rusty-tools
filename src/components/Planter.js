import React, { useState } from "react";
import { Box, Grid } from "grommet";
import Plant from "./Plant";
import "../css/Planter.css";

function Planter(props) {
  return (
    <Box
      className="Planter-Box"
      background="url('planter.png')"
      alignSelf="center"
      justify="center"
    >
      <Grid
        className="Planter-Grid"
        rows={["1/3", "1/3", "1/3"]}
        columns={["1/3", "1/3", "1/3"]}
        areas={[
          { name: "plant0", start: [0, 0], end: [0, 0] },
          { name: "plant1", start: [1, 0], end: [1, 0] },
          { name: "plant2", start: [2, 0], end: [2, 0] },
          { name: "plant3", start: [0, 1], end: [0, 1] },
          { name: "plant4", start: [1, 1], end: [1, 1] },
          { name: "plant5", start: [2, 1], end: [2, 1] },
          { name: "plant6", start: [0, 2], end: [0, 2] },
          { name: "plant7", start: [1, 2], end: [1, 2] },
          { name: "plant8", start: [2, 2], end: [2, 2] },
        ]}
      >
        {props.plants.map((plant) => (
          <Plant
            key={plant.id}
            id={plant.id}
            togglePlant={props.togglePlant}
            changeGene={props.changeGene}
            areaName={plant.areaName}
            visible={plant.visible}
            genes={plant.genes}
            simPlanter={props.simPlanter}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Planter;
