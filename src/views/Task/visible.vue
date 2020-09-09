<template>
  <div class="visible">
    <van-cell-group>
      <van-cell title="任务名称" :value="taskObj.name" />
      <van-cell title="责任人" :value="taskObj.liable" />
      <van-cell title="截止时间" :value="dateFormat('mm月dd日 星期D HH:MM',new Date(taskObj.endTime))" />
      <van-cell title="开始时间" :value="dateFormat('mm月dd日 星期D HH:MM',new Date(taskObj.startTime))" />
      <van-cell title="程度" :value="taskObj.degree" />
      <van-cell title="抄送人" :value="taskObj.seller" />
    </van-cell-group>
    <div class="btn">
      <van-button type="info" @click="$router.push('/task/follow?id='+$route.query.id)">跟进反馈</van-button>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Button } from 'vant'
export default {
  name: 'Visible',
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Button.name]: Button
  },
  data(){
    return{
      taskObj:{}
    }
  },
  mounted(){
    this.taskObj = testdata.task.find(item=>item.id==this.$route.query.id)
  },
  methods:{
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
  }
}
</script>

<style lang="less" scoped>
.visible {
  height: 100vh;
  background: #f3f3f3;
  .btn {
    padding: 10px;
    text-align: center;
  }
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
}
</style>
