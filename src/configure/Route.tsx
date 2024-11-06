//App 写一个路由表用hash模式
   import {createHashRouter}from 'react-router-dom'
   import App from '../App'
 import  Addlist  from '../compoint/Addlist'
 import DesTable from '../compoint/DesTable'
  
   const  router = createHashRouter([
      {
         path:'/',
         element:<App></App>
      },{
         path:"/addlist",
         element:<Addlist></Addlist>
      },
      {  

         path:"/destable",
         element:<DesTable></DesTable>
      }
   ])
   export default router