<template>
  <div class="home">
    <div class="top">无人机光伏巡检管理系统</div>
    <div class="center">
      <div class="field-title">用户名</div>
      <van-field v-model="value" placeholder="请输入用户名" :border="false" />
      <div class="field-title">密码</div>
      <van-field v-model="value" placeholder="请输入短信验证码" center clearable :border="false">
        <template #button>
          <van-button size="small" color="#FA7E05">发送验证码</van-button>
        </template>
      </van-field>
      <van-button type="info" block>登 录</van-button>
    </div>
    <div class="bottom">
      <div class="bottom-title">——— 第三方登录 ———</div>
      <div>
        <van-grid :gutter="10" :border="false">
          <van-grid-item>
            <van-image src="@/assets/wechart.png" round />
          </van-grid-item>
          <!-- <van-grid-item>
            <van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" round fit="cover" />
          </van-grid-item>-->
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Button, Grid, GridItem, Image } from "vant";
export default {
  data() {
    return {
      value: "",
    };
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
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
      padding: 5px 15px;
    }
    /deep/ .van-field__control {
      border-bottom: 1px solid #d5d5d5;
    }
    /deep/ .van-button--block {
      margin: 0 10px;
      width: calc(100% - 20px);
    }
    .field-title {
      font-size: 16px;
      font-weight: bold;
      padding: 0 15px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #222222;
    }
  }
  .bottom {
    text-align: center;
    .bottom-title {
      height: 12px;
      font-size: 12px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #888888;
      line-height: 24px;
    }
  }
}
</style>