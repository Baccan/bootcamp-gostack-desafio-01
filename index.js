const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

// Projetos
const projects = [];
let totalRequisicoes = 0;

// Middlewares globais
app.use((req, res, next) => {
  totalRequisicoes += 1;

  console.log(`O total de requisições é: ${totalRequisicoes}`);
  return next();
});

// Middlewares locais
function projectIdCheck(req, res, next) {
  const { id } = req.params;

  if (!id || !projects.find(item => item.id === id)) {
    res.status(400);
    return res.json({ error: "Id de projeto não encontrado..." });
  }

  return next();
}

/*
 * Rotas
 */
// @POST /projects { id, title }
// @desc Cria um projeto no array projects
app.post("/projects", (req, res) => {
  const { id, title } = req.body;

  let project = {
    id,
    title,
    tasks: []
  };

  projects.push(project);

  console.log(`Projeto adicionado ao array: ${JSON.stringify(projects)}`);

  return res.json(projects);
});

// @GET /projects
// @desc Lista todos os projetos no array projects
app.get("/projects", (req, res) => {
  console.log(`Projetos listados!`);
  return res.json(projects);
});

// @PUT /projects/:id
// @desc Altera apenas o titulo do projeto com o parametro id passado no array projects
app.put("/projects/:id", projectIdCheck, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(item => item.id === id);

  project.title = title;

  console.log(`Projeto alterado: ${JSON.stringify(project)}`);
  return res.json(project);
});

// @DELETE /projects/:id
// @desc Deleta o projeto com o parametro id passado no array projects
app.delete("/projects/:id", projectIdCheck, (req, res) => {
  const { id } = req.params;

  const project = projects.findIndex(item => item.id === id);

  projects.splice(project, 1);

  console.log(`Projeto deletado!`);
  res.send();
});

// @POST /projects/:id/tasks { title }
// @desc Adiciona uma task ao projeto com o parametro id passado no array projects
app.post("/projects/:id/tasks", projectIdCheck, (req, res) => {
  const { id } = req.params;
  const { title } = req.body;

  const project = projects.find(item => item.id === id);

  project.tasks.push(title);

  console.log(`Adicionado task ao projeto ${JSON.stringify(project)}`);
  res.send(project);
});

app.listen(port, () => console.log(`App iniciado na porta ${port}`));
