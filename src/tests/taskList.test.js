const completedTasks = require("./completedTasks");
const activeTasks = require("./activeTasks");
const tasks = [
  { title: "test1", id: 1, completed: false },
  { title: "test2", id: 2, completed: true },
  { title: "test3", id: 3, completed: false },
];

test("returns 1 completed task", () => {
  expect(completedTasks(tasks)).toStrictEqual([{ title: "test2", id: 2, completed: true }]);
});

test("returns 2 active tasks", () => {
  expect(activeTasks(tasks)).toStrictEqual([
    { title: "test1", id: 1, completed: false },
    { title: "test3", id: 3, completed: false },
  ]);
});
