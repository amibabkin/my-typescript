// рекурсивные типы

type NestedNumbers = number | NestedNumbers[]; // позволяет создавать массивы с числами и с вложенными массивами с числами

const nums: NestedNumbers = [1, 2, [3, 4, [5, 6]]];

nums.push([1, 2, [1, 2]]);

// JSON

type JSONPrimitive = string | number | boolean | null;
type JSONObject = { [k: string]: JSONValue };
type JSONArray = JSONValue[];
type JSONValue = JSONPrimitive | JSONObject | JSONArray;

function isJSON(obj: JSONValue) {}
