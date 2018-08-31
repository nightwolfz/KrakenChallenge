global.Exception = class Exception extends Error {
  constructor(message) {
    super(message)
    this.message = message
    this.name = 'Exception'
  }
}

global.debounce = function(callback, timeout, aggressive) {
  let timer = null
  let latestParameter
  let latestThis
  function later() {
    timer = null
    callback.call(latestThis, latestParameter)
  }
  return function(parameter) {
    latestParameter = parameter
    latestThis = this
    if (!aggressive || timer === null) {
      clearTimeout(timer)
      timer = setTimeout(later, timeout)
    }
  }
}
