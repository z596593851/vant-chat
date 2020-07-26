import Vue from 'vue'
import Router from 'vue-router'
import Message from './views/Message'
import Login from './views/Login'
import Friends from './views/Friends'
import Me from './views/Me'
import Chat from './views/Chat'



Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/friends',
      name: 'friends',
      component: Friends
    },
    {
      path: '/me',
      name: 'me',
      component: Me
    },
    {
      path: '/chat',
      name: 'chat',
      component: Chat
    },



  ]
})
