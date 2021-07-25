import React from "react";
import { ListItem } from "@chakra-ui/react";
import { Draggable } from "react-beautiful-dnd";

import { motion, useViewportScroll, useTransform } from "framer-motion";
const Cards = ({ data, index }) => {
  return (
    <Draggable key={data.id} draggableId={data.id} index={index}>
      {(provided, snapshot) => {
        return (
          <ListItem
            key={data.id}
            width="280px"
            p="2"
            borderRadius="2"
            boxShadow="md"
            mb="2"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            userSelect="none"
            padding="2"
            bg={snapshot.isDragging ? "#456C86" : "white"}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
              }}
            >
              {data.title}
              {data.description}
            </motion.div>
          </ListItem>
        );
      }}
    </Draggable>
  );
};

export default Cards;
