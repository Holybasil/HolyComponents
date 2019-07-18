<template>
  <div>
    <div>效果：</div>
    <HolyList
      :data="list"
      v-model="selected"
      :empty-text="'暂无数据'"
      >
    </HolyList>
    <div>结果：</div>
    <div>{{selected}}</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      list: [
        {
          id:1,
          label: "《魔道祖师》"
        },
        {
          id:2,
          label: "《月刊少女野崎君》"
        },
        {
          id:3,
          label: "《刀剑神域》"
        },
        {
          id:4,
          label: "《景恒街》"
        },
        {
          id:5,
          label: "《白夜行》"
        },
        {
          id:6,
          label: "《黎明之街》"
        }
      ],
      selected:[]
    }
  }
}
</script>
<style>

</style>


