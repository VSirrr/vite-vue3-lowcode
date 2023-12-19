const modules = import.meta.glob('./components/*.vue', { eager: true })
const components = {}

Object.entries(modules).forEach(async ([key, module]) => {
  const name = key.match(/form-(.*)\.vue$/)[1]
  components[name] = module.default
})

export default components
