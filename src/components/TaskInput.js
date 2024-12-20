import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';

const TaskInput = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo({ title, description }));
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='task-input-form'>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        className='task-t'
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        className='input-d'
      />
      <button type="submit" className='submit-btn'>Add Task</button>
    </form>
  );
};

export default TaskInput;
