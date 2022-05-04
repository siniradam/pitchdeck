const fs = require("fs");
let projects = require("../data/projects.json");

const find = (id) => projects.find((x) => x.id.toString() === id.toString());

const edit = (id, params) => {
  const project = find(id);
  project.dateUpdated = new Date().toISOString();
  Object.assign(project, params);
  saveData();
};

const create = (file) => {
  file.id = new Date().getTime();
  file.dateCreated = new Date().toISOString();
  file.dateUpdated = new Date().toISOString();
  projects.push(file);
  saveFile();
};

const saveFile = () => {
  fs.writeFileSync("data/projects.json", JSON.stringify(projects, null, 4));
};

export const projectFS = {
  getAll: () => projects,
  getById: (id) => find(id),
  find: (x) => projects.find(x),
  create,
  edit,
};
