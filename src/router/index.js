import Vue from 'vue'
import Router from 'vue-router'

const Hello=()=>import('../components/Hello');
const State=()=>import('../pages/state');
const Action=()=>import('../pages/Action');
const Mutation=()=>import('../pages/Mutation');
const Todos=()=>import('../pages/Todos');
const Modules=()=>import('../pages/Modules');
const Form1=()=>import('../pages/Form1');
const Form2=()=>import('../pages/Form2');
const FormClass=()=>import('../pages/FormClass');
const FormVuex=()=>import('../pages/FormVuex');
const UserPoints=()=>import('../pages/UserPoints');

Vue.use(Router)
export default new Router({
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    //只在history模式中设置
    return{
      x:0,
      y:0
    }
  },
  routes: [
    {path: '/', name: 'Hello', component: Hello},
    {path: '/state', component: State},
    {path: '/action', component: Action},
    {path: '/mutation', component: Mutation},
    {path: '/todos', component: Todos},
    {path: '/modules', component: Modules},
    {path: '/form1', component: Form1},
    {path: '/form2', component: Form2},
    {path: '/form3', component: FormClass},
    {path: '/formvuex', component: FormVuex},
    {path: '/userpoints', component: UserPoints}
  ]
})
