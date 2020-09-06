<template>
  <div class="home">
    <div class="swipe">
      <van-swipe :autoplay="5000" indicator-color="#f58401">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <van-image :src="image" lazy-load fit="fill" width="100%" height="100%" style="text-align:center" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="work">
      <h2 class="work-title">办公应用</h2>
      <van-divider />
      <van-grid :border="false" >
        <van-grid-item v-for="item in workItemList" :key="item.id" :text="item.text" @click="handleGrid(item)">
          <template #icon>
            <van-image
              :src="item.icon"
              round
              lazy-load
              fit="contain"
              width="44px"
              height="44px"
              :style="`background-color:${item.color};`"
            />
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <div class="business">
      <h2 class="business-title">业务应用</h2>
      <van-divider />
      <van-grid :border="false">
        <van-grid-item v-for="item in businessItemList" :key="item.id" :text="item.text" @click="handleGrid(item)">
          <template #icon>
            <van-image
              :src="item.icon"
              round
              lazy-load
              fit="contain"
              width="44px"
              height="44px"
              :style="`background-color:${item.color};`"
            />
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem, Grid, GridItem, Divider, Image } from 'vant'
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Divider.name]: Divider,
    [Image.name]: Image
  },
  data() {
    return {
      images: ['https://api.gdweizhou.com/upload/news/2020/9/3/20200903210900Jfs6.jpg', 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903210939mAEl.jpeg'],
      workItemList: [
        {
          id: 1,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903203416Pn6c.png',
          text: '最新资讯',
          url: 'https://lanhu.oss-cn-beijing.aliyuncs.com/psa5a419a525e1ccd4-8e10-4d9b-a5c8-0ac82825c57b',
          color: '#23CDE6'
        },
        {
          id: 2,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903204536blE1.png',
          text: '最新活动',
          url: '',
          color: '#08C163'
        },
        {
          id: 3,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903204632tjcb.png',
          text: '产品展示',
          url: '',
          color: '#F69D33'
        },
        {
          id: 4,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903204724AGJ6.png',
          text: '企业介绍',
          url: '',
          color: '#FF5FB2'
        },
        {
          id: 5,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903204850LPQP.png',
          text: '福利优惠',
          url: '',
          color: '#84DA44'
        },
        {
          id: 6,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903204941QODe.png',
          text: '个人日程',
          url: '',
          color: '#4DBEFF'
        },
        {
          id: 7,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/202009032051291KFr.png',
          text: '客户管理',
          url: '',
          color: '#F69D33'
        },
        {
          id: 8,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903205149aeLp.png',
          text: '任务布置',
          url: '',
          color: '#C45ADB'
        }
      ],
      businessItemList: [
        {
          id: 11,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903210321QKla.png',
          text: '流程管理',
          url: '',
          color: '#B570F6'
        },
        {
          id: 12,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903210150LHK7.png',
          text: '工资查询',
          url: '',
          color: '#35D1CB'
        },
        {
          id: 13,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903210402RGgP.png',
          text: '在线考试',
          url: '',
          color: '#37D2FF'
        },
        {
          id: 14,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/202009032101244wE6.png',
          text: '任务布置',
          url: '',
          color: '#57C781'
        },
        {
          id: 15,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/20200903210244yK0d.png',
          text: '会议发起',
          url: '',
          color: '#9BC94A'
        },
        {
          id: 16,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/202009032102114cs7.png',
          text: '会议室预定',
          url: '',
          color: '#E3B912'
        },
        {
          id: 17,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/202009032101032vRw.png',
          text: '备忘录',
          url: '',
          color: '#E057D8'
        },
        {
          id: 18,
          icon: 'https://api.gdweizhou.com/upload/news/2020/9/3/2020090321043254xO.png',
          text: '我的收藏',
          url: '',
          color: '#E63F96'
        }
      ]
    }
  },
  methods:{
    handleGrid(obj){
      console.log('点击了'+obj.text);
    }
  }
}
</script>

<style lang="less" scoped>
.home {
  font-family: PingFang SC;
  width: 100%;
  display: flex;
  height: 100vh;
  flex-direction: column;
  background-color: #eeeded;
  .swipe {
    height: 134px;
    /deep/ .van-swipe-item {
      background-color: #ffffff;
      height: 134px;
    }
  }
  .work,
  .business {
    background-color: #ffffff;
    margin-bottom: 10px;
    border-bottom: 1px solid #dcdcdc;
    .work-title,
    .business-title {
      margin: 0;
      padding: 15px 12.5px 0 12.5px;
      color: #a4a4a4;
      font-weight: 500;
      font-size: 13px;
      line-height: 16px;
    }
    /deep/ .van-grid-item__content {
      padding: 10px;
    }
    /deep/ .van-divider {
      margin: 6px 0;
    }
    /deep/ .van-grid-item__text {
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #333333;
    }
    /deep/ .van-image--round img {
      border-radius: 0;
      padding: 10px;
      box-sizing: border-box;
      background: linear-gradient(0deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.1) 80%);
    }
  }
}
</style>
