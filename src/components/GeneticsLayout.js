import React from "react";
import { Box, Card, CardHeader, CardBody } from "grommet";
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
      <Box className="Genetics-Side"></Box>
    </Box>
  );
}

export default GeneticsLayout;
