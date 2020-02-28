# json-storage - Simple key-value storage based on JSON for Node.js

[![npm package](https://nodei.co/npm/request.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/request/)

## Installation
```bash
$ npm install json-storage
```

## Simple to use

json-storage is a very lightweight package with no  dependencies that was designed for small Node.js applications


Exmaple:
```js
const Storage = require('json-storage');

Storage.set('name', 'Alice');
const name = Storage.get('name');
console.log(name); // -> 'Alice'
```

## API

Get value from key
```
static get(key: string): any|undefined
```

Set value

```
static set(key: string, data: any): void
```

Delete value by key

```
static delete(key: string): any
```

Get all high-level keys

```
static getAllKeys(): string[]
```

