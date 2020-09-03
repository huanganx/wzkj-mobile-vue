<template>
  <div class="my">
    <van-cell is-link label="administrator" center>
      <!-- 使用 title 插槽来自定义标题 -->
      <template #icon>
        <van-image
          round
          width="44px"
          height="44px"
          src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg"
        />
      </template>
      <template #title>
        <span>超级管理员</span>
      </template>
      <van-image
        width="18px"
        height="18px"
        src="https://api.gdweizhou.com/upload/knowledgeBase/2020/9/2/20200902230442KE3f.png"
      />
    </van-cell>
    <van-cell-group>
      <van-cell title="分享给朋友" is-link>
        <template #icon>
          <van-image
            width="24px"
            height="24px"
            src="https://api.gdweizhou.com/upload/knowledgeBase/2020/9/2/202009022307561vPf.png"
            style="background-color:#E88B1D;border-radius:2px"
          />
        </template>
      </van-cell>
      <van-cell title="帮助中心" is-link>
        <template #icon>
          <van-image
            width="24px"
            height="24px"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps6b9e21fe7ba9025f-c27f-450a-b86f-d1ef12b4ca5b"
            style="background-color:#39A126;border-radius:2px"
          />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="我的红包" is-link>
        <template #icon>
          <van-image
            width="24px"
            height="24px"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps97144d049adcea9e-2b40-422c-ac65-0c9bc085b9cf"
            style="background-color:#05B5AF;border-radius:2px"
          />
        </template>
      </van-cell>
      <van-cell title="我的文件" is-link>
        <template #icon>
          <van-image
            width="24px"
            height="24px"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps867864e786e02dc0-30c8-49a1-9e0a-6f22567f5b92"
            style="background-color:#EE4811;border-radius:2px"
          />
        </template>
      </van-cell>
      <van-cell title="我的收藏" is-link>
        <template #icon>
          <van-image
            width="24px"
            height="24px"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps92d765b0b6ea252e-66f8-4b87-8572-db72da40d901"
            style="background-color:#3781E8;border-radius:2px"
          />
        </template>
      </van-cell>
      <van-cell title="我的订单" is-link>
        <template #icon>
          <van-image
            width="24px"
            height="24px"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps4e39ece76fbc6330-a6bf-4472-adb0-bc04bca8a427"
            style="background-color:#AB12C1;border-radius:2px"
          />
        </template>
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell title="设置" is-link>
        <template #icon>
          <van-image
            width="24px"
            height="24px"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps92018693e6958f0c-741f-4303-98cd-be649f4b1401"
            style="background-color:#02CFED;border-radius:2px"
          />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon, Image } from 'vant'
export default {
  components: {
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [Image.name]: Image
  }
}
</script>

<style lang="less" scoped>
.my {
  height: 100vh;
  width: 100%;
  background-color: #eeeced;
  /deep/ .van-cell__title {
    margin-left: 10px;
  }
  /deep/ .van-cell__label {
    span {
      font-size: 12px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #000000;
      opacity: 0.6;
    }

    margin: 0;
  }
  /deep/ .van-cell__title {
    span {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
    }
  }
  /deep/ .van-cell-group {
    margin-top: 10px;
  }
  /deep/ .van-cell-group .van-image img {
    border-radius: 0;
    padding: 1px;
    box-sizing: border-box;
    background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 50%);
  }
}
</style>
