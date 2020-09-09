<template>
  <div class="sell">
    <div class="custom-field">
      <van-field v-model="value" label="任务名称" placeholder="请输入任务名称" input-align="right" />
    </div>
    <van-row style="background-color:#fff;text-align:right">
      <van-col span="24">
        <van-image
          width="17px"
          height="17px"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps13075a59a097af75-4dcd-4f54-a2dc-89db6c5d5dd5"
          style="background-color:#00A1E9;border-radius:2px;padding:1px;margin-right:15px"
        />
        <van-image
          width="17px"
          height="17px"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/ps734bb759eb3e9db5-9016-4e31-b314-dfddd534af04"
          style="background-color:#6CAE44;border-radius:2px;padding:1px;margin-right:15px"
        />
      </van-col>
    </van-row>
    <van-cell-group>
      <van-cell title="责任人" center @click="$router.push('/task/select?type=1')">
        <template #right-icon>
          <van-icon
            name="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8d952b79166d63d6-6eda-4a97-8409-f7750b127b34"
            style="margin-left:5px"
          />
        </template>
        <van-tag
          closeable
          size="medium"
          type="primary"
          @close="closeTag(item.id)"
          v-for="item in selectedList"
          key="item.id"
          plain
          style="margin-left:5px"
          v-show="selectedList.length !== 0"
        >
          {{ item.name }}
        </van-tag>
        <div v-show="selectedList.length == 0">请选择</div>
      </van-cell>
      <van-cell title="截止时间" :value="endTime ? endTime : '请选择'" is-link @click="showEndTime = true" />
    </van-cell-group>
    <div class="more">
      <div @click="showMore = !showMore">
        更多
        <van-icon name="arrow-down" style="margin-left:5px;" color="#969799" />
      </div>
    </div>
    <van-cell-group v-show="showMore">
      <van-cell title="程度" :value="degree ? degree : '请选择'" is-link @click="showDegree = true" />
      <van-cell title="开始时间" :value="startTime ? startTime : '请选择'" is-link @click="showStartTime = true" />
      <van-cell title="抄送人" center @click="$router.push('/task/select?type=2')">
        <template #right-icon>
          <van-icon
            name="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8d952b79166d63d6-6eda-4a97-8409-f7750b127b34"
            style="margin-left:5px"
          />
        </template>
        <van-tag
          closeable
          size="medium"
          type="primary"
          @close="closeSellerTag(item.id)"
          v-for="item in sellerList"
          key="item.id"
          plain
          style="margin-left:5px"
          v-show="sellerList.length !== 0"
        >
          {{ item.name }}
        </van-tag>
        <div v-show="sellerList.length == 0">请选择</div>
      </van-cell>
      <van-cell title="提醒" :value="remind ? remind : '请选择'" is-link @click="showRemind = true" />
      <van-cell title="部门" :value="department ? department : '请选择'" is-link @click="showDepartment = true" />
      <van-cell title="类别" :value="category ? category : '请选择'" is-link @click="showCategory = true" />
    </van-cell-group>
    <van-row style="text-align:center">
      <van-col span="6" offset="6">
        <van-button type="info" size="small" @click="handlerSell">发 送</van-button>
      </van-col>
      <van-col span="6">
        <van-button type="default" size="small" @click="handlerSubmit">暂 存</van-button>
      </van-col>
    </van-row>
    <van-popup v-model="showEndTime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datehour"
        title="选择截止时间"
        @confirm="confirmEndTime"
        @cancel="cancelEndTime"
      />
    </van-popup>
    <van-popup v-model="showStartTime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datehour"
        title="选择开始时间"
        @confirm="confirmStartTime"
        @cancel="cancelStartTime"
      />
    </van-popup>
    <van-popup v-model="showDegree" position="bottom">
      <van-picker title="程度" show-toolbar :columns="columns" @confirm="confirmDegree" @cancel="cancelDegree" />
    </van-popup>
    <van-popup v-model="showRemind" position="bottom">
      <van-picker title="提醒" show-toolbar :columns="columnsRemind" @confirm="confirmRemind" @cancel="cancelRemind" />
    </van-popup>
    <van-popup v-model="showDepartment" position="bottom">
      <van-picker
        title="部门"
        show-toolbar
        :columns="columnsDepartment"
        @confirm="confirmDepartment"
        @cancel="cancelDepartment"
      />
    </van-popup>
    <van-popup v-model="showCategory" position="bottom">
      <van-picker
        title="类别"
        show-toolbar
        :columns="columnsCategory"
        @confirm="confirmCategory"
        @cancel="cancelCategory"
      />
    </van-popup>
  </div>
</template>

<script>
import { Field, CellGroup, Cell, Row, Col, Image, Icon, Button, DatetimePicker, Popup, Picker, Tag } from 'vant'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Sell',
  components: {
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Row.name]: Row,
    [Col.name]: Col,
    [Image.name]: Image,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Tag.name]: Tag
  },
  data() {
    return {
      value: '',
      showEndTime: false,
      currentDate: new Date(),
      endTime: '',
      columns: ['紧急', '重要', '一般'],
      showDegree: false,
      degree: '',
      startTime: '',
      showStartTime: false,
      currentStartDate: new Date(),
      columnsRemind: ['截止前15分钟前', '截止前30分钟前', '截止前1小时前'],
      remind: '',
      showRemind: false,
      showDepartment: false,
      columnsDepartment: ['开发部', '人事部', '财务部'],
      department: '',
      showCategory: false,
      columnsCategory: ['计划类', '临时类'],
      category: '',
      showMore: false
    }
  },
  computed: {
    ...mapState({
      selectedList: state => state.task.selectedList,
      sellerList: state => state.task.sellerList,
    })
  },
  methods: {
    ...mapMutations({
      setSelectedList: 'task/setSelectedList',
      setSellerList: 'task/setSellerList',
    }),
    closeTag(id) {
      let list = this.selectedList.filter(item => {
        return item.id !== id
      })
      this.setSelectedList(list)
    },
    closeSellerTag(id){
      let list = this.sellerList.filter(item => {
        return item.id !== id
      })
      this.setSellerList(list)
    },
    handlerSubmit() {
      console.log('submit')
    },
    handlerSell() {},
    confirmCategory(val) {
      this.category = val
      this.showCategory = false
    },
    cancelCategory() {
      this.showCategory = false
    },
    confirmDepartment(val) {
      this.department = val
      this.showDepartment = false
    },
    cancelDepartment() {
      this.showDepartment = false
    },
    confirmRemind(val) {
      this.remind = val
      this.showRemind = false
    },
    cancelRemind() {
      this.showRemind = false
    },
    confirmStartTime(val) {
      this.startTime = this.dateFormat('mm月dd日 星期D HH:MM', val)
      this.showStartTime = false
    },
    cancelStartTime() {
      this.showStartTime = false
    },
    confirmDegree(val) {
      this.degree = val
      this.showDegree = false
    },
    cancelDegree() {
      this.showDegree = false
    },
    confirmEndTime(val) {
      this.endTime = this.dateFormat('mm月dd日 星期D HH:MM', val)
      this.showEndTime = false
    },
    cancelEndTime() {
      console.log('cancel')
      this.showEndTime = false
    },
    dateFormat(fmt, date) {
      let ret
      const opt = {
        'Y+': date.getFullYear().toString(), // 年
        'm+': (date.getMonth() + 1).toString(), // 月
        'd+': date.getDate().toString(), // 日
        'H+': date.getHours().toString(), // 时
        'M+': date.getMinutes().toString(), // 分
        'S+': date.getSeconds().toString(), // 秒
        'D+': date.getDay().toString()
        // 有其他格式化字符需求可以继续添加，必须转化成字符串
      }
      for (let k in opt) {
        ret = new RegExp('(' + k + ')').exec(fmt)
        if (ret) {
          if (ret[1] == 'D') {
            fmt = fmt.replace(ret[1], ['日', '一', '二', '三', '四', '五', '六'][opt[k]])
          } else {
            fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, '0'))
          }
        }
      }
      return fmt
    }
  },
  destroyed() {
    console.log('destroyed')
  }
}
</script>

<style lang="less" scoped>
.sell {
  background: #f3f3f3;
  height: 100vh;
  /deep/ .custom-field .van-cell::after {
    border-bottom: none;
  }
  .more {
    height: 30px;
    line-height: 30px;
    padding: 0 17px;
    div {
      font-size: 14px;
      color: #343434;
      float: right;
    }
  }
  /deep/ .van-button {
    padding: 0 20px;
  }
}
</style>
