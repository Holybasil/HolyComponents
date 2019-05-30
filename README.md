# holy-components

## use

```
yarn add holy-components
```
or 
```
npm install holy-components --save

import "holy-components"
```
## components
1. `<HolyClickoutside :exact="[]" @handle></HolyClickoutside>`
直接包裹一个想要实现clickoutside的组件，exact为css selector数组，这些dom会忽略clickoutside的影响

2. `<HolyList :data="" v-model=""></HolyList>`
一个可多选的列表组件，支持command多选，shift跨范围选择，鼠标范围选择，绑定值为data中已选的item数组

## better

* [ ] 增加doc
* [ ] 提供examples
* [ ] 支持模块导出
* [ ] 完善现有组件
* [ ] 更多奇思妙想的组件
