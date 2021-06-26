import React, { useState } from "react";
import { Box, Grid } from "grommet";
import Plant from "./Plant";
import "../css/Genetics.css";

function Genetics(props) {
  const [plants, setPlants] = useState([
    { id: 0, areaName: "plant0", visible: false, gene: "______" },
    { id: 1, areaName: "plant1", visible: false, gene: "______" },
    { id: 2, areaName: "plant2", visible: false, gene: "______" },
    { id: 3, areaName: "plant3", visible: false, gene: "______" },
    { id: 4, areaName: "plant4", visible: false, gene: "______" },
    { id: 5, areaName: "plant5", visible: false, gene: "______" },
    { id: 6, areaName: "plant6", visible: false, gene: "______" },
    { id: 7, areaName: "plant7", visible: false, gene: "______" },
    { id: 8, areaName: "plant8", visible: false, gene: "______" },
  ]);

  const togglePlant = (id) => {
    const newPlants = [...plants];
    newPlants[id].visible = !newPlants[id].visible;
    setPlants(newPlants);
  };

  return (
    <Box className="Planter-Box" background="url('planter.png')">
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
        {plants.map((plant) => (
          <Plant
            id={plant.id}
            togglePlant={togglePlant}
            areaName={plant.areaName}
            visible={plant.visible}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Genetics;
