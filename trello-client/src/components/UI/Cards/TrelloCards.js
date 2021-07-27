import React, { useState } from "react";
import classes from "./TrelloCards.module.css";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// Material
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AiFillDelete } from "react-icons/ai";

import { Card, Popover } from "@material-ui/core";
import { Draggable } from "react-beautiful-dnd";

const Cards = ({ el, index, keys }) => {
  // console.log(el);
  const [anchor, setAnchor] = useState(null);
  const [actionbtn, setActionbtn] = useState(false);

  const handledate = (id) => {
    console.log("Delete Click");
  };

  const leaveactionHandler = () => {
    setActionbtn(false);
  };

  const enteractionHandler = () => {
    setActionbtn(true);
  };

  const openPopover = (event) => {
    console.log("Edit Click");
    setAnchor(event.currentTarget);
  };
  return (
    <Draggable key={el.id} index={index} draggableId={el.id}>
      {(provided, snapshot) => {
        // console.log(snapshot);
        return (
          <div
            key={el.id}
            className={`item ${snapshot.isDragging && "dragging"}`}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Card
              key={keys}
              style={{ borderLeft: `5px solid ${el.color}` }}
              className={classes.layout}
              onMouseLeave={leaveactionHandler}
              onMouseEnter={enteractionHandler}
            >
              <div className={classes.layoutcard}>
                <span className={classes.title}>{el.title}</span>
                <span className={classes.description}>{el.title}</span>
              </div>
              <div className={classes.control}>
                <label className={classes.date}>{el.date}</label>
                {actionbtn && (
                  <div className={classes.action}>
                    <HiOutlinePencilAlt
                      onClick={openPopover}
                      className={classes.edit}
                    />
                    <AiFillDelete
                      className={classes.delete}
                      onClick={() => {
                        handledate(el.id);
                      }}
                    />
                  </div>
                )}
                <Popover
                  open={Boolean(anchor)}
                  anchorEl={anchor}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "center" }}
                  onClose={() => {
                    setAnchor(null);
                    setActionbtn(false);
                  }}
                >
                  <Box p={1}>
                    <div className={classes.logo}>
                      <label>Edit Task</label>
                    </div>
                    <Typography className={classes.form}>
                      <span>E</span>
                    </Typography>
                  </Box>
                </Popover>
              </div>
            </Card>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Cards;
