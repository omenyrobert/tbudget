import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Savings from '../views/Savings.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Withdraws from '../views/Withdraws.vue'
import Loans from '../views/Loans.vue'
import LoanInstallments from '../views/LoanInstallments.vue'
import Referrals from '../views/Referrals.vue'
import AllienciesList from '../views/AllienciesList.vue'
import AddAlliencies from '../views/AddAlliencies.vue'

Vue.use(VueRouter)

const  routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/savings',
      name: 'Savings',
      component: Savings
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/withdraws',
      name: 'Withdraws',
      component: Withdraws
    },
    {
      path: '/loans',
      name: 'Loans',
      component: Loans
    },
    {
      path: '/loan-installments',
      name: 'LoanInstallments',
      component: LoanInstallments
    },
    {
      path: '/referrals',
      name: 'Referrals',
      component: Referrals
    },
    {
      path: '/alliencies-list',
      name: 'AllienciesList',
      component: AllienciesList
    },
    {
      path: '/add-alliencies',
      name: 'AddAlliencies',
      component: AddAlliencies
    }
]

const router = new VueRouter({
  routes
})


export default router