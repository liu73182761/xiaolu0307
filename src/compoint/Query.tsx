import React,{useState,useEffect} from 'react'
import { Button, Table } from 'antd'
import BaseURl from '../configure/Axios'
import Columns from '../configure/Columns'

export default function App({key}:{key:string}) {
  console.log("dayuan",key)
  const [tasks, setTasks] = useState([])
  // 查询数据
  useEffect(()=>{
    BaseURl.get('/query').then(res=>{
      setTasks(res.data)
    }).catch(err=>{
      console.log(err)
    })

  },[])
//接受columns传过来的值然后渲染出来
  useEffect(()=>{
    BaseURl.get(`/query/${key}`).then(res=>{
      setTasks(res.data)
    }).catch(err=>{
      console.log(err)
    })

  },[])
  return (
    <>
    <div>
      <div>
        <h1>问题任务列表</h1>
      </div>
      <div>
        <h1><Button type="primary">添加</Button></h1>
      </div>
      <div>
        <Table   columns={Columns} dataSource={tasks}></Table>
      </div>
    </div>
    </>
  )
}

