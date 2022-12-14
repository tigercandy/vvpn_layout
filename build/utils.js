const httpsReg = /^https:\/\//

export function wrapEnv(options) {
  if (!options) return {}

  const rst = {}

  for (const k in options) {
    let val = options[k]
    if (['true', 'false'].includes(val)) {
      val = val === 'true'
    }
    if (['VITE_PORT'].includes(k)) {
      val = +val
    }
    if (k === 'VITE_PROXY' && val) {
      try {
        val = JSON.parse(val.replace(/'/g, '"'))
      } catch (e) {
        val = ''
      }
    }
    rst[k] = val
    if (typeof k === 'string') {
      process.env[k] = val
    } else if (typeof k === 'object') {
      process.env[k] = JSON.stringify(val)
    }
  }

  return rst
}

export function createProxy(list = []) {
  const rst = {}

  for (const [prefix, target] of list) {
    const isHttps = httpsReg.test(target)

    rst[prefix] = {
      target: target,
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^${prefix}`), ''),
      ...(isHttps ? { secure: false } : {}),
    }
  }

  return rst
}
