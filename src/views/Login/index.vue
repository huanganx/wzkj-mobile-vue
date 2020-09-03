<template>
  <div class="home">
    <div class="top">
      <van-image
        src="https://api.gdweizhou.com/upload/knowledgeBase/2020/9/2/20200902193030dw1h.png"
        height="50px"
        width="50px"
        round
      />
      <div class="top-title">数字协作平台</div>
    </div>
    <div class="center">
      <div class="field-title">手机号</div>
      <van-field v-model="value" placeholder="请输入手机号" :border="false" />
      <div class="field-title">验证码</div>
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
              src="https://api.gdweizhou.com/upload/knowledgeBase/2020/9/2/20200902191432reje.png"
              height="44px"
              width="44px"
              round
            />
          </van-grid-item>
          <van-grid-item>
            <van-image
              src="https://api.gdweizhou.com/upload/knowledgeBase/2020/9/2/20200902192134oJy0.png"
              height="44px"
              width="44px"
              round
            />
          </van-grid-item>
          <van-grid-item>
            <van-image
              src="https://api.gdweizhou.com/upload/knowledgeBase/2020/9/2/20200902192140eS4k.png"
              height="44px"
              width="44px"
              round
            />
          </van-grid-item>
          <van-grid-item>
            <van-image
              src="https://api.gdweizhou.com/upload/knowledgeBase/2020/9/2/20200902192147HHet.png"
              height="44px"
              width="44px"
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
  name:'Login',
  data() {
    return {
      value: ''
    }
  },
  components: {
    [Field.name]: Field,
    [Button.name]: Button,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Image.name]: Image
  }
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
    line-height: 50px;
    height: 50px;
    font-size: 28px;
    font-weight: 500;
    color: #197df8;
    display: flex;
    margin: 0 auto;
    .top-title{
      line-height: 50px;
      height: 50px;
      margin-left: 5px;
    }
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
      border-radius: 0;
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
    padding: 0 30px;
    box-sizing:border-box;
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
    /deep/ .van-image--round {
      background: #ffffff;
      height: 44px;
      width: 44px;
      border-radius: 50%;
      border: 1px solid #dcdcdc;
    }
  }
}
</style>
