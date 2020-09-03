<template>
  <div class="mail-list">
    <van-index-bar>
      <van-cell title="系统推荐号" center class="top-icon">
        <template #icon>
          <van-image
            width="38px"
            height="38px"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps92018693e6958f0c-741f-4303-98cd-be649f4b1401"
            style="background-color:#FF6974;border-radius:3px"
          />
        </template>
      </van-cell>
      <van-cell title="群聊" center class="top-icon">
        <template #icon>
          <van-image
            width="38px"
            height="38px"
            src="https://api.gdweizhou.com/upload/knowledgeBase/2020/9/2/202009022307561vPf.png"
            style="background-color:#B070FF;border-radius:3px"
          />
        </template>
      </van-cell>
      <div v-for="index in indexList" :key="index">
        <van-index-anchor :index="index" />
        <van-cell title="安宣" center>
          <template #icon>
            <van-image
              width="38px"
              height="38px"
              src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg"
              style="background-color:#B070FF;border-radius:3px"
            />
          </template>
        </van-cell>
        <van-cell title="安宣" center>
          <template #icon>
            <van-image
              width="38px"
              height="38px"
              src="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg"
              style="background-color:#B070FF;border-radius:3px"
            />
          </template>
        </van-cell>
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { IndexBar, IndexAnchor, Cell, Image } from 'vant'
export default {
  components: {
    [IndexBar.name]: IndexBar,
    [IndexAnchor.name]: IndexAnchor,
    [Cell.name]: Cell,
    [Image.name]: Image
  },
  data() {
    const indexList = []
    const charCodeOfA = 'A'.charCodeAt(0)

    for (let i = 0; i < 26; i++) {
      indexList.push(String.fromCharCode(charCodeOfA + i))
    }
    return {
      indexList
    }
  }
}
</script>

<style lang="less" scoped>
.mail-list {
  /deep/ .van-cell__title {
    margin-left: 8px;
    span {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      color: #333333;
    }
  }
  /deep/ .van-index-anchor {
    background: #f1f1f1;
    height: 18px;
    line-height: 18px;
    font-size: 14px;
  }
  /deep/ .top-icon .van-image img {
      border-radius: 0;
      padding: 3px;
      box-sizing: border-box;
    }
}
</style>
