import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AddTodo from './components/AddTodo.Component';
import Todos from './components/Todos.Component';
import { addTodo, deleteTodo, getLocalTodo, updateTodo, updateTodoStatus } from './redux/slice/todoSlice';

const App = () => {
  const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');
  const [editid, setEditid] = useState('');

  useEffect(() => {
    const t = localStorage.getItem('todos');
    if (t) {
      dispatch(getLocalTodo(JSON.parse(t)));
    }
  }, []);

  const handleAddTodo = (e) => {
    e.preventDefault();

    const data = {
      name: inputValue,
      id: Date.now(),
      isCompleted: false,
    };

    const editData = {
      name: inputValue,
      id: editid,
    };

    if (!editid) {
      dispatch(addTodo(data));
    } else {
      setEditid('');
      dispatch(updateTodo(editData));
    }

    setInputValue('');
  };

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const editTodo = (todo) => {
    const { name, id } = todo;
    setInputValue(name);
    setEditid(id);
  };

  const handleIsCompleted = (data, todo) => {
    const updateData = {
      id: todo.id,
      isCompleted: data,
    };
    dispatch(updateTodoStatus(updateData));
  };

  return (
    <div className='App'>
      <section className='todo py-5'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-md-7'>
              <div className='contents'>
                <div className='header d-flex justify-content-between mb-3'>
                  <h4 className='align-self-center font-weight-bold'>Todo App</h4>
                  {/* <button className='btn btn-success align-self-center'>Add Todo</button> */}
                </div>
                <AddTodo handleAddTodo={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue} />
                {todos?.map((todo) => (
                  <Todos
                    key={todo.id}
                    editTodo={editTodo}
                    todo={todo}
                    deleteTodo={removeTodo}
                    handleIsCompleted={handleIsCompleted}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
