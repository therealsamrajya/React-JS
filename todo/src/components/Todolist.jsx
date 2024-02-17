import React, { useState } from 'react';

const Todolist = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleAddTask = () => {
    if (task.trim() !== '')
     {
      setTasks([...tasks, task]);
      setTask('');
    }
    else{
      alert('please enter a task');
    }
   
  };

  return (
    <div className="container">
      <h2 id='todo'>TO-DO LIST</h2>
      <input
        type="text"
        placeholder="Type your task here"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
