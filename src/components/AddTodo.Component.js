import React from 'react';

const AddTodo = ({ inputValue, setInputValue, handleAddTodo }) => {
  return (
    <form className='search mb-3' onSubmit={handleAddTodo}>
      <input
        type='text'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='form-control form-control-lg'
        placeholder='Enter todo...'
      />
    </form>
  );
};

export default AddTodo;
