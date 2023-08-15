// import React, { useEffect, useState } from 'react';

// import Tasks from './components/Tasks/Tasks';
// import NewTask from './components/NewTask/NewTask';
// import useHttp from './hooks/use-http';

// function App() {

//   const [tasks, setTasks] = useState([]);
//   const transformTask = taskObj => {
//     const loadedTasks = []

//     for (const taskKey of taskObj){
//       loadedTasks.push({id: taskKey, text: taskObj[taskKey].text})
//     }
//   }
//   useHttp({url: 'https://custom-hooks-2e877-default-rtdb.firebaseio.com//tasks.json'})



//   useEffect(() => {
//     fetchTasks();
//   }, []);

//   const taskAddHandler = (task) => {
//     setTasks((prevTasks) => prevTasks.concat(task));
//   };

//   return (
//     <React.Fragment>
//       <NewTask onAddTask={taskAddHandler} />
//       <Tasks
//         items={tasks}
//         loading={isLoading}
//         error={error}
//         onFetch={fetchTasks}
//       />
//     </React.Fragment>
//   );
// }

// export default App;












import React, { useEffect, useState } from "react";

import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/use-http";

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTasks = (taskObj) => {
    const loadedTasks = [];
    for (const taskKey in taskObj) {
      loadedTasks.push({ id: taskKey, text: taskObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const httpData = useHttp(
    { url: 'https://custom-hooks-2e877-default-rtdb.firebaseio.com//tasks.json' },
    transformTasks
  );

  // transform task function will be called whenever we recive a response

  const { isLoading, error, sendRequest: fetchTasks } = httpData;

  useEffect(() => {
    fetchTasks();
  });

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <div>
        <NewTask onAddTask={taskAddHandler} />
        <Tasks
          items={tasks}
          // loading={isLoading}
          error={error}
          onFetch={fetchTasks}
        />
      </div>
    </React.Fragment>
  );
}

export default App;