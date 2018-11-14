import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Discounts from '../components/discounts/discounts.vue'
import Goodscart from '../components/goodscart/goodscart.vue'
import Classify from '../components/classify/classify.vue'
import Mine from '../components/mine/mine.vue'
import Site from '../components/mine/site.vue'
import payment from '../components/mine/mineOrder.vue'
import Mine from '../components/mine/mine.vue' 

import Site from '../components/mine/site.vue'
import payment from '../components/mine/mineOrder.vue'
// import Mine from '../components/mine/mine.vue'
// import Mine from '../components/mine/mine.vue'
// import Mine from '../components/mine/mine.vue'
// import Mine from '../components/mine/mine.vue'



import jingx from '../components/home/content_jingx.vue'
import goodsa from '../components/home/content_goodsa.vue'
import tiaowei from '../components/home/content_tiaowei.vue'
import fushi from '../components/home/content_fushi.vue'
import xiaoshi from '../components/home/content_xiaoshi.vue'
import guoshu from '../components/home/content_guoshu.vue'

import Goodsdetail from '../components/goodsdetail/goodsdetail.vue'

// classify
import details from "../components/classify/details.vue"
import details1 from "../components/classify/details1.vue"
import details2 from "../components/classify/details2.vue"
import details3 from "../components/classify/details3.vue"
import details4 from "../components/classify/details4.vue"
import details5 from "../components/classify/details5.vue"
import details6 from "../components/classify/details6.vue"


Vue.use(Router)

const router = new Router({
	routes: [{
			path: "/",
			redirect: "/home"
		},
		{
			path: "/home",
			name: "home",
			component: Home,
			children: [{
					path: '/home/jingx',
					name: 'jingx',
					component: jingx,
				},
				{
					path: '/home/goodsa',
					name: 'goodsa',
					component: goodsa,
				},
				{
					path: '/home/tiaowei',
					name: 'tiaowei',
					component: tiaowei,
				},
				{
					path: '/home/fushi',
					name: 'fushi',
					component: fushi,
				},
				{
					path: '/home/xiaoshi',
					name: 'xiaoshi',
					component: xiaoshi,
				},
				{
					path: '/home/guoshu',
					name: 'guoshu',
					component: guoshu,
				},
			]
		},
		{
			path: "/classify",
			name: "classify",
			component: Classify,
			children: [

				{
					path: "details",
					name: "details",
					component: details,
				},
				{
					path: "details1",
					name: "details1",
					component: details1,
				},
				{
					path: "details2",
					name: "details2",
					component: details2,
				},
				{
					path: "details3",
					name: "details3",
					component: details3,
				},
				{
					path: "details4",
					name: "details4",
					component: details4,
				},
				{
					path: "details5",
					name: "details5",
					component: details5,
				},
				{
					path: "details6",
					name: "details6",
					component: details6,
				},
			]

		},
		{
			path: "/discounts",
			name: "discounts",
			component: Discounts,
		},
		{
			name: "goodscart",
			path: "/goodscart",
			component: Goodscart
		},
		{
			name: "mine",
			path: "/mine",
			component: Mine,
			children: [{
					path: "/payment",
					name: "payment",
					component: payment,
				},

				// {
				//   path: "/shipments",
				//   name:"shipments",
				//   component: shipments,

				// },
				// {
				//   path: "/receiving",
				//   name:"receiving",
				//   component: receiving,
				// }, 
				// {
				//   name:"evaluate",
				//   path: "/evaluate",
				//   component: evaluate
				// },
				// {
				//   name:"serve",
				//   path: "/serve",
				//   component: serve
				// }
			]
		},
		{
			path: "/site",
			name: "site",
			component: Site
		},
		{
			name: "goodsdetail",
			path: "/goodsdetail",
			component: Goodsdetail,
		},
		{
			//匹配所有
			path: "**",
			component: Home
		}
	]
})

export default router;