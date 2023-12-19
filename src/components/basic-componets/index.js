const modules = import.meta.glob('./*/index.vue', { eager: true })
const components = {}

Object.entries(modules).forEach(async ([key, module]) => {
  const name = key.replace(/\.\/(.*)\/index\.vue/, '$1')
  components[name] = module.default
})

export default components
