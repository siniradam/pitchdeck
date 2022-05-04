const fs = require("fs");
let projects = require("../data/projects.json");

const find = (id) => projects.find((x) => x.id.toString() === id.toString());

const edit = (id, params) => {
  const project = find(id);
  project.dateUpdated = new Date().toISOString();
  Object.assign(project, params);
  saveFile();
};

const create = (project) => {
  project.id = new Date().getTime();
  project.dateCreated = new Date().toISOString();
  project.dateUpdated = new Date().toISOString();
  projects.push(project);
  saveFile();
  return project;
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
