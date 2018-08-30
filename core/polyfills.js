/**
 * Insert element to array
 * @param entry {string|function}
 * @param condition
 * @returns {array|object}
 */
Array.prototype.upsert = function upsert(entry, condition) {
  console.assert(entry !== undefined, 'upsert(): First argument is undefined')

  if (typeof entry === 'object' && !Array.isArray(entry)) {
    const result = this.find(condition || (x => x.id === entry.id))
    result ? Object.assign(result, entry) : this.push(entry)
  } else {
    const index = this.findIndex(condition || (x => x === entry))
    index !== -1 ? (this[index] = entry) : this.push(entry)
  }
  return this
}

/**
 * Remove element from array
 * @param element {any}
 * @returns {array|object}
 */
Array.prototype.remove = function(element) {
  const index = this.indexOf(element)
  if (index !== -1) {
    this.splice(index, 1)
  }
}

/**
 * Get random element from array
 * @returns {*}
 */
Array.prototype.random = function() {
  return this[Math.floor((Math.random()*this.length))]
}

/**
 * Add/Remove value from a set
 * @param value {any}
 * @returns {Set}
 */
Set.prototype.toggle = function(value) {
  if (this.has(value)) {
    this.delete(value)
  } else {
    this.add(value)
  }
  return this
}

/**
 * Returns a numeric hash of a string
 * @returns {number}
 */
String.prototype.hashCode = function() {
  let hash = 0
  for (let i = 0; i < this.length; i++) {
    hash = ((hash << 5) - hash) + this.charCodeAt(i) | 0
  }
  return Math.abs(hash)
}

/**
 * Encode into base64 without breaking utf-8
 * @returns {string}
 */
String.prototype.base64encode = function() {
  return btoa(encodeURIComponent(this).replace(/%([0-9A-F]{2})/g, function(match, p1) {
    return String.fromCharCode('0x' + p1)
  }))
}

String.prototype.trimLeft = function trimLeft(str) {
  return remove(this, `^${str || '\\s'}+`)
}

String.prototype.trimRight = function trimRight(str) {
  return remove(this, `${str || '\\s'}+$`)
}

function remove(str, rx) {
  return str.replace(new RegExp(rx), '')
}
