import React from 'react'
import {Button}from 'antd'
import { useNavigate } from 'react-router-dom'
export default function Des(desid:{desid:number}) {
const navigation =   useNavigate()
  const handleClick = () => {
    navigation(`/destable`, {state:desid})
  }
  return (

    <div><Button onClick={handleClick}>详细信息</Button></div>
  )
}
