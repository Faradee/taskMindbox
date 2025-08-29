const completedTasks = (tasks) => {
  return tasks.filter((task) => task.completed === true);
};

module.exports = completedTasks;
