后端接口
http://node.dayuan0307.top:300
api接口   get
/tasklist/query  查询所有的 
/tasklist/query/c   待解决
/tasklist/query/y   未解决
/tasklist/query/d  已解决
/tasklist/query/id   根据id进行查询



添加接口
/add   post
参数如下
{
      title: '名字',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '标题',
      dataIndex: 'title',
      key: 'title',

    },
    {
        title: '内容',
        dataIndex: 'content',
        key: 'content',
      },
      {
        title: '解决方案',
        dataIndex: 'solution',
        key: 'solution',
      },
      {
        title: '解决时间',
        dataIndex: 'restime',
        key: 'restime',
        with:"50px"
      },
      {
        title: '解决状态',
        dataIndex: 'status',
        key: 'status',},
         {
        title: '分组',
        dataIndex: 'fz',
        key: 'fz',}

/删除接口
/del   get 
参数如下
id:""
编辑接口
/ed     post

id:"",
{
        title: '内容',
        dataIndex: 'content',
        key: 'content',
      },
      {
        title: '解决方案',
        dataIndex: 'solution',
        key: 'solution',
      },
      {
        title: '解决时间',
        dataIndex: 'restime',
        key: 'restime',
        with:"50px"
      },


      前端地址
      /#/  主页  带删除功能
      /#/addlist 添加任务
      /#/edestable   编辑任务   加 根据id 查看详情
     
     