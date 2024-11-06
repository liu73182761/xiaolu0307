import React, { useEffect } from 'react'
import {Button, message}from 'antd'
import BaseURl from '../configure/Axios'
export default function Del(delid:{delid:number}) {
  console.log(delid.delid)
  const deliddata=()=>{
    BaseURl.get(`/del/${delid.delid}`).then(res=>{
      console.log(res)
      message.info("删除成功")
      window.location.reload()
    })
  } 
 
  return (
    <div>
        <Button onClick={deliddata} type="primary">删除</Button>
    </div>
  )
}
