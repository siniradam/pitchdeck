const fs = require("fs");
let projects = require("../data/projects.json");

const get = (id) => projects.find((x) => x.id.toString() === id.toString());

const find = (query) =>
  projects.filter(
    (x) =>
      x.title.toLowerCase().includes(query.toLowerCase()) ||
      x.username.toLowerCase().includes(query.toLowerCase()) ||
      x.description.toLowerCase().includes(query.toLowerCase())
  );

const edit = (id, params) => {
  const project = get(id);
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
  getById: (id) => get(id),
  find: (x) => find(x),
  create,
  edit,
};
