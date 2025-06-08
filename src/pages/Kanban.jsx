import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import React, { useState } from 'react';


const initialTasks = {
    todo: [{ id: '1', content: 'Design UI' }],
    inProgress: [{ id: '2', content: 'Build Sidebar' }],
    done: [{ id: '3', content: 'Deploy App' }],
};

const Kanban = () => {
    const [tasks, setTasks] = useState(initialTasks);

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceTasks = [...tasks[source.droppableId]];
        const destTasks = [...tasks[destination.droppableId]];
        const [movedTask] = sourceTasks.splice(source.index, 1);
        destTasks.splice(destination.index, 0, movedTask);

        setTasks({
            ...tasks,
            [source.droppableId]: sourceTasks,
            [destination.droppableId]: destTasks,
        });
    };

    return (
        <div className="p-4 grid grid-cols-3 gap-4">
            <DragDropContext onDragEnd={onDragEnd}>
                {Object.entries(tasks).map(([column, items]) => (
                    <Droppable key={column} droppableId={column}>
                        {(provided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                className="bg-gray-200 rounded p-4 min-h-[200px]"
                            >
                                <h3 className="font-bold capitalize mb-2">{column}</h3>
                                {items.map((task, index) => (
                                    <Draggable key={task.id} draggableId={task.id} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className="bg-white p-2 mb-2 rounded shadow"
                                            >
                                                {task.content}
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                ))}
            </DragDropContext>
        </div>
    );
};

export default Kanban;
