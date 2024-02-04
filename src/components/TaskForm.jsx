import React from 'react'


const TaskForm = ({task,setTask,handleSubmit,editId}) => {
  return (
    <div className='taskForm'>
      <form onSubmit={handleSubmit}>
        <input type="text"
        value={task}
        onChange={(e)=>{setTask(e.target.value)}} />
        <button type='submit'>{editId?"EDIT":"ADD"}</button>
      </form>
    </div>
  )
}

export default TaskForm