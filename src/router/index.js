import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

import State from '@/pages/State'
import Action from '@/pages/Action'
import Mutation from '@/pages/Mutation'
import Todos from '@/pages/Todos'
import Modules from '@/pages/Modules'
import Form1 from '@/pages/Form1'
import Form2 from '@/pages/Form2'
import FormClass from '@/pages/FormClass'
import FormVuex from '@/pages/FormVuex'
import UserPoints from '@/pages/UserPoints'
Vue.use(Router)
export default new Router({
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
