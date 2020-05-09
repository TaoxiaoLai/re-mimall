/**
 * Storage封装
 * */ 

const STORAGE_KEY = 'mall'
export default{
  // 获取整个sessionStorage，并转化为json形式
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 获取某个值
  getItem(key, module_name) {
    // 比如获取user下面的age属性
    if(module_name) {
      // let val = this.getStorage()[module_name]
      let val = this.getItem(module_name)
      if(val) return val[key]
    }
    return this.getStorage()[key]
  },
  // 设置值
  setItem(key, value, module_name) {
    if(module_name) {
      let val = this.getItem(module_name)
      val[key] = value
      this.setItem(module_name, val)
    } else {
      let stor = this.getStorage()
      stor[key] = value
      return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(stor))
    }
  },
  // 删除值
  clear(key, module_name) {
    let val = this.getStorage()
    if(module_name) {
      if(!val[module_name]) return
      delete val[module_name][key]
    } else {
      delete val[key]
    }
    return window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
  }
}