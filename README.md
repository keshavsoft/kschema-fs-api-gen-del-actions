# @keshavsoft/kschema-api-gen-actions

> Generate Express.js API action boilerplate instantly.

A lightweight developer-first CLI that scaffolds API action modules for Express.js applications with automatic route registration and structured architecture.

---

# Features

- ⚡ Generate API actions in seconds
- 📁 Auto-create folders and files
- 🛣 Auto-register routes in `end-points.js`
- 🧠 Convention-based code generation
- 🔥 Minimal setup
- 📦 ESM-first architecture
- 🚀 Optimized for rapid backend development
- 🧩 Scalable folder structure

---

# Installation

## Global Installation

```bash
npm install -g @keshavsoft/kschema-api-gen-actions
```

---

## Using NPX

```bash
npx @keshavsoft/kschema-api-gen-actions
```

---

# Quick Start

Assume your current project contains:

```txt
end-points.js
```

Example:

```js
import express from 'express';

const tableName = "journals";

const router = express.Router();

export { router };
```

---

# Generate ShowAll Action

```bash
npx kschema-api-gen ShowAll
```

Generated:

```txt
ShowAll/
├── controller.js
├── dal.js
├── route.js
└── validation.js
```

And updates:

```js
import { getFunc } from "./ShowAll/controller.js";

router.get('/ShowAll', (req, res) =>
    getFunc({
        res,
        inTableName: tableName
    })
);
```

---

# Generate Insert Action

```bash
npx kschema-api-gen Insert
```

Generated:

```txt
Insert/
├── controller.js
├── dal.js
├── route.js
└── validation.js
```

And updates:

```js
import { postFunc } from "./Insert/controller.js";

router.post('/Insert', express.json(), (req, res) =>
    postFunc({
        req,
        res,
        inTableName: tableName
    })
);
```

---

# Final Result Example

```txt
project/
├── end-points.js
├── Insert/
│   ├── controller.js
│   ├── dal.js
│   ├── route.js
│   └── validation.js
│
├── ShowAll/
│   ├── controller.js
│   ├── dal.js
│   ├── route.js
│   └── validation.js
```

---

# CLI Usage

```bash
npx kschema-api-gen <ActionName>
```

---

# Supported Actions

| Action | Method | Description |
|---|---|---|
| ShowAll | GET | Fetch all records |
| Insert | POST | Insert new record |

---

# Example Workflow

## Step 1

Create route container:

```js
import express from 'express';

const tableName = "journals";

const router = express.Router();

export { router };
```

---

## Step 2

Run:

```bash
npx kschema-api-gen ShowAll
```

---

## Step 3

Run:

```bash
npx kschema-api-gen Insert
```

---

## Step 4

Your routes become:

```js
import express from 'express';

import { postFunc } from "./Insert/controller.js";
import { getFunc } from "./ShowAll/controller.js";

const tableName = "journals";

const router = express.Router();

router.get('/ShowAll', (req, res) =>
    getFunc({
        res,
        inTableName: tableName
    })
);

router.post('/Insert', express.json(), (req, res) =>
    postFunc({
        req,
        res,
        inTableName: tableName
    })
);

export { router };
```

---

# Philosophy

This package is designed around:

- Convention over configuration
- Fast backend development
- Predictable architecture
- Reduced boilerplate
- Clean scalable Express.js APIs

---

# Tech Stack

- Node.js
- Express.js
- JavaScript
- ESM Modules

---

# Local Development

Clone repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
node ./bin/cli.js ShowAll
```

---

# Package Structure

```txt
bin/
├── cli.js
├── v11/
│   ├── commands/
│   ├── core/
│   └── tasks/
```

---

# Roadmap

- [ ] Update action generation
- [ ] Delete action generation
- [ ] Validation schema generation
- [ ] TypeScript support
- [ ] Swagger/OpenAPI support
- [ ] Prisma templates
- [ ] Sequelize templates
- [ ] MongoDB templates
- [ ] Custom middleware generation

---

this is config driven

# Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss proposed improvements.

---

# License

MIT

---

# Author

Created by KeshavSoft.

