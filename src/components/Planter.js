import React, { useState } from "react";
import { Box, Grid } from "grommet";
import Plant from "./Plant";
import "../css/Planter.css";

const generateGenes = () => {
  const gene_array = ["x", "w", "g", "y", "h"];
  const genes = [];
  for (var i = 0; i <= 5; i++) {
    genes.push(gene_array[Math.floor(Math.random() * gene_array.length)]);
  }
  return genes;
};

const determineNeighbors = (plantId) => {
  const neighbors = [];

  if (Math.floor(plantId / 3) !== 0) neighbors.push(plantId - 3);
  if (plantId % 3 !== 0) neighbors.push(plantId - 1);
  if (plantId % 3 !== 2) neighbors.push(plantId + 1);
  if (Math.floor(plantId / 3) !== 2) neighbors.push(plantId + 3);

  return neighbors;
};

const generatePlantStates = () => {
  const plants = [];
  for (var i = 0; i <= 8; i++) {
    plants.push({
      id: i,
      areaName: "plant" + i,
      visible: false,
      genes: generateGenes(),
      neighbors: determineNeighbors(i),
    });
  }
  return plants;
};

function Planter(props) {
  const [plants, setPlants] = useState(generatePlantStates());

  const togglePlant = (id) => {
    const newPlants = [...plants];
    if (newPlants[id].visible) {
      newPlants[id].genes = generateGenes();
    }
    newPlants[id].visible = !newPlants[id].visible;
    setPlants(newPlants);
  };

  const changeGene = (id, gene_index, new_gene) => {
    const newPlants = [...plants];
    newPlants[id].genes[gene_index] = new_gene;
    setPlants(newPlants);
  };

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
        {plants.map((plant) => (
          <Plant
            key={plant.id}
            id={plant.id}
            togglePlant={togglePlant}
            changeGene={changeGene}
            areaName={plant.areaName}
            visible={plant.visible}
            genes={plant.genes}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Planter;
