import Home from "../views/Home.vue";
export default [
    {
		path: "/",
		name: "Home",
		component: Home,
		// meta: { index: 0, keepAlive: true },
	},
	
	{
		path: "/mine",
		name: "Mine",
		component: () => import(/* webpackChunkName: "mine" */ "@/views/Mine"),
		meta: { index: 3 },
	},
	{
		path: "/search",
		name: "Search",
		component: () =>
			import(/* webpackChunkName: "search" */ "@/views/Search"),
		meta: { index: 1, keepAlive: true },
	},
	{
		path: "/hospital/hospitallocation",
		name: "HospitalLocation",
		component: () =>
			import(
				/* webpackChunkName: "hospitallocation" */ "@/views/hospital/HospitalLocation"
			),
	},



]