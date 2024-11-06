
import React, { useEffect, useState } from 'react'
import { Button, Form, Input, message, Space, Table } from 'antd'
import type { FormProps, TableColumnsType, TableProps } from "antd";
import { useLocation, useNavigate } from 'react-router-dom'
import BaseURl from '../configure/Axios';

export default function DesTable() {
    //定义2个状态  一个根据id传过来的数据查询的结果  一个编辑输入框的数据
    const [data,setdata]=useState("")
    const [fetchdata,setfetchdata]=useState([])
 
//  接受跳转传过来的值
    const location=  useLocation()
    const {desid}=location.state
    console.log(desid)
    //根据跳转传过来的值进行获取数据的 
    useEffect(()=>{
        BaseURl.get(`/query/${desid}`).then(res=>{
            setfetchdata(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])
//返回首页
  const navigation =   useNavigate()
  const navigatorindex = ()=>{
 navigation('/')
  }

 //声明接口
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

  //通过输入框的值 修改数据
  const editdata =()=>{
    BaseURl.post('/ed',{
        id:desid,
        status:data
    }).then(res=>{
        message.success('修改成功')
      window.location.reload()
    })
  }
//表格列的设置

  const Columns: TableColumnsType<DataType> = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      width: "2%",
    },
    {
      title: "名字",
      dataIndex: "name",
      key: "name",
      width: "7%",
    },
    {
      title: "标题",
      dataIndex: "title",
      key: "title",
      width: "17%",
    },
    {
      title: "内容",
      dataIndex: "content",
      key: "content",
      width: "37%",
    },
    {
      title: "解决方案",
      dataIndex: "solution",
      key: "solution",
    },
    {
      title: "解决时间",
      dataIndex: "restime",
      key: "restime",
      width: "6%",
    },
    {
      title: "解决状态",
      dataIndex: "status",
      key: "status",
     
      width: "8%",
    },{
      title:"分组",
      dataIndex:"fz",
      key:"'fz"

    },
    
  ];
  return (
    <div>
        <div>
            <h1 style={{textAlign:"center"}}>详细信息</h1>
        </div>
   <div>
   <Table columns={ Columns} dataSource={fetchdata}></Table>
   </div>
   <div>
  <Input style={{width:"300px"}} value={data}  onChange={(e)=>{setdata(e.target.value)}}/>
   </div>
  <div>
    <Space>
        <Button onClick={editdata}>编辑</Button>
        <Button>返回主页</Button>
    </Space>
  </div>
 
   </div>
  )
}

   
       
      
   

   
