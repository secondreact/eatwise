import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ModalImage from "react-modal-image";
import { MainContainer, IngreTitle, IngreContent, IngreTag, IngrePic, PicTagWrap } from "./IngredientsCardElements";

const styles = (theme) => ({
  root: {
    width: "100%",
  },
});

function IngredientsCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <IngreTitle>{props.ingreTitle}</IngreTitle>
        </AccordionSummary>

        <AccordionDetails>
          <MainContainer>
          <PicTagWrap>
          <IngreTag> {props.ingreTag} </IngreTag>
          <IngrePic>
          <ModalImage large={props.large} small={props.small} alt={props.alt} />
          </IngrePic>
          </PicTagWrap>
          <IngreContent> {props.ingreContent} </IngreContent>

          </MainContainer>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

IngredientsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IngredientsCard);
