const modules = import.meta.glob('./*/conf.js', { eager: true })
const configs = {}

Object.entries(modules).forEach(async ([key, module]) => {
  const name = key.replace(/\.\/basic-(.*)\/conf\.js/, '$1')
  configs[name] = module.default
})

export default configs
