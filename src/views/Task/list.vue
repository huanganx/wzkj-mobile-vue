<template>
  <div class="list">
    <van-cell-group>
      <van-cell :title="item.name" is-link center v-for="item in deptTree" :key="item.id" @click="handlerItem(item)">
        <van-tag type="warning">{{item.warning}}</van-tag>
        <van-tag type="success">{{item.success}}</van-tag>
      </van-cell>
    </van-cell-group>
    <div v-if="deptTree[0].deep!==1" class="footer-btn">
      <van-button block @click="handlerBack">返回上一级</van-button>
    </div>
    
  </div>
</template>

<script>
import { Cell, CellGroup, Tag,Button } from 'vant'
export default {
  name: 'List',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Tag.name]: Tag,
    [Button.name]: Button,
  },
  data() {
    return {
      deptTree: [
        {
          id: 1,
          name: '总经理室',
          success: 3,
          warning: 2,
          deep:1,
          children: [
            {
              id: 11,
              name: '副经理',
              success: 2,
              warning: 2,
              deep:2
            }
          ]
        },
        {
          id: 2,
          name: '营销中心',
          success: 2,
          warning: 0,
          deep:1
        }
      ]
    }
  },
  methods:{
    handlerItem(obj){
      if(obj.children){
        this.centerTree = this.deptTree
        this.deptTree = obj.children
      }else{
        this.$router.push('/task')
      }
    },
    handlerBack(){
      this.deptTree = this.centerTree
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  /deep/ .van-tag {
    margin-right: 5px;
    padding: 0 5px;
  }
  .footer-btn{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 10px;
    box-sizing: border-box;
  }
}
</style>
