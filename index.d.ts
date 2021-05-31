export class JsonStorage {
  static get(key: string): void;
  static set(key: string, value: any): void;
  static delete(key: string): void;
  static getAllKeys(): void;
  static clearAll(): void;
}

export function config(options: { catalog: string }): void;
