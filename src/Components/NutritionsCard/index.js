import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ModalImage from "react-modal-image";
import { NutriTitle, NutriContent } from "./NutritionsCardElements";

const styles = (theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function NutritionsCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <NutriTitle className={classes.heading}>
              {props.nutriTitle}
            </NutriTitle>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <NutriContent> {props.nutriContent} </NutriContent>
          <ModalImage large={props.large} small={props.small} alt={props.alt} />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

NutritionsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NutritionsCard);
