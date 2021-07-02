import React, { useState } from "react";
import { Box, Card, CardHeader, CardBody } from "grommet";
import Planter from "./Planter";
import "../css/GeneticsLayout.css";

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

function GeneticsLayout(props) {
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
    <Box className="Main-Content" direction="row" gap="xlarge" justify="center">
      <Box className="Planter-Side" justify="center">
        <Card
          className="Planter-Card"
          background="#C7CFA0"
          margin={{ bottom: "medium" }}
        >
          <CardHeader className="Planter-Card-Header" alignSelf="center">
            {"Plant Configuration"}
          </CardHeader>
          <CardBody
            className="Planter-Card-Body"
            alignSelf="center"
            wrap={true}
            pad="medium"
          >
            {"Enter the initial configuration of plants whose genes you are" +
              " trying to simulate. Click on an empty planter square to add" +
              " a plant. You can edit a plant's genes by hovering the plant " +
              "and selecting the desired gene in the popup card."}
          </CardBody>
        </Card>
        <Planter
          generateGenes={generateGenes}
          plants={plants}
          togglePlant={togglePlant}
          changeGene={changeGene}
          simPlanter={false}
        />
      </Box>
      <Box className="Genetics-Side" justify="center">
        <Card
          className="Planter-Card"
          background="#C7CFA0"
          margin={{ bottom: "medium" }}
        >
          <CardHeader className="Planter-Card-Header" alignSelf="center">
            {"Gene Simulation"}
          </CardHeader>
          <CardBody
            className="Planter-Card-Body"
            alignSelf="center"
            wrap={true}
            pad="medium"
          >
            {"After entering plant genes and configuration in the leftside" +
              " planter possible genetic results will appear here. Hover over" +
              " corresponding plants to see what gene combinations may occur." +
              "may occur. Listed gene combinations are equally likely. "}
          </CardBody>
        </Card>
        <Planter
          generateGenes={generateGenes}
          plants={plants}
          togglePlant={togglePlant}
          changeGene={changeGene}
          simPlanter={true}
        />
      </Box>
    </Box>
  );
}

export default GeneticsLayout;
