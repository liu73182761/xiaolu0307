import React, { useState, useEffect } from "react";
import { Button, Space, Table } from "antd";
import BaseURl from "./configure/Axios";
import type { TableColumnsType, TableProps } from "antd";
import Del from "./action/Del";
import Des from "./action/Des";
import AddTitle from "./compoint/AddTitle";
export default function App() {
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(false);
  interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }

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
      filters: [
        {
          text: "待解决",
          value: "c",
        },
        {
          text: "未解决",
          value: "y",
        },
        {
          text: "已解决",
          value: "d",
        },
      ],
      // filterSearch: true,
      onFilter: (value, record) => {
       console.log( typeof value)
       
      },
      width: "8%",
    },{
      title:"分组",
      dataIndex:"fz",
      key:"'fz"

    },
    {
      title: "操作",
      dataIndex: "action",
      key: "action",
      width: "10%",
      render: (_,id) => (
        // <Button onClick={()=>{console.log(id.id)}}>查看</Button>
        <>
        <Space>
        <Del delid={id.id}></Del>
        <Des desid={id.id}></Des>
        </Space>
       
        </>

       
      ),
     
    },
  ];

  // 查询数据
  useEffect(() => {
  const fetchdata  = ()=>{  BaseURl.get("/query")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      })}
      fetchdata();
     
  }, [reload]);
  const handleReload = () => {
    setReload(!reload); // 切换 reload 状态以触发 useEffect
  };



  return (
    <>
      <div>
        <div>
          <h1 style={{textAlign:"center",color:'red'}}>问题任务列表</h1>
          <Button type="primary" onClick={handleReload}>刷新</Button>
        </div>
        <div>
        <AddTitle></AddTitle>
        </div>
        <div>
          <Table columns={Columns} dataSource={tasks}></Table>
        </div>
      </div>
    </>
  );
}
