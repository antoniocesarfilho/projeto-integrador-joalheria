# Projeto Integrador Joalheria

Este repositório contém um MVP full stack para a gestão de estoque de uma joalheria. O propósito desta etapa é estabelecer uma base organizada e funcional para o desenvolvimento futuro, sem ainda implementar regras de negócio específicas.

## Estrutura do projeto

A organização das pastas segue uma separação clara entre backend e frontend:

```
backend/
  src/
    controllers/    # controladores das futuras rotas e lógicas de negócios
    routes/         # definição das rotas da API
    services/       # camada de serviços para regras de negócio
    config/         # configurações diversas, como conexão com o banco
frontend/
  src/
    pages/          # páginas (views) do React
    components/     # componentes reutilizáveis
    services/       # serviços para comunicação com a API
```

### Backend

O backend utiliza **Node.js** com **Express** e **Prisma** conectado a um banco **SQLite**. Um ponto de entrada (`src/index.js`) inicializa o servidor HTTP, carrega as rotas básicas e configura o parsing de JSON.

Os controladores, serviços e configurações permanecem vazios nesta etapa; a estrutura foi criada apenas para receber as implementações futuras. O Prisma está configurado para usar uma base SQLite local (`prisma/dev.db`).

Para que o Prisma funcione corretamente, é necessário definir a variável `DATABASE_URL` em um arquivo `.env`. Um arquivo de exemplo (`backend/.env.example`) é fornecido com a configuração padrão. Copie este arquivo para `backend/.env` e ajuste o caminho do banco caso deseje alterar a localização do arquivo `dev.db`.

### Frontend

O frontend foi criado utilizando **React** com **Vite** como bundler e servidor de desenvolvimento. A estrutura mínima contém um componente `App.jsx` com um cabeçalho de boas-vindas e pastas vazias para páginas, componentes e serviços.

## Pré‑requisitos

- [Node.js](https://nodejs.org/) versão 18 ou superior
- [npm](https://www.npmjs.com/), já incluído no instalador oficial do Node.js

## Como executar localmente

1. **Clone** o repositório e acesse a pasta raiz do projeto.
2. **Backend:**
   - Navegue até a pasta `backend`:
     ```bash
     cd backend
     ```
   - Instale as dependências (requer acesso à internet para baixar os pacotes listados em `package.json`):
     ```bash
     npm install
     ```

   - Em seguida, crie o arquivo `.env` a partir do exemplo:
     ```bash
     cp .env.example .env
     ```
     Edite o valor de `DATABASE_URL` conforme a sua necessidade. Sem esse arquivo, o Prisma não conseguirá localizar o banco de dados.
   - Execute o servidor em modo de desenvolvimento (utilizando `nodemon`) ou em modo normal:
     ```bash
     # modo desenvolvimento (reinicia a cada alteração)
     npm run dev

     # modo produção
     npm start
     ```
   - A API ficará disponível, por padrão, em `http://localhost:3001/api`.

3. **Frontend:**
   - Abra um novo terminal, navegue até a pasta `frontend`:
     ```bash
     cd frontend
     ```
   - Instale as dependências:
     ```bash
     npm install
     ```
   - Inicie o servidor de desenvolvimento do Vite:
     ```bash
     npm run dev
     ```
   - O frontend será servido em `http://localhost:5173` (porta padrão do Vite). Para gerar uma versão de produção e pré-visualizar, utilize:
     ```bash
     npm run build
     npm run preview
     ```

4. Com ambos os servidores em execução, acesse `http://localhost:5173` no navegador. A integração entre frontend e backend ainda não está implementada, mas a base está pronta para desenvolvimento.

## Observações

- Ainda **não** foram implementados controladores como `SupplierController` ou `ProductController`. Esta etapa foca apenas na estruturação inicial.
- A criação do banco de dados e das rotas específicas será feita nas próximas fases do projeto.
- Evite apagar arquivos ou pastas existentes; apenas adicione ou modifique conforme necessário nas futuras tarefas.

Além disso, o arquivo `backend/.env` foi adicionado ao `.gitignore` para evitar o versionamento de variáveis sensíveis. Utilize `backend/.env.example` como base para criar o seu `.env` local.