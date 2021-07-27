import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import classes from './Dnd.module.css';
import { Heading } from '@chakra-ui/react';
import TrelloCards from '../Cards/TrelloCards';
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

function Dnd(props) {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  let data = props.data;
  console.log(data);
  const [columns, setColumns] = useState(data);
  useEffect(() => {
    setColumns(data);
  }, [data]);
  //   const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <div
      className={classes.main}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        height: 'auto',
        width: '100%',
      }}
    >
      {/* <Modal /> */}
      <DragDropContext
        onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
      >
        {Object.entries(columns).map(([columnId, column], index) => {
          return (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
              key={columnId}
            >
              <motion.p
                variants={fadeLeft}
                initial='hidden'
                animate='visible'
                transition={{ duration: 1 }}
              >
                <Heading fontSize='3xl' color='yellow.700' textAlign='center'>
                  {column.title}
                </Heading>
              </motion.p>
              {/* <h2>{column.title}</h2> */}

              <div className={classes.box} style={{ margin: 8 }}>
                <Droppable droppableId={columnId} key={columnId}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? 'rgba(128, 128, 128, 0.541)'
                            : 'lightgrey',
                          padding: 4,
                          width: 250,
                          minHeight: 500,
                        }}
                      >
                        {column.items.map((item, index) => {
                          return (
                            <TrelloCards
                              key={item.id}
                              el={item}
                              index={index}
                              keys={item.id}
                            />
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
}

export default Dnd;
