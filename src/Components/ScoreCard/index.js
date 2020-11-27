import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  ScoreTitle,
  ScoreContent,
  ScoreNovaTag,
  ScoreNovaRank,
} from "./ScoreCardElements";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
});

function ScoreCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <ScoreTitle>{props.scoreTitle}</ScoreTitle>
        </AccordionSummary>
        <AccordionDetails>
          <ScoreNovaTag> Nova Tag: {props.scoreNovaTag} Nova Tag </ScoreNovaTag>
          <ScoreNovaRank>
            {" "}
            Nova Rank: {props.scoreNova} Nova Rank{" "}
          </ScoreNovaRank>
          <ScoreContent>
            {" "}
            Nutritions Score {props.scoreContent} Nutritions Score{" "}
          </ScoreContent>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

ScoreCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ScoreCard);
