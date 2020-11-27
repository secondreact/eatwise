import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ModalImage from "react-modal-image";
import { NutriTitle, NutriContent } from "./NutritionsCardElements";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
});

function NutritionsCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <NutriTitle>{props.nutriTitle}</NutriTitle>
        </AccordionSummary>
        <AccordionDetails>
          <NutriContent> {props.nutriContent} </NutriContent>
          <ModalImage large={props.large} small={props.small} alt={props.alt} />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

NutritionsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NutritionsCard);
