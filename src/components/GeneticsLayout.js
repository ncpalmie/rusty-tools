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
  if (plantId % 3 >= 1 && Math.floor(plantId / 3) >= 1)
    neighbors.push(plantId - 4);
  if (plantId % 3 <= 1 && Math.floor(plantId / 3) >= 1)
    neighbors.push(plantId - 2);
  if (plantId % 3 >= 1 && Math.floor(plantId / 3) <= 1)
    neighbors.push(plantId + 2);
  if (plantId % 3 <= 1 && Math.floor(plantId / 3) <= 1)
    neighbors.push(plantId + 4);

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
  var video_link = (
    <a href={"https://www.youtube.com/watch?v=FMxIgxkDZRI"}>
      {" "}
      Tamura77's 50/50 Method Explanation and Reason for Failure{" "}
    </a>
  );
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
            {"Hovering over these plants will display the possible gene " +
              "combinations after crossbreeding. If a column contains" +
              " multiple genes then there is an equally likely chance of" +
              " getting any of those genes in that column spot on the plant."}
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
      <Box className="Info-Card-Box">
        <Card className="Info-Card" background="#C7CFA0" height="large">
          <CardHeader
            className="Info-Header"
            alignSelf="center"
            margin={{ top: "small" }}
          >
            {"Genetics Rundown"}
          </CardHeader>
          <CardBody
            className="Planter-Card-Body"
            alignSelf="center"
            wrap={true}
            pad="medium"
          >
            {"Rust genetics can be somewhat complex and don't have many " +
              "available explanations online. This tool was created as a way" +
              " to test many iterations of plants without needing to wait" +
              " the required 1-3 hours for in-game plants to grow. Each gene " +
              "has a different effect on plant qualities: (G) results in " +
              "faster growth, (H) increases hardiness meaning resistance to " +
              "non-ideal temperatures, (Y) increases plant yield, (W) " +
              "increases plant water intake, and (X) does nothing. The (W)" +
              " and (X) red genes are considered undesirable but have higher " +
              " weights [1.0] compared to green genes [0.6]. When determining" +
              " the resulting genes in a column plants consider only " +
              " neighbor genes and ignore their own (unless there is exactly " +
              "one neighbor in which case a plant's own genes are included)." +
              " For a more in-depth explanation of genetics and " +
              "cross-breeding, check out Tamura77 on YouTube who provides a" +
              " litany of useful information and videos on this subject."}
          </CardBody>
          <CardHeader
            className="Info-Header"
            alignSelf="center"
            margin={{ top: "large" }}
          >
            {"50/50 Warning"}
          </CardHeader>
          <CardBody
            className="Planter-Card-Body"
            alignSelf="center"
            wrap={true}
            pad="medium"
          >
            A common gene manipulation method in Rust is the 50/50 method where
            a single gene is changed using this process:
            {video_link}
            This gene simulator does NOT account for the in-game determination
            of a priority plant resulting in the 50/50 method to sometimes fail
            unintuitively. This is because this simulator only determines which
            genes are possible in each gene slot, and not what plants will
            actually result from the cross-breed. For plants that follow the
            needed 50/50 setup where only one gene is changed though the
            simulation is accurate and will tell you if the 50/50 can work.
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}

export default GeneticsLayout;
