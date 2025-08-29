const activeTasks = (tasks) => {
  return tasks.filter((task) => task.completed !== true);
};

module.exports = activeTasks;
