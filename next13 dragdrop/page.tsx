"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";

import initialData from "./initialData";
import { ColumnType, StateType, TaskType } from "./type";

const Column = dynamic(() => import("./column"), { ssr: false });

const reorderColumnList = (
  sourceCol: ColumnType,
  startIndex: number,
  endIndex: number
) => {
  const newTaskIds = Array.from(sourceCol.taskIds);
  const [removed] = newTaskIds.splice(startIndex, 1);
  newTaskIds.splice(endIndex, 0, removed);

  const newColumn = {
    ...sourceCol,
    taskIds: newTaskIds,
  };

  return newColumn;
};

export default function Home() {
  const [state, setState] = useState<any>(initialData);

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const sourceCol = state.columns[source.droppableId];
    const destinationCol = state.columns[destination.droppableId];

    if (sourceCol.id === destinationCol.id) {
      const newColumn = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      );

      const newState = {
        ...state,
        columns: {
          ...state.columns,
          [newColumn.id]: newColumn,
        },
      };
      setState(newState);
      return;
    }
    const startTaskIds = Array.from(sourceCol.taskIds);
    const [removed] = startTaskIds.splice(source.index, 1);
    const newStartCol = {
      ...sourceCol,
      taskIds: startTaskIds,
    };

    const endTaskIds = Array.from(destinationCol.taskIds);
    endTaskIds.splice(destination.index, 0, removed);
    const newEndCol = {
      ...destinationCol,
      taskIds: endTaskIds,
    };

    const newState = {
      ...state,
      columns: {
        ...state.columns,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol,
      },
    };

    setState(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex flex-col bg-gray-900 min-h-screen w-full text-white py-16">
        <div className="px-16 flex justify-between ">
          {state.columnOrder.map((columnId: any) => {
            const column = state.columns[columnId];
            const tasks = column.taskIds.map(
              (taskId: any) => state.tasks[taskId]
            );
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks}
               />
            );
          })}
        </div>
      </div>
    </DragDropContext>
  );
}
