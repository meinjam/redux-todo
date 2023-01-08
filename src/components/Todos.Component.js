import React from 'react';
import DeteteIcon from '../assets/img/delete.svg';
import EditIcon from '../assets/img/edit.svg';
import DoneIcon from '../assets/img/done.svg';
import UnDoneIcon from '../assets/img/undone.svg';

const Todos = (props) => {
  const { name, id, isCompleted } = props.todo;

  return (
    <div className='card p-3'>
      <div className='item d-flex justify-content-between'>
        <div className='left d-flex'>
          <div className='icon mr-1'>
            {isCompleted ? (
              <img src={DoneIcon} alt='' onClick={() => props.handleIsCompleted(false, props.todo)} />
            ) : (
              <img src={UnDoneIcon} alt='' onClick={() => props.handleIsCompleted(true, props.todo)} />
            )}
          </div>
          <p className='mb-0 align-self-center lin-through'>{name}</p>
        </div>
        <div className='right'>
          <img src={EditIcon} alt='' onClick={() => props.editTodo(props.todo)} />
          <img src={DeteteIcon} alt='' onClick={() => props.deleteTodo(id)} />
        </div>
      </div>
    </div>
  );
};

export default Todos;
