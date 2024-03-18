function foo<T>(arr: T[], callback: (el: T, i: number, arr: T[]) => T)
{
  return arr.reduce((acc: T[], value, index) => {
    const result = callback(value, index, arr)
    acc.push(result)
    return acc
  }, []);
}
//1,2,[1,2,3,4]
function myCallback<T>(el: T, i: number, arr: T[]): T {
  return el
}

const result = foo([1,2,3,4],  myCallback)

console.log(result)