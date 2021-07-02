import React from "react";
import { Box, Card, CardHeader, DropButton, Image } from "grommet";
import "../css/PlantCard.css";

function PlantCard(props) {
  const gene_array = ["x", "w", "g", "y", "h"];

  return (
    <Card
      className="Plant-Card"
      background="#C7CFA0"
      onMouseEnter={() => props.setCardVisible(true)}
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <CardHeader className="Plant-Card-Header" pad="small" justify="center">
        {"Plant " + (props.id + 1)}
      </CardHeader>
      <Box direction="row">
        {props.genes.map((geneCombination) => (
          <Box
            direction="column"
            alignSelf="center"
            margin={{ left: "small", right: "small", bottom: "small" }}
            gap="small"
          >
            {geneCombination.map((gene, index) =>
              props.simPlanter ? (
                <Image
                  className="Gene-Image"
                  src={gene + "_gene.png"}
                  margin="none"
                  alt="gene"
                />
              ) : (
                <DropButton
                  className="Gene-Button"
                  plain={true}
                  label={
                    <Image
                      className="Gene-Image"
                      src={gene + "_gene.png"}
                      margin="none"
                      alt="gene"
                    />
                  }
                  dropAlign={{ top: "bottom", right: "right" }}
                  dropProps={{ plain: true, margin: { left: "xxsmall" } }}
                  dropContent={
                    <Box
                      className="Gene-Dropdown-Box"
                      gap="xsmall"
                      pad={{ top: "xsmall", bottom: "xsmall", right: "xsmall" }}
                      background="dark-3"
                      round="small"
                    >
                      {gene_array.map((gene_option) => (
                        <Image
                          className="Gene-Dropdown-Image"
                          src={gene_option + "_gene.png"}
                          onClick={() => {
                            props.changeGene(props.id, index, gene_option);
                          }}
                        />
                      ))}
                    </Box>
                  }
                />
              )
            )}
          </Box>
        ))}
      </Box>
    </Card>
  );
}

export default PlantCard;
