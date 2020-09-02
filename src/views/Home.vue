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
            <van-image
              src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1599039878&di=dc22ed909baf8dd7a3ec7fc8dbfec147&src=http://bpic.588ku.com/element_origin_min_pic/00/91/37/6356f169181803b.jpg"
              height="50px"
              width="50px"
              round
            />
          </van-grid-item>
        </van-grid>
      </div>
    </div>
  </div>
</template>

<script>
import { Field, Button, Grid, GridItem, Image } from 'vant'
export default {
  data() {
    return {
      value: '',
    }
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image,
  },
}
</script>

<style lang="less" scoped>
.home {
  font-family: PingFang SC;
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
      font-weight: 500;
      color: #222222;
    }
  }
  .bottom {
    text-align: center;
    padding: 0 40px;
    .bottom-title {
      height: 12px;
      font-size: 12px;
      font-weight: 500;
      color: #888888;
      line-height: 24px;
    }
    /deep/.van-grid-item__content {
      background-color: transparent;
    }
  }
}
</style>