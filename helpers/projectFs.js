const fs = require("fs");
let projects = require("../data/projects.json");

export const projectFS = {
  getAll: () => projects,
  getById: (id) => projects.find((x) => x.id.toString() === id.toString()),
  find: (x) => projects.find(x),
  create,
};

function create(user) {
  user.id = new Date().getTime();
  user.dateCreated = new Date().toISOString();
  user.dateUpdated = new Date().toISOString();
  projects.push(user);
  saveFile();
}

function saveFile() {
  fs.writeFileSync("data/projects.json", JSON.stringify(projects, null, 4));
}
