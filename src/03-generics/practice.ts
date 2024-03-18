function prop<T, U extends keyof T>(obj: T, key: U): T[U] {
  return obj[key];
}

const a = prop({ a: 2, b: 3 }, "b");
