# Development Guide

This document explains the internal architecture and development workflow of `@keshavsoft/kschema-api-gen-actions`.

---

# Introduction

`@keshavsoft/kschema-api-gen-actions` is a modular CLI execution framework designed around scalable command orchestration and isolated runtime execution.

The architecture focuses on:

* dynamic command loading
* version isolation
* configuration-driven execution
* reusable workflows
* scalable action registration

The goal is to allow new features to be added without rewriting the execution engine.

---

# High Level Architecture

Execution pipeline:

```text
cli.js
    ↓
loadRunner.js
    ↓
version runtime
    ↓
start.js
    ↓
loadCommand.js
    ↓
actions.json
    ↓
dynamic import
    ↓
task execution
```

Each layer has a dedicated responsibility.

---

# Folder Structure

```text
bin/
 ├── cli.js
 │
 ├── core/
 │    ├── getLatestVersion.js
 │    └── loadRunner.js
 │
 └── v18/
      ├── config/
      │    └── actions.json
      │
      ├── core/
      │    ├── loadCommand.js
      │    └── start.js
      │
      └── tasks/
           └── actions/
                ├── showAll.js
                ├── insert.js
                └── update.js

index.js

test/
 ├── showAll.js
 ├── insert.js
 └── update.js
```

---

# Entry Layer

## cli.js

Location:

```text
bin/cli.js
```

Responsibilities:

* detect latest runtime version
* load runtime dynamically
* execute startup flow

Example:

```js
const version = getLatestVersion();

const runner = await loadRunner(version);

await runner();
```

The entry layer intentionally stays lightweight.

---

# Runtime Loader

## loadRunner.js

Location:

```text
bin/core/loadRunner.js
```

Purpose:

Load runtime dynamically based on version.

Example:

```js
await import(`../${version}/start.js`);
```

Benefits:

* version isolation
* backward compatibility
* safe runtime upgrades
* independent evolution

---

# Runtime Engine

## start.js

Location:

```text
bin/v18/core/start.js
```

Responsibilities:

* parse CLI arguments
* validate command input
* resolve executable action
* execute workflow

Execution flow:

```text
parse input
    ↓
load command
    ↓
load action
    ↓
execute action
```

This layer acts as orchestration middleware.

---

# Configuration Layer

## actions.json

Location:

```text
bin/v18/config/actions.json
```

This file acts as command metadata registry.

Example:

```json
{
    "showAll": {
        "file": "showAll.js"
    }
}
```

Meaning:

```text
showAll command
    ↓
maps to
    ↓
showAll.js
```

Benefits:

* centralized command registration
* scalable configuration
* no hardcoded routing
* cleaner architecture

---

# Command Loader

## loadCommand.js

Location:

```text
bin/v18/core/loadCommand.js
```

Purpose:

Convert command names into executable modules.

Example flow:

```text
command name
    ↓
lookup actions.json
    ↓
resolve file
    ↓
dynamic import
    ↓
return executable module
```

Example:

```js
await import(`../tasks/actions/${file}`);
```

This creates a plugin-style execution system.

---

# Task Layer

Location:

```text
bin/v18/tasks/actions/
```

This layer contains actual business execution.

Examples:

```text
showAll.js
insert.js
update.js
```

Each action is isolated.

Benefits:

* easier debugging
* reusable workflows
* cleaner scaling
* safer refactoring

---

# API Layer

## index.js

Location:

```text
index.js
```

Purpose:

Expose programmable API access.

Example:

```js
import api from "@keshavsoft/kschema-api-gen-actions";
```

This allows commands to be consumed programmatically outside CLI execution.

---

# Test Architecture

## test/

Location:

```text
test/
```

The `test` folder is not simple unit testing.

It acts as:

* isolated runtime validation
* local development harness
* programmable action execution
* architecture verification

Example:

```text
test/showAll.js
```

Typical flow:

```text
test/showAll.js
    ↓
imports from index.js
    ↓
index.js loads runtime
    ↓
loadCommand.js resolves action
    ↓
actions.json maps metadata
    ↓
tasks/actions/showAll.js executes
```

This allows direct testing without npm publishing.

---

# Example Test File

```js
import api from "../index.js";

await api({
    command: "showAll",
    toPath: process.cwd()
});
```

Run locally:

```bash
node test/showAll.js
```

---

# Dynamic Import Strategy

Dynamic imports are a major architectural decision.

Example:

```js
await import(path);
```

Benefits:

* lazy loading
* lower startup cost
* plugin-style scalability
* isolated execution
* runtime flexibility

Only required modules load during execution.

---

# Version Isolation

The architecture supports isolated runtimes.

Example:

```text
v16/
v17/
v18/
```

Benefits:

* safer upgrades
* runtime stability
* controlled migration
* backward compatibility

Each runtime behaves independently.

---

# Scalability Model

Adding a new command typically requires:

1. Create action file
2. Register in `actions.json`
3. Create optional test file
4. Execute locally

Core engine remains unchanged.

This is a strong scalability characteristic.

---

# Architectural Strengths

## Modular

Every layer has isolated responsibility.

---

## Extensible

New commands integrate easily.

---

## Config Driven

Behavior is registry-based.

---

## Runtime Safe

Versions remain isolated.

---

## Developer Friendly

Test folder enables rapid local execution.

---

# Philosophy

```text
Small focused modules scale better than large intelligent files.
```

The architecture prioritizes:

* modularity
* clarity
* scalability
* isolated execution
* maintainable workflows

---

# Future Direction

Possible future evolution:

* plugin ecosystem
* generator marketplace
* schema-driven workflows
* runtime extensions
* interactive CLI prompts
* scaffolding presets

The current structure already supports long-term growth.

---

# Conclusion

`@keshavsoft/kschema-api-gen-actions` demonstrates how a simple CLI utility can evolve into a scalable developer platform using:

* layered architecture
* dynamic runtime loading
* configuration-driven execution
* isolated task workflows
* modular command orchestration

The codebase is intentionally designed for maintainability, scalability, and controlled runtime evolution.
