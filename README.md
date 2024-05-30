# GuiaPerguntas

GuiaPerguntas é uma aplicação web que permite aos usuários criar, visualizar e responder perguntas. Este projeto foi desenvolvido utilizando Node.js, Express.js, Sequelize, HTML, CSS e Bootstrap.

## Tecnologias Utilizadas

- **Node.js**: Plataforma JavaScript para executar código no lado do servidor.
- **Express.js**: Framework web para Node.js, utilizado para construir a API do servidor.
- **Sequelize**: ORM (Object-Relational Mapping) para Node.js, utilizado para interagir com o banco de dados.
- **HTML**: Linguagem de marcação para estruturar o conteúdo da web.
- **CSS**: Linguagem de estilo para descrever a apresentação dos documentos HTML.
- **Bootstrap**: Framework CSS para criar interfaces web responsivas e estilizadas.

## Funcionalidades

- **Criar perguntas**: Usuários podem criar novas perguntas.
- **Visualizar perguntas**: Usuários podem visualizar todas as perguntas criadas.
- **Responder perguntas**: Usuários podem responder às perguntas existentes.

## Instalação

Siga os passos abaixo para configurar e rodar o projeto localmente.

### Pré-requisitos

- Node.js instalado
- NPM (Node Package Manager) instalado
- Banco de dados SQL (como MySQL ou PostgreSQL)

### Passos

1. Clone o repositório:

    ```bash
    git clone https://github.com/christopher2306/GuiaPerguntas.git
    cd GuiaPerguntas
    ```

2. Instale as dependências:

    ```bash
    npm install
    ```

3. Configure o banco de dados MySQL.


4. Execute as migrações do banco de dados:

    ```bash
    npx sequelize-cli db:migrate
    ```

5. Inicie o servidor:

    ```bash
    npm start
    ```

6. Abra o navegador e acesse:

    ```
    http://localhost:8080
    ```


