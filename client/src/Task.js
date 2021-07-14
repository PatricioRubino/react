const Task = props => {

const { task } = props;

  return (
    <div className="task">
       <p className="taskText">{task.text}</p>
       <input className="check" type="checkbox" />
       <button className="trash">
       <i className="fa fa-lg fa-trash"></i>
       </button>


    </div>
  );
};

export default Task;
