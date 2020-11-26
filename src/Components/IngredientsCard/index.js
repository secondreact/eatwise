import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ModalImage from "react-modal-image";
import { MainContainer, IngreTitle, IngreContent, IngreTag, IngrePic, PicTagWrap } from "./IngredientsCardElements";

const styles = (theme) => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }


});

function IngredientsCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <IngreTitle className={classes.heading}>
              {props.ingreTitle}
            </IngreTitle>
          </Typography>
        </ExpansionPanelSummary>

        <ExpansionPanelDetails>
          <MainContainer>
          <PicTagWrap>
          <IngreTag> {props.ingreTag} </IngreTag>
          <IngrePic>
          <ModalImage large={props.large} small={props.small} alt={props.alt} />
          </IngrePic>
          </PicTagWrap>
          <IngreContent> {props.ingreContent} </IngreContent>
          </MainContainer>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

IngredientsCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IngredientsCard);
