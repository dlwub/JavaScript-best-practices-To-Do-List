import getStorage from './getStorage.js';
import setStorage from './setStorage.js';
import updateArray from './updateArray.js';

const removeTask = (id) => {
  let taskArray = getStorage();
  if (id >= 0) {
    taskArray = taskArray.filter((task) => task.id !== id);
  } else {
    taskArray = taskArray.filter((task) => !task.completed);
  }
  updateArray(taskArray);
  setStorage(taskArray);
};

export default removeTask;