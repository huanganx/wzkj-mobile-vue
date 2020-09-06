<template>
  <div class="sell">
    <div class="custom-field">
      <van-field v-model="value" label="任务名称" placeholder="请输入任务名称" input-align="right"/>
    </div>
    <van-row style="background-color:#fff;text-align:right">
      <van-col span="24" >
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
      <van-cell title="责任人" value="请选择" center>
        <template #right-icon>
          <van-icon
            name="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8d952b79166d63d6-6eda-4a97-8409-f7750b127b34"
            style="margin-left:5px"
          />
        </template>
      </van-cell>
      <van-cell title="截止时间" value="6月25日 星期六 10:00" is-link />
    </van-cell-group>
    <div class="more">
      <div>更多<van-icon name="arrow-down" style="margin-left:5px;" color="#969799" /></div>
    </div>
    <van-cell-group v-show="true">
      <van-cell title="程度" value="请选择" is-link />
      <van-cell title="开始时间" value="6月25日 星期六 10:00" is-link />
      <van-cell title="抄送人" value="请选择" center>
        <template #right-icon>
          <van-icon
            name="https://lanhu.oss-cn-beijing.aliyuncs.com/ps8d952b79166d63d6-6eda-4a97-8409-f7750b127b34"
            style="margin-left:5px"
          />
        </template>
      </van-cell>
      <van-cell title="提醒" value="截止前15分钟前" is-link />
      <van-cell title="部门" value="请选择" is-link />
      <van-cell title="类别" value="请选择" is-link />
    </van-cell-group>
    <van-row style="text-align:center">
      <van-col span="6" offset="6" >
        <van-button type="info" size="small">暂 存</van-button>
      </van-col>
      <van-col span="6">
        <van-button type="default" size="small">取 消</van-button>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Field, CellGroup, Cell, Row, Col, Image, Icon,Button } from 'vant'
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
  },
  data() {
    return {
      value: ''
    }
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
  /deep/ .van-button{
    padding: 0 20px;
  }
}
</style>
