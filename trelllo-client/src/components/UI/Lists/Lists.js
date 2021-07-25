import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions/postCard";
import Cards from "../Cards/Cards";
import { Container, Flex, Heading, List, Stack } from "@chakra-ui/react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Progress } from "@chakra-ui/react";

const onDragEnd = (result, columns, setColumns) => {
  if (!result.destination) return;
  const { source, destination } = result;

  if (source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems,
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems,
      },
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems,
      },
    });
  }
};

const Lists = (props) => {
  let data = props.data;
  console.log(data);
  const [columns, setColumns] = useState(data);
  useEffect(() => {
    setColumns(data);
  }, [data]);

  return (
    <Container maxW="1000px">
      <Flex justify="space-between" height="90vh" align="center">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([id, column]) => {
            return (
              <Stack width="300px" key={`${column.title}+${id} `}>
                <Heading fontSize="3xl" color="yellow.700" textAlign="center">
                  {column.title}
                </Heading>
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <List
                        p="4"
                        minH="70vh"
                        boxShadow="xl"
                        borderRadius="md"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        bg={snapshot.isDraggingOver ? "lightblue" : "lightgrey"}
                      >
                        {column.items.map((record, index) => {
                          console.log(record);
                          return (
                            <Cards
                              key={record.id}
                              data={record}
                              index={index}
                            />
                          );
                        })}
                        {provided.placeholder}
                      </List>
                    );
                  }}
                </Droppable>
              </Stack>
            );
          })}
        </DragDropContext>
      </Flex>
    </Container>
  );
};
const mapStateToProps = (state) => ({
  postCardList: state.postCard,
});

const mapActionToProps = {
  fetchAllPostCard: actions.fetchAll,
};

export default connect(mapStateToProps, mapActionToProps)(Lists);
