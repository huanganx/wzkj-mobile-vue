<template>
  <div class="select">
    <van-search v-model="value" placeholder="请输入搜索关键词" @input="changeInput"/>
    <van-tabs v-model="active" color="#2C8AFF" line-height="3px" line-width="30px">
      <van-tab title="全部"> </van-tab>
      <van-tab title="常用">
        <div v-for="item in wholeList" :key="item.id">
          <van-cell :title="item.name" center @click.stop="handlerItem(item)" v-show="item.show">
            <template #icon>
              <van-image
                width="38px"
                height="38px"
                :src="item.icon"
                style="background-color:#B070FF;border-radius:3px"
              />
            </template>
            <template #right-icon>
              <van-checkbox
                v-model="item.checked"
                shape="square"
                icon-size="18px"
              ></van-checkbox>
            </template>
          </van-cell>
        </div>
      </van-tab>
      <van-tab title="最近">最近</van-tab>
      <div class="footer">
        <van-button type="info" @click="handleSubmit">已选择 {{selectedCount}} 人</van-button>
      </div>
    </van-tabs>
  </div>
</template>

<script>
import { Search, Tab, Tabs, Cell, Image, Checkbox, Button, CellGroup } from 'vant'
export default {
  data() {
    return {
      value: '',
      active: 1,
      checked: true,
      commonList: [],
      wholeList: [
        {
          id: 1,
          name: '小黄',
          icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
          checked: false,
          show:true
        },
        {
          id: 2,
          name: '小黎',
          icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
          checked: false,
          show:true
        }
      ],
      latelyList: [],
      wholeSelectedList: [],
      selectedCount:0
    }
  },
  components: {
    [Search.name]: Search,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Cell.name]: Cell,
    [Image.name]: Image,
    [Checkbox.name]: Checkbox,
    [Button.name]: Button,
    [CellGroup.name]: CellGroup
  },
  methods: {
    handlerItem(item){
      item.checked=!item.checked
      if (item.checked) {
        this.wholeSelectedList.push(item)
      } else {
        let list = this.wholeSelectedList.filter(it => {
          return it.id !== item.id
        })
        this.wholeSelectedList = list
      }
      this.selectedCount = this.wholeSelectedList.length
    },
    handleSubmit(){
      console.log(this.wholeSelectedList);
    },
    changeInput(val){
      if(this.active===0){

      }else if(this.active===1){

      }else{

      }
    }
  }
}
</script>

<style lang="less" scoped>
.select {
  height: 100vh;
  /deep/ .van-tabs__wrap {
    height: 38px;
  }
  /deep/ .van-cell__title {
    margin-left: 8px;
    span {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
    }
  }
  .footer {
    height: 50px;
    line-height: 50px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top: 1px solid #eee;
    background-color: #ffffff;
    text-align: center;
    padding-bottom: 15px;
  }
}
</style>
