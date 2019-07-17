import * as components from "./components";

const install = function(Vue, options = {}) {
  for (const componentName in components) {
    const component = components[componentName];
    Vue.component(component.name, component);
  }
};

export default { install, ...components };

if (typeof window !== "undefined" && window.Vue) {
  install(window.vue);
}
