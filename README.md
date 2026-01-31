# 🚀 API de Usuários (Node.js)

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)

Uma API REST simples para listar e criar usuários, mantendo os dados em memória. Desenvolvida para estudos introdutórios de **Node.js** e **Express**.

> [!IMPORTANT]
> Como os dados são salvos em variáveis locais (memória), reiniciar o servidor limpará a lista de usuários cadastrados.

---

## 🛠️ Tecnologias Utilizadas

*   **[Node.js](https://nodejs.org/)** - Ambiente de execução JavaScript.
*   **[Express](https://expressjs.com/)** - Framework web para Node.js.
*   **[Nodemon](https://nodemon.io/)** - Reinicia o servidor automaticamente (Desenvolvimento).

---

## 📦 Instalação e Configuração

### Pré-requisitos
*   [Git](https://git-scm.com)
*   [Node.js](https://nodejs.org/en/)

### Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/otavio-vinii/API-REST-localhost.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd API-REST-localhost
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

---

## ▶️ Como Rodar

### Modo Desenvolvimento
Utiliza o **Nodemon** para reiniciar o servidor automaticamente ao salvar alterações:
```bash
npm run dev
```

### Modo Produção
```bash
node index.js
```
O servidor estará rodando em: `http://localhost:3000`

---

## 🔗 Endpoints da API

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `GET` | `/usuario` | Retorna a lista de usuários |
| `POST` | `/usuario` | Cria um novo usuário |

### 📝 Exemplos de Requisição

#### 1. Criar Usuário (POST)
**Rota:** `POST /usuario`

**Corpo (JSON):**
```json
{
  "name": "Maria Silva",
  "age": 28
}
```

#### 2. Listar Usuários (GET)
**Rota:** `GET /usuario`

---

## 🧪 Como Testar

Já que a API não possui um Front-end, utilize:
*   **[Insomnia](https://insomnia.rest/download)** (Recomendado)
*   **[Postman](https://www.postman.com/)**
*   **VS Code (Thunder Client)**

### Teste rápido via Curl
```bash
curl -X POST http://localhost:3000/usuario -H "Content-Type: application/json" -d "{\"name\": \"Teste\", \"age\": 99}"
```

---

## 👤 Autor

Desenvolvido por **[Otávio Vinícius](https://github.com/otavio-vinii)**.