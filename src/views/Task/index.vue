<template>
  <div class="task">
    <van-tabs v-model="active" color="#16DCFF" line-height="3px" line-width="30px">
      <van-search v-model="value" placeholder="请输入搜索关键词" />
      <van-tab title="全部">
        <van-cell-group>
          <van-cell title="移动端设置维护功能有bug">
            <template #label>
              <span ><van-icon name="underway-o" size="14" style="vertical-align:-1.5px"/> <span style="margin:0 3px">剩余天数：3天</span> <van-tag round type="danger">紧急</van-tag></span>
              <span style="float:right">2019-04-21 11:00</span>
            </template>
          </van-cell>
          <van-cell title="移动端设置维护功能有bug">
            <template #label>
              <span ><van-icon name="underway-o" size="14" style="vertical-align:-1.5px"/> <span style="margin:0 3px">剩余天数：3天</span> <van-tag round color="#FCAC00">重要</van-tag></span>
              <span style="float:right">2019-04-21 11:00</span>
            </template>
          </van-cell>
          <van-cell title="移动端设置维护功能有bug">
            <template #label>
              <span ><van-icon name="underway-o" size="14" style="vertical-align:-1.5px"/> <span style="margin:0 3px">剩余天数：3天</span> <van-tag round color="#B2B2B2">一般</van-tag></span>
              <span style="float:right">2019-04-21 11:00</span>
            </template>
          </van-cell>
        </van-cell-group>
      </van-tab>
      <van-tab title="待接收">待接收</van-tab>
      <van-tab title="进行中">进行中</van-tab>
      <van-tab title="挂起中">挂起中</van-tab>
      <van-tab title="已办结">已办结</van-tab>
    </van-tabs>
    <router-view></router-view>
  </div>
</template>

<script>
import { Tab, Tabs, Search, Cell, CellGroup,Icon,Tag } from 'vant'
export default {
  components: {
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [Search.name]: Search,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Tag.name]: Tag,
    [CellGroup.name]: CellGroup
  },
  data() {
    return {
      active: 0,
      value:''
    }
  }
}
</script>

<style lang="less" scoped>
.task {
  /deep/ .van-tabs__wrap {
    height: 38px;
  }
  /deep/ .van-cell__title{
    font-size: 16px;
  }
  /deep/ .van-cell__label{
    margin-top: 10px;
  }
}
</style>
