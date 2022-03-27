function getType(x: any): string {
  const originType: string = Object.prototype.toString.call(x)
  const spaceIndex = originType.indexOf(' ')
  const str = originType.slice(spaceIndex + 1, -1)
  return str.toLowerCase();
}
console.info(getType({}))
console.info(getType([]))
console.info(getType(12))
console.info(getType('12'))
console.info(getType(Symbol()))
console.info(getType(new Map))

