<template>
  <div class="home">
    <div class="top">无人机光伏巡检管理系统</div>
    <div class="center">
      <van-field v-model="value" placeholder="请输入用户名" :border="false" />
      <van-field v-model="value" placeholder="请输入用户名" :border="false" />
      <van-button type="info" block round>登 录</van-button>
    </div>
    <div class="bottom">bottom</div>
  </div>
</template>

<script>
import { Field, Button } from "vant";
export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 600px;
  display: flex;
  height: 100vh;
  flex-direction: column;
  justify-content: space-around;
  background-color: #f5f5f5;
  .top {
    text-align: center;
    line-height: 28px;
    height: 28px;
    font-size: 28px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #197df8;
  }
  .center {
    padding: 20px;
    box-sizing: border-box;
    /deep/ .van-cell {
      background-color: transparent;
      margin-bottom: 15px;
    }
    /deep/ .van-field__control {
      border-bottom: 1px solid #d5d5d5;
    }
    /deep/ .van-button--block {
      margin: 0 10px;
      width: calc(100% - 20px);
    }
  }
}
</style>