import Vue from "vue";
import HolyClickoutside from "./holyClickoutside";
import HolyList from "./holyList";

const Components = { HolyClickoutside, HolyList };

Object.keys(Components).forEach(name => {
  Vue.component(name, Components[name]);
});

export default Components;
