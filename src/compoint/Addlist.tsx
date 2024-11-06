import React from 'react';
import type { FormProps } from 'antd';

import { Button, Checkbox, Form, Input,message,Space } from 'antd';
import BaseURl from '../configure/Axios';
import { useNavigate } from 'react-router-dom';



const  Addlist = ()=>{
    type FieldType = {
        name?: string;
         title:string;
         content:string;
         solution:string;
         restime:string;
         status:string;
         fz:string
       
       };
       
       const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
           BaseURl.post('/add',values).then(res=>{
               console.log(res.data)
               message.info('添加任务成功')
               form.resetFields()
           })
        
       };
       const [form] = Form.useForm();
       const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
         console.log('Failed:', errorInfo);
       };
       const onReset = () => {
        form.resetFields();
      };
    const navigation =   useNavigate()
      const navigatorindex = ()=>{
     navigation('/')
      }
    return (
    <>
    <div>
        <h1 >添加任务列表</h1>
    </div>
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
form={form}
   
  >
    <Form.Item<FieldType>
      label="名字"
      name="name" >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="分组"
      name="fz" >
      <Input />
    </Form.Item>
 <Form.Item<FieldType>
      label="标题"
      name="title">
         <Input />
 </Form.Item>

 <Form.Item<FieldType>
      label="内容"
      name="content">
          <Input />
 </Form.Item>
 <Form.Item<FieldType>
      label="解决方案"
      name="solution">
          <Input />
 </Form.Item>
 <Form.Item<FieldType>
      label="解决时间"
      name="restime">
          <Input />
 </Form.Item>
 <Form.Item<FieldType>
      label="解决状态"
      name="status">
          <Input />
 </Form.Item>

   

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space>
      <Button type="primary" htmlType="submit">
添加任务
      </Button>
      <Button type="primary" onClick={onReset}>
取消
      </Button>
      <Button type="primary" onClick={navigatorindex}>
返回首页
      </Button>
      </Space>
    </Form.Item>
  </Form>
  </>
    )
}
   

  
   
export default Addlist

