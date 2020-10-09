const noop = function () {}

export default class Page {
  constructor(options) {
    const { data = {}, mounted = noop, methods = {} } = options
    this._data = typeof data === 'function' ? data() : data
    this._methods = methods
    this._proxy(this, this._data)
    this._proxy(this, this._methods)

    Object.keys(this._methods).forEach((key) => {
      this._methods[key].bind(this)
    })
    mounted.call(this)
  }

  _proxy(target, origin) {
    Object.keys(origin).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: false,
        enumerable: true,
        get() {
          return origin[key]
        },
        set(newVal) {
          origin[key] = newVal
        }
      })
    })
  }
}
