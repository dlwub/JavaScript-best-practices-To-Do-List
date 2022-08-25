// Update booksArray with data from localStorage
const setStorage = (taskArray) => {
  localStorage.setItem('taskList', JSON.stringify(taskArray));
};

export default setStorage;