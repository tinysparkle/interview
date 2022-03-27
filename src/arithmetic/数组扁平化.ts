/**
 * @description 扁平化一级嵌套 循环方式\concat方式
*/
function formatArray(array: any[]): any[] {
  let res: any[] = []

  array.forEach(item => {
    if (Array.isArray(item)) {
      // item.forEach( n => res.push(n))
      res = res.concat(item) // concat方式
    } else {
      res.push(item)
    }
  })

  return res
}

/**
 * @description 扁平化深层嵌套 循环方式\concat方式
*/
function formatArray2(array: any[]): any[] {
  let res: any[] = []

  array.forEach(item => {
    if (Array.isArray(item)) {
      const formatArr = formatArray2(item)
      // formatArr.forEach(n => res.push(n))
      res = res.concat(formatArr)
    } else {
      res.push(item)
    }
  })

  return res
}

console.info( formatArray2( [1, 2, [3], [4, [5]], 6] ) )