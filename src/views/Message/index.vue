<template>
  <div class="message">
    <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
      <van-swipe :autoplay="3000" indicator-color="#f58401">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :src="image" lazy-load fit="fill" width="100%" height="100%" style="text-align:center" />
        </van-swipe-item>
      </van-swipe>
      <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
        <van-cell v-for="item in list" :key="item" :title="item" value="1小时前" label="描述信息">
          <template #icon>
            <van-icon
              name="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg"
              badge="1"
            />
          </template>
        </van-cell>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { List, PullRefresh, Cell, Swipe, SwipeItem, Icon, Image } from 'vant'
export default {
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      images: ['https://img.yzcdn.cn/vant/apple-1.jpg', 'https://img.yzcdn.cn/vant/apple-2.jpg']
    }
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [List.name]: List,
    [Cell.name]: Cell,
    [Icon.name]: Icon,
    [PullRefresh.name]: PullRefresh,
    [Image.name]: Image
  },
  methods: {
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1)
        }
        this.loading = false

        if (this.list.length >= 40) {
          this.finished = true
        }
      }, 1000)
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style lang="less" scoped>
.message {
  /deep/ .van-icon {
    height: 44px;
    width: 44px;
    margin-right: 10px;
    .van-icon__image {
      width: 100%;
      height: 100%;
    }
  }
  // .swipe {
  //   height: 134px;
    /deep/ .van-swipe-item {
      background-color: #ffffff;
      height: 134px;
    }
  // }
}
</style>
