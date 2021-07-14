import Form from './Form';
import List from './List';
import { useState } from 'react'

const data = [
  {
    _id:1,
    text: 'asd',
    done:false
  },
  {
     _id: 2,
     text: 'fgh',
     done:false
   },
  {
    _id:3,
     text: 'qwe',
     done:false
},
  {
    _id:4,
     text: '123',
     done:true
   },
];


const App = () => {
  const [tasks, setTasks] = useState(data);
  const addTask = task => {
    setTasks([...tasks, task]);
  };


  return (
  <div className="container">
    <h1>Lista de tareas</h1>
    <Form addTask={addTask}/>
    <List tasks={tasks} />


  </div>
  )


};
export default App;
