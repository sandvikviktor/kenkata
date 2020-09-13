import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Shop from '../views/shop/Shop.vue'
import ProductDetails from '../views/shop/ProductDetails'
import Wishlist from '../views/shop/Wishlist'
import Compare from '../views/shop/Compare'
import ShoppingCart from '../views/checkout/ShoppingCart'
import Checkout from '../views/checkout/Checkout'
import Account from '../views/Account'

Vue.use(VueRouter)
  const routes = [
  {
    path: '/',
    name: 'Landing',
    component: LandingPage
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  },
  {
    path: '/shop/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/wishlist',
    name: 'Wishlist',
    component: Wishlist
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare
  }
]

const router = new VueRouter({
  routes
})

export default router
