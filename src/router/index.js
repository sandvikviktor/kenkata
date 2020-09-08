import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Shop from '../views/shop/Shop.vue'
import ProductDetails from '../views/shop/ProductDetails'
import ShoppingCart from '../views/checkout/ShoppingCart'
import Checkout from '../views/checkout/Checkout'

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
  }
]

const router = new VueRouter({
  routes
})

export default router
