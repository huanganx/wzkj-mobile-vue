<template>
  <div class="follow">
    <div class="history" v-show="historyList.length!==0">
      <h2 class="history-title">历史进展</h2>
      <van-divider />
      <van-steps direction="vertical" :active="0" active-color="#0071FD">
        <van-step v-for="(item, index) in historyList" :key="index">
          <div class="step-title">{{ item.name }} {{ item.title }}</div>
          <div class="step-time">{{ item.time }}</div>
        </van-step>
      </van-steps>
    </div>
    <van-cell-group>
      <van-field v-model="value" label="任务名称" placeholder="请输入名称" input-align="right" />
      <van-cell title="责任人" :value="liabler" is-link />
      <van-cell title="截止时间" :value="endTime ? endTime : '请选择'" is-link @click="showEndTime = true" is-link />
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="进展说明"
        type="textarea"
        placeholder="请输入说明"
        input-align="right"
      />
      <van-cell title="状态" :value="status ? status : '请选择'" is-link @click="showStatus = true" />
    </van-cell-group>
    <div class="btn">
      <van-button type="info" @click="handlerClick">提 交</van-button>
    </div>
    <van-popup v-model="showEndTime" position="bottom">
      <van-datetime-picker
        v-model="currentDate"
        type="datehour"
        title="选择截止时间"
        @confirm="confirmEndTime"
        @cancel="cancelEndTime"
      />
    </van-popup>
    <van-popup v-model="showStatus" position="bottom">
      <van-picker title="状态" show-toolbar :columns="columnsStatus" @confirm="confirmStatus" @cancel="cancelStatus" />
    </van-popup>
  </div>
</template>

<script>
import { Cell, CellGroup, Field, Step, Steps, Divider, Button, DatetimePicker, Popup, Picker } from 'vant'
export default {
  name: 'Follow',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Field.name]: Field,
    [Step.name]: Step,
    [Steps.name]: Steps,
    [Divider.name]: Divider,
    [Button.name]: Button,
    [DatetimePicker.name]: DatetimePicker,
    [Popup.name]: Popup,
    [Picker.name]: Picker
  },
  data() {
    return {
      value: '',
      message: '',
      showEndTime: false,
      currentDate: new Date(),
      endTime: '',
      showStatus: false,
      columnsStatus: ['未执行', '执行中', '已完成'],
      status: '',
      historyList: [],
      liabler: '黄安宣'
    }
  },
  mounted() {
    this.taskFollowObj = testdata.follow.find(item=>item.id==this.$route.query.id)
    this.getHistory()
  },
  methods: {
    getHistory() {
      if(this.taskFollowObj&&this.taskFollowObj.hasOwnProperty('history')){
        this.historyList = this.taskFollowObj.history
        console.log(this.historyList,this.historyList.length==0);
      }else{
        this.$set(testdata.follow,'history',[])
      }
      console.log(this.taskFollowObj);
    },
    handlerClick() {
      const par = {
        name: this.liabler,
        title: this.value,
        time: this.endTime,
        message: this.message,
        status: this.status
      }
      testdata.follow.history.unshift(par)
      this.historyList =testdata.follow.history
    },
    confirmStatus(val) {
      this.status = val
      this.showStatus = false
    },
    cancelStatus() {
      this.showStatus = false
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
    },
    confirmEndTime(val) {
      this.endTime = this.dateFormat('mm月dd日 星期D HH:MM', val)
      this.showEndTime = false
    },
    cancelEndTime() {
      console.log('cancel')
      this.showEndTime = false
    }
  }
}
</script>

<style lang="less" scoped>
.follow {
  height: 100vh;
  background: #f3f3f3;
  /deep/ .van-cell__title,
  .van-field__label {
    height: 16px;
    font-size: 16px;
    font-family: PingFang SC;
    font-weight: 500;
    color: #000000;
  }
  /deep/ .van-cell__value {
    font-size: 16px;
    font-family: PingFang SC;
    color: #949494;
    flex: 2;
  }
  /deep/ .van-field__control {
    color: #949494;
  }
  /deep/ .van-field__control::-webkit-input-placeholder {
    color: #949494;
  }
  .history {
    background-color: #ffffff;
    margin-bottom: 15px;
    border-bottom: 1px solid #dcdcdc;
    .history-title {
      margin: 0;
      padding: 13px 12.5px 0 12.5px;
      color: #a4a4a4;
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
    }
    /deep/ .van-divider {
      margin: 7px 0;
    }
    .step-title {
      font-size: 16px;
      font-family: PingFang SC;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .step-time {
      font-size: 13px;
      font-family: PingFang SC;
    }
  }
  .btn {
    padding: 10px;
    text-align: center;
    background: #f3f3f3;
    /deep/ .van-button__content {
      font-size: 16px;
    }
  }
}
</style>
