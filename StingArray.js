function SearchingChallenge(strArr) {
  // code goes here
  // Using map to split the the strings into arrays
  // ['value:pair'] => [['value', 'pair']]
  const pairs = strArr.map((str) => {
    return str.split(':')
  })
  const keyValue = {}
  const length = pairs.length

  // Looping through pairs and assign keys to keyValue object
  // if the key doesn't exist then added the key: value to the object
  // else sum the values
  for (let i = 0; i < length; i++) {
    if (!keyValue[pairs[i][0]]) {
      keyValue[pairs[i][0]] = parseInt(pairs[i][1])
    } else {
      keyValue[pairs[i][0]] += parseInt(pairs[i][1])
    }
  }

  let returnArr = []
  // looping though keyValue
  // if the value of key is not equal to 0
  // add the 'key:value' to returnArr
  Object.keys(keyValue).forEach((key) => {
    if (keyValue[key] !== 0) {
      returnArr.push(`${key}:${keyValue[key]}`)
    }
  })
  // Sorting and joining the returnArr
  return returnArr.sort().join(',')
}

// keep this function call here
console.log(SearchingChallenge(['B:-1', 'A:1', 'B:3', 'A:5']))
