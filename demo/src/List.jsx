let List = (props) => {
  return (
    <ul>
      <li >
        {props.tasks.map((el,index) => {
          return (
            <div className="li-element">
              <li key={index}> 
                {el}
                <button
                  onClick={() => {
                    props.deleteTask(el);
                  }}
                  className="btn-dlt "
                >
                  Delete
                </button>
              </li>
            </div>
          );
        })}
      </li>
    </ul>
  );
};

export default List;
