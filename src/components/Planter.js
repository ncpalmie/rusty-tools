import React, { useState, useEffect } from "react";
import { Box, Grid } from "grommet";
import Plant from "./Plant";
import "../css/Planter.css";

function Planter(props) {
  const [possibleGeneCombinations, setPossibleGeneCombinations] = useState([]);

  useEffect(() => {
    const plantGeneLists = [];

    const getPossibleGenes = (geneDict) => {
      const possibleGenes = [];
      var maxGeneValue = 0;

      for (var key in geneDict) {
        if (geneDict[key] > maxGeneValue) {
          maxGeneValue = geneDict[key];
        }
      }

      for (var gene in geneDict) {
        if (geneDict[gene] === maxGeneValue) possibleGenes.push(gene);
      }
      return possibleGenes;
    };

    const runSimulation = (neighbors) => {
      const geneCombinations = [];

      for (var i = 0; i <= 5; i++) {
        const column = i;
        const geneDict = { w: 0, x: 0, g: 0, y: 0, h: 0 };
        const columnGenes = neighbors.map((neighbor) => neighbor.genes[column]);

        for (let neighborGene of columnGenes) {
          if (neighborGene === "x" || neighborGene === "w") {
            geneDict[neighborGene] = geneDict[neighborGene] + 1;
          }
          if (
            neighborGene === "h" ||
            neighborGene === "g" ||
            neighborGene === "y"
          ) {
            geneDict[neighborGene] = geneDict[neighborGene] + 0.6;
          }
        }

        geneCombinations.push(getPossibleGenes(geneDict));
      }

      // Cartesian product to get all possible gene arrays
      const cartestian = (...a) =>
        a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
      return cartestian(geneCombinations);
    };

    const getSimGeneArrays = (plant) => {
      const neighbors = plant.neighbors
        .map((neighbor) => props.plants[neighbor])
        .filter((neighbor) => neighbor.visible);
      if (neighbors.length === 0) {
        return plant.genes.map((gene) => [gene]);
      } else if (neighbors.length === 1) {
        return runSimulation([plant, neighbors[0]]);
      }
      return runSimulation(neighbors);
    };

    if (props.simPlanter) {
      for (var plant of props.plants) {
        const geneArrays = getSimGeneArrays(plant);
        plantGeneLists.push(geneArrays);
      }
      setPossibleGeneCombinations(plantGeneLists);
    } else {
      var givenGeneCombinations = [];
      for (var givenPlant of props.plants) {
        givenGeneCombinations = givenPlant.genes.map((gene) => [gene]);
        plantGeneLists.push(givenGeneCombinations);
      }
      setPossibleGeneCombinations(plantGeneLists);
    }
  }, [props.plants, props.simPlanter]);

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
            genes={possibleGeneCombinations[plant.id]}
            simPlanter={props.simPlanter}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default Planter;
