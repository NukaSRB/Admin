var Vue = require('vue');

global.Sidebar = new Vue({
	el: '#main',

	data: {
		sidebarIsMinimized: false
	},

	methods: {
		toggleSidebarSize: function () {
			this.sidebarIsMinimized = !this.sidebarIsMinimized;
		}
	}
});