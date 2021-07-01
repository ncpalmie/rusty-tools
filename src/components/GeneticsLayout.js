import React from "react";
import { Box, Card, CardHeader, CardBody, Grid } from "grommet";
import Planter from "./Planter";
import "../css/GeneticsLayout.css";

function GeneticsLayout(props) {
  return (
    <Box className="Main-Content" direction="row">
      <Box className="Planter-Side" justify="center" pad={{ left: "150px" }}>
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
        <Planter />
      </Box>
      <Box className="Genetics-Side">
        <Grid
          className="Simulation-Grid"
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
        ></Grid>
      </Box>
    </Box>
  );
}

export default GeneticsLayout;
