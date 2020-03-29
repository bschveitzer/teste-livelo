import Home from './pages/home/Home.vue';
import UserProfile from './pages/user/UserProfile.vue'
import BsRepos from './components/BsRepos.vue'
import BsStarred from './components/BsStarred.vue'

export default [
  {
    name: 'Home', 
    path: '/',
    component: Home
  },
  {
    name: 'UserProfile', 
    path: '/user/:username',
    component: UserProfile,
    children: [
      {
        path: 'repos',
        component: BsRepos
      },
      {
        path: 'starred',
        component: BsStarred
      }
    ]
  },
];
