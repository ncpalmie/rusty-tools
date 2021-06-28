import React, { useState } from "react";
import { Box, Card, DropButton, CardHeader, Image } from "grommet";
import "../css/Plant.css";

function Plant(props) {
  const [cardVisible, setCardVisible] = useState(true);
  const gene_array = ["x", "w", "g", "y", "h"];

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
              background="#C7CFA0"
              onMouseEnter={() => setCardVisible(true)}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <CardHeader
                className="Plant-Card-Header"
                pad="small"
                justify="center"
              >
                {"Plant " + (props.id + 1)}
              </CardHeader>
              <Box
                direction="row"
                alignSelf="center"
                margin={{ left: "small", right: "small" }}
              >
                {props.genes.map((gene) => (
                  <DropButton
                    className="Gene-Button"
                    label={
                      <Image className="Gene-Image" src={gene + "_gene.png"} />
                    }
                    dropAlign={{ top: "bottom", right: "right" }}
                    dropContent={gene_array.map((gene) => (
                      <Image className="Gene-Image" src={gene + "_gene.png"} />
                    ))}
                  />
                ))}
              </Box>
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
