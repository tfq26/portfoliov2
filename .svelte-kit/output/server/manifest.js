export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","icons/argo_logo.jpeg","images/Taufeeq1.webp","images/Taufeeq2.jpeg","images/Taufeeq3.JPG","images/Toros.webp","images/libra1.webp","images/libra2.webp","images/libra3.webp","images/pegasus1.png","images/pegasus2.png","images/pegasus3.png"]),
	mimeTypes: {".jpeg":"image/jpeg",".webp":"image/webp",".JPG":"image/jpeg",".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.3x9Sn0Y4.js",app:"_app/immutable/entry/app.B4QyR_xk.js",imports:["_app/immutable/entry/start.3x9Sn0Y4.js","_app/immutable/chunks/QL3SsBQt.js","_app/immutable/chunks/DEKDJiQ0.js","_app/immutable/entry/app.B4QyR_xk.js","_app/immutable/chunks/DEKDJiQ0.js","_app/immutable/chunks/BDFX7l2j.js","_app/immutable/chunks/C4Da4a43.js","_app/immutable/chunks/CvWt2itq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
