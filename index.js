// TODO: pure functions
const singleton = fn => {
  let result
  let executed 
  
  return (...args) => {
    if (!executed) {
      result = fn.apply(args)
      executed = true
    }
    
    return result
  }
}

module.exports = singleton
