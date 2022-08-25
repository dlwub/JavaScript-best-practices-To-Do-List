import setStorage from './setStorage.js';
import getStorage from './getStorage.js';
import Task from './Task.js';

const addTask = (description) => {
  // Check for empty book and add book to booksArray
  if (description) {
    let taskArray = getStorage();
    const task = new Task(description, false, taskArray.length + 1);
    taskArray = [...taskArray, task];
    setStorage(taskArray);
  }
};

export default addTask;
