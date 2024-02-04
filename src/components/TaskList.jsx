import React from "react";

const TaskList = ({ taskList, handleDelete, handleEdit }) => {
  return (
    <div className="taskList">
      {taskList.map((t) => (
        <div className="singleTask" key={t.id}>
          <span className="task">{t.task}</span>
          <button className="editBtn" onClick={() => handleEdit(t.id)}>Edit</button>
          <button className="deleteBtn" onClick={() => handleDelete(t.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
