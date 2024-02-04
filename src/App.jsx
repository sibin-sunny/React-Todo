import React, { useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editId, setEditId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      const editTask = taskList.find((i) => i.id === editId);
      const updatedTask = taskList.map((t) =>
        t.id === editTask.id
          ? (t = { id:t.id, task })
          : { id:t.id, task:t.task }
      );
      console.log("updated",updatedTask);
      setTaskList(updatedTask);
      setEditId(0);
      setTask("");
      return;
    }

    if (task !== "") {
      setTaskList([{ id: `${task}-${Date.now()}`, task }, ...taskList]);
      setTask("");
    }
  };

  const handleDelete = (id) => {
    const taskNotDeleted = taskList.filter((t) => t.id !== id);
    setTaskList([...taskNotDeleted]);
  };

  const handleEdit = (id) => {
    const taskEdit = taskList.find((i) => i.id === id);
    setTask(taskEdit.task);
    setEditId(id);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>ToDo App</h1>
        <TaskForm 
        task={task} 
        setTask={setTask} 
        handleSubmit={handleSubmit} 
        editId={editId}/>
        <h1>Task List</h1>
        <TaskList
          taskList={taskList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      </div>
    </div>
  );
}

export default App;
