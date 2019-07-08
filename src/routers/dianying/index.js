export default{
    path:"/dianying",
    component:()=>import('@/views/dianying'),
    children: [
        {path:'dianwei',component:()=>import('@/views/dingwei')},
        {path:'dianzheng',component:()=>import('@/views/dianzheng')},
        {path:'dianjijiang',component:()=>import('@/views/dianjijiang')},
        {path:'dianserch',component:()=>import('@/views/dianserch')},
        {path:'/dianying',component:()=>import('@/views/dianzheng')},
    ]
}