import React, { useState } from "react";
import { Box, Card, CardHeader } from "grommet";
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
            <Card
              className="Plant-Card"
              height="small"
              width="medium"
              background="#C7CFA0"
              onMouseEnter={() => setCardVisible(true)}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <CardHeader
                className="Plant-Card-Header"
                pad={{ top: "xsmall", left: "medium" }}
              >
                {"Plant " + props.id}
              </CardHeader>
            </Card>
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
