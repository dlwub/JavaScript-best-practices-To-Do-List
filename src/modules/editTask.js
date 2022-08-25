import getStorage from './getStorage.js';
import setStorage from './setStorage.js';

const editTask = (id) => {
  const editable = document.getElementById(`label-${id}`);
  editable.contentEditable = 'true';
  editable.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      const taskArray = getStorage();
      taskArray[id-1].description = editable.textContent;
      setStorage(taskArray);
    }
  });
};

export default editTask;