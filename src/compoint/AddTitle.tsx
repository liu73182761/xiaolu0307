import React,{useState,useEffect} from 'react'
import { Button } from 'antd'
import BaseURl from '../configure/Axios'
import './AddTitle.scss'
import { useNavigate } from 'react-router-dom'

export default function AddTitle() {
const [couln,setcouln]=useState(0)
const [wei,setwei]=useState(0)
const [yi,setyi]=useState(0)
const navigate = useNavigate()
useEffect(()=>{
  // 查询待解决任务数量
  BaseURl.get('/query/c').then(res=>{
   
    const  dataarray= res.data
     for (let k  in  dataarray) {
      
      const  data = dataarray[k].count
      setcouln(data)
      console.log(data)

     }
  })
},[])
// 查询未解决任务数量
useEffect(()=>{
  // 查询待解决任务数量
  BaseURl.get('/query/d').then(res=>{
  

    const  dataarray= res.data
    console.log(dataarray)
     for (let k  in  dataarray) {
      
      const  data = dataarray[k].count
      setwei(data)

     }
  })
},[])

// 查询已经决任务数量
useEffect(()=>{
  // 查询待解决任务数量
  BaseURl.get('/query/y').then(res=>{
 
    const  dataarray= res.data
     for (let k  in  dataarray) {
      
      const  data = dataarray[k].count
      setyi(data)

     }
  })
},[])
const Add = ()=>{
  navigate('/addlist')  // 跳转到添加任务页面
}
  return (
  
    <div className='containt'>
        <Button type="primary" onClick={Add}>添加</Button>
        <h1>待解决{couln}条</h1>
        <h1>未解决{wei}条</h1>
        <h1>已解决{yi}条</h1>
    </div>
   
  )
}
