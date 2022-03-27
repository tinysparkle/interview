function myInstanceof(instance: any, origin: any) {
  if (instance == null) return false
  const type = typeof instance

  if (type !== 'object' && type !== 'function') {
    return false
  }

  let tempInstance = instance
  while(tempInstance) {
    if (tempInstance.__proto__ === origin.prototype) {
      return true
    } else {
      tempInstance = tempInstance.__proto__
    }
  }
  return false
}

console.info(myInstanceof({}, Object))
console.info(myInstanceof([], Object))
console.info(myInstanceof({}, Array))
console.info(myInstanceof('str', String))



