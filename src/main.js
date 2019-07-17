import * as components from "./components";

const install = function(Vue, options = {}) {
  for (const componentName in components) {
    const component = components[componentName];
    Vue.component(component.name, component);
  }
};
// const exportComponents  = {}
// for (const componentName in components) {
//   exportComponents[componentName] = components[componentName];
// }
console.log(components, 'components')
export { ...components };
export default { install };

if (typeof window !== "undefined" && window.Vue) {
  install(window.vue);
}
