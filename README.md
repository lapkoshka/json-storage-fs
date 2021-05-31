# json-storage-fs - Simple key-value storage based on JSON for Node.js

[![npm package](https://nodei.co/npm/json-storage-fs.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/json-storage-fs/)

## Installation
```bash
$ npm install json-storage-fs
```

## Simple to use

json-storage-fs is a very lightweight package with no dependencies that was designed for small Node.js applications


Example:
```js
const { JsonStorage, config } = require('json-storage-fs');

// (optional set catalog path)
config({ catalog: '/tmp/meow'});

JsonStorage.set('name', 'Alice');
const name = JsonStorage.get('name');
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
static delete(key: string): void
```

Get all high-level keys

```
static getAllKeys(): string[]
```

Clear storage 

```
static clearAll(): void
```
