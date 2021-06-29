import React, { useState } from "react";
import { Box } from "grommet";
import PlantCard from "./PlantCard";
import "../css/Plant.css";

function Plant(props) {
  const [cardVisible, setCardVisible] = useState(true);

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
          onMouseEnter={() => setCardVisible(true)}
          onMouseLeave={() => setCardVisible(false)}
        >
          {cardVisible ? (
            <PlantCard
              genes={props.genes}
              setCardVisible={setCardVisible}
              changeGene={props.changeGene}
              id={props.id}
            />
          ) : null}
        </Box>
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
