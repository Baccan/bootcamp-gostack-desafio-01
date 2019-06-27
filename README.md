# Desafio 01. Conceitos do NodeJS

O desafio pertence ao primeiro módulo do Bootcamp Gostack sobre Conceitos do NodeJs.

O objetivo era criar uma aplicação utilizando Express para CRUD de `projetos` e suas respectivas `tarefas`.

Os detalhes para a conclusão do desafio podem ser encontrados na pasta: [Descritivo_Desafio](https://github.com/Baccan/bootcamp-gostack-desafio-01/tree/master/Descritivo_Desafio).

“Sua única limitação é você mesmo”!

## Executando a aplicação

### 1º instalação de um package manager

Para iniciar a aplicação é preciso ter o [npm](https://www.npmjs.com/) ou o [yarn](https://yarnpkg.com) instalados.

### 2º instalação de dependências

O projeto possui dependências que devem ser baixadas utilizando os comandos em seu terminal.

Para o `npm`:

```
npm install
```

Para o `yarn`:

```
yarn
```

### 3º Iniciando servidor de desenvolvimento

Ao instalar as dependências, deve-se inicializar o servidor de desenvolvimento.

Iniciando com `npm`:

```
npm run dev
```

Iniciando com `yarn`:

```
yarn dev
```

Com este comando, o servidor de desenvolvimento será aberto em "http://localhost:3000".

## Rotas

Utilizando algum serviço para realizar requisições `http`, como `insomnia` ou `postman`, pode-se utilizar as seguintes rotas:

- `POST /projects`: Rota "http://localhost:3000/projects" com o método POST, é responsável por criar um projeto.
  No corpo da requisição, deve-se ser passado um json contendo um `id` e um `title`.

Exemplo: `{ id: "1", title: "Novo projeto" }`

- `GET /projects`: Rota "http://localhost:3000/projects" com o método GET, será exibida a lista de projetos cadastrados atualmente.

- `PUT /projects/:id`: Rota "http://localhost:3000/projects/:id" responsável por realizar a atualização do título de um projeto existente. Deve-se passar o `id` do projeto
  pelo parâmetro da URL.

- `DELETE /projects/:id`: Rota "http://localhost:3000/projects/:id" responsável por deletar um projeto pelo `id` passado pelo parâmetro da URL.

- `POST /projects/:id/tasks`: Rota "http://localhost:3000/projects/:id/tasks" possibilita a inserção de tasks para um projeto com o `id` passado pelo parâmetro da URL.
  Deve-se passar no conteúdo do corpo um json com um `title` referente a task que será acrescentada.

Exemplo: `{ title: "Novo projeto" }`
