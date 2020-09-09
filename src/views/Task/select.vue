<template>
  <div class="select">
    <van-search v-model="value" placeholder="请输入搜索关键词" @input="changeInput" />
    <van-tabs v-model="active" color="#2C8AFF" line-height="3px" line-width="30px">
      <van-tab title="全部">
        <div v-for="item in commonList" :key="item.id" v-if="!value">
          <van-cell :title="item.name" center @click.stop="handlerItem(item)">
            <template #icon>
              <van-image
                width="38px"
                height="38px"
                :src="item.icon"
                style="background-color:#B070FF;border-radius:3px"
              />
            </template>
            <template #right-icon>
              <van-checkbox v-model="item.checked" shape="square" icon-size="18px"></van-checkbox>
            </template>
          </van-cell>
        </div>
        <div v-for="item in searchList" :key="item.id" v-if="value">
          <van-cell :title="item.name" center @click.stop="handlerItem(item)">
            <template #icon>
              <van-image
                width="38px"
                height="38px"
                :src="item.icon"
                style="background-color:#B070FF;border-radius:3px"
              />
            </template>
            <template #right-icon>
              <van-checkbox v-model="item.checked" shape="square" icon-size="18px"></van-checkbox>
            </template>
          </van-cell>
        </div>
      </van-tab>
      <van-tab title="常用">
        <div v-for="item in wholeList" :key="item.id" v-if="!value">
          <van-cell :title="item.name" center @click.stop="handlerItem(item)">
            <template #icon>
              <van-image
                width="38px"
                height="38px"
                :src="item.icon"
                style="background-color:#B070FF;border-radius:3px"
              />
            </template>
            <template #right-icon>
              <van-checkbox v-model="item.checked" shape="square" icon-size="18px"></van-checkbox>
            </template>
          </van-cell>
        </div>
        <div v-for="item in searchList" :key="item.id" v-if="value">
          <van-cell :title="item.name" center @click.stop="handlerItem(item)">
            <template #icon>
              <van-image
                width="38px"
                height="38px"
                :src="item.icon"
                style="background-color:#B070FF;border-radius:3px"
              />
            </template>
            <template #right-icon>
              <van-checkbox v-model="item.checked" shape="square" icon-size="18px"></van-checkbox>
            </template>
          </van-cell>
        </div>
      </van-tab>
      <van-tab title="最近">
        <div v-for="item in latelyList" :key="item.id" v-if="!value">
          <van-cell :title="item.name" center @click.stop="handlerItem(item)">
            <template #icon>
              <van-image
                width="38px"
                height="38px"
                :src="item.icon"
                style="background-color:#B070FF;border-radius:3px"
              />
            </template>
            <template #right-icon>
              <van-checkbox v-model="item.checked" shape="square" icon-size="18px"></van-checkbox>
            </template>
          </van-cell>
        </div>
        <div v-for="item in searchList" :key="item.id" v-if="value">
          <van-cell :title="item.name" center @click.stop="handlerItem(item)">
            <template #icon>
              <van-image
                width="38px"
                height="38px"
                :src="item.icon"
                style="background-color:#B070FF;border-radius:3px"
              />
            </template>
            <template #right-icon>
              <van-checkbox v-model="item.checked" shape="square" icon-size="18px"></van-checkbox>
            </template>
          </van-cell>
        </div>
      </van-tab>
      <div class="footer">
        <van-button type="info" @click="handleSubmit">已选择 {{ selectedCount }} 人</van-button>
      </div>
    </van-tabs>
  </div>
</template>

<script>
import { Search, Tab, Tabs, Cell, Image, Checkbox, Button, CellGroup } from 'vant'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      value: '',
      active: 1,
      checked: true,
      commonList: [
        {
          id: 5,
          name: '大黄',
          icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
          checked: false
        },
        {
          id: 6,
          name: '大黎',
          icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
          checked: false
        }
      ],
      wholeList: [
        {
          id: 1,
          name: '小黄',
          icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
          checked: false
        },
        {
          id: 2,
          name: '小黎',
          icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
          checked: false
        }
      ],
      latelyList: [
        {
          id: 3,
          name: '黄',
          icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
          checked: false
        },
        {
          id: 4,
          name: '黎',
          icon: 'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=251289958,1860898046&fm=26&gp=0.jpg',
          checked: false
        }
      ],
      checkedList: [],
      selectedCount: 0,
      searchList: []
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
  computed: {
    ...mapState({
      selectedList: state => state.task.selectedList,
      sellerList: state => state.task.sellerList,
    })
  },
  mounted() {
    if (this.$route.query.type == 1) {
      this.selectedList.map(item => {
        if (this.wholeList.find(it => item.id == it.id)) {
          this.wholeList.find(it => item.id == it.id).checked = true
        }
        if (this.commonList.find(it => item.id == it.id)) {
          this.commonList.find(it => item.id == it.id).checked = true
        }
        if (this.latelyList.find(it => item.id == it.id)) {
          this.latelyList.find(it => item.id == it.id).checked = true
        }
      })
      this.checkedList = this.selectedList
    } else {
      this.sellerList.map(item => {
        if (this.wholeList.find(it => item.id == it.id)) {
          this.wholeList.find(it => item.id == it.id).checked = true
        }
        if (this.commonList.find(it => item.id == it.id)) {
          this.commonList.find(it => item.id == it.id).checked = true
        }
        if (this.latelyList.find(it => item.id == it.id)) {
          this.latelyList.find(it => item.id == it.id).checked = true
        }
      })
      this.checkedList = this.sellerList
    }
    this.selectedCount = this.checkedList.length
  },
  methods: {
    ...mapMutations({
      setSelectedList: 'task/setSelectedList',
      setSellerList: 'task/setSellerList',
    }),
    handlerItem(obj) {
      obj.checked = !obj.checked
      if (obj.checked) {
        this.checkedList.push(obj)
      } else {
        let list = this.checkedList.filter(item => {
          return item.id !== obj.id
        })
        this.checkedList = list
      }
      this.selectedCount = this.checkedList.length
    },
    handleSubmit() {
      if(this.$route.query.type == 1){
        this.setSelectedList(this.checkedList)
      }else{
        this.setSellerList(this.checkedList)
      }
      this.$router.push({ path: '/task/sell' })
      
      
    },
    changeInput(val) {
      if (this.active === 0) {
        let list = this.commonList.filter(item => {
          return item.name.match(val)
        })
        this.searchList = list
      } else if (this.active === 1) {
        let list = this.wholeList.filter(item => {
          return item.name.match(val)
        })
        this.searchList = list
      } else {
        let list = this.latelyList.filter(item => {
          return item.name.match(val)
        })
        this.searchList = list
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
