import { Input } from 'antd'
import { useState } from 'react'
import styled from 'styled-components'
import * as dayjs from 'dayjs'
// styles
const inputStyle = {
  width: 120,
  margin: '0 10px'
}

const FormItem = styled.div`
  margin-bottom: 10px;
`

// functions
function getMileSecondFromHour(hours: number): number {
  return hours * 60 * 60 * 1000
}

function getFormatStringOfDate(date: Date): string {
  // dayjs教程：https://dayjs.gitee.io/docs/zh-CN/display/format
  return dayjs(date).format('YY 年 MM 月 DD 日-HH 时 mm 分')
}

function getFinishTime(hours: number): string {
  // js时间操作：https://www.cnblogs.com/carekee/articles/1678041.html
  const elapsedTime = getMileSecondFromHour(hours)
  const curTime = new Date().getTime()
  const retTime = curTime + elapsedTime
  const retDate = new Date()
  retDate.setTime(retTime)
  return getFormatStringOfDate(retDate)
}

export default function BreadItem() {
  const [time1, setTime1] = useState(0)
  const [time2, setTime2] = useState(0)
  const curDate = new Date()
  return (
    <div>
      <div style={{ marginBottom: 10 }}>编辑菜谱:</div>
      <div style={{ marginBottom: 10 }}>
        当前时间：{getFormatStringOfDate(curDate)}
      </div>
      <FormItem>
        <span>输入酵头发酵时间: </span>
        <Input
          style={inputStyle}
          value={time1}
          onChange={(e) => setTime1(+e.target.value)}
        />
        <span>酵头预计发酵完成时间: </span>
        <span>{getFinishTime(time1)}</span>
      </FormItem>
      <FormItem>
        <span>输入面团发酵时间: </span>
        <Input
          style={inputStyle}
          value={time2}
          onChange={(e) => setTime2(+e.target.value)}
        />
        <span>面团预计发酵完成时间: </span>
        <span>{getFinishTime(time2)}</span>
      </FormItem>
      <FormItem>
        <span>总共预计发酵完成时间：</span>
        <span>{getFinishTime(time1 + time2)}</span>
      </FormItem>
    </div>
  )
}
