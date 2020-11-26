import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ModalImage from "react-modal-image";
import {
  ScoreTitle,
  ScoreContent,
  ScoreNovaTag,
  ScoreNovaRank
} from "./ScoreCardElements";

const styles = (theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

function ScoreCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <ScoreTitle className={classes.heading}>
              {props.scoreTitle}
            </ScoreTitle>
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <ScoreNovaTag> Nova Tag: {props.scoreNovaTag} Nova Tag </ScoreNovaTag>
          <ScoreNovaRank>
            {" "}
            Nova Rank: {props.scoreNova} Nova Rank{" "}
          </ScoreNovaRank>
          <ScoreContent>
            {" "}
            Nutritions Score {props.scoreContent} Nutritions Score{" "}
          </ScoreContent>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

ScoreCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ScoreCard);
