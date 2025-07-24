export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Michael_Lee_Resume.pdf","data/CALIFORNIA.csv","data/MilwaukeeSchoolDistrictWISCONSIN.csv","data/bry_age.csv","data/chicklet.R","data/data_heatmap.csv","data/data_heatmap2.csv","data/esrbyear.csv","data/gameRushingData.rdata","data/gameRushingData2.rdata","data/gameRushingData3.rdata","data/gameRushingData4.rdata","data/gameRushingData5.rdata","data/narrows.Rdata","data/social.toml","data/stateName.csv","data/yearRushingData.rdata","favicon.ico","favicon.png","fonts/Bitter-Bold.otf","fonts/Bitter-Bold.ttf","fonts/Bitter-BoldItalic.otf","fonts/Bitter-ExtraBold.ttf","fonts/Bitter-Italic.otf","fonts/Bitter-Italic.ttf","fonts/Bitter-Medium.ttf","fonts/Bitter-Regular.otf","fonts/Bitter-Regular.ttf","fonts/OFL.txt","fonts/README.txt","fonts/open-sans-v34-latin-300.eot","fonts/open-sans-v34-latin-300.svg","fonts/open-sans-v34-latin-300.ttf","fonts/open-sans-v34-latin-300.woff","fonts/open-sans-v34-latin-300.woff2","fonts/open-sans-v34-latin-300italic.eot","fonts/open-sans-v34-latin-300italic.svg","fonts/open-sans-v34-latin-300italic.ttf","fonts/open-sans-v34-latin-300italic.woff","fonts/open-sans-v34-latin-300italic.woff2","fonts/open-sans-v34-latin-500.eot","fonts/open-sans-v34-latin-500.svg","fonts/open-sans-v34-latin-500.ttf","fonts/open-sans-v34-latin-500.woff","fonts/open-sans-v34-latin-500.woff2","fonts/open-sans-v34-latin-500italic.eot","fonts/open-sans-v34-latin-500italic.svg","fonts/open-sans-v34-latin-500italic.ttf","fonts/open-sans-v34-latin-500italic.woff","fonts/open-sans-v34-latin-500italic.woff2","fonts/open-sans-v34-latin-600.eot","fonts/open-sans-v34-latin-600.svg","fonts/open-sans-v34-latin-600.ttf","fonts/open-sans-v34-latin-600.woff","fonts/open-sans-v34-latin-600.woff2","fonts/open-sans-v34-latin-600italic.eot","fonts/open-sans-v34-latin-600italic.svg","fonts/open-sans-v34-latin-600italic.ttf","fonts/open-sans-v34-latin-600italic.woff","fonts/open-sans-v34-latin-600italic.woff2","fonts/open-sans-v34-latin-700.eot","fonts/open-sans-v34-latin-700.svg","fonts/open-sans-v34-latin-700.ttf","fonts/open-sans-v34-latin-700.woff","fonts/open-sans-v34-latin-700.woff2","fonts/open-sans-v34-latin-700italic.eot","fonts/open-sans-v34-latin-700italic.svg","fonts/open-sans-v34-latin-700italic.ttf","fonts/open-sans-v34-latin-700italic.woff","fonts/open-sans-v34-latin-700italic.woff2","fonts/open-sans-v34-latin-800.eot","fonts/open-sans-v34-latin-800.svg","fonts/open-sans-v34-latin-800.ttf","fonts/open-sans-v34-latin-800.woff","fonts/open-sans-v34-latin-800.woff2","fonts/open-sans-v34-latin-800italic.eot","fonts/open-sans-v34-latin-800italic.svg","fonts/open-sans-v34-latin-800italic.ttf","fonts/open-sans-v34-latin-800italic.woff","fonts/open-sans-v34-latin-800italic.woff2","fonts/open-sans-v34-latin-italic.eot","fonts/open-sans-v34-latin-italic.svg","fonts/open-sans-v34-latin-italic.ttf","fonts/open-sans-v34-latin-italic.woff","fonts/open-sans-v34-latin-italic.woff2","fonts/open-sans-v34-latin-regular.eot","fonts/open-sans-v34-latin-regular.svg","fonts/open-sans-v34-latin-regular.ttf","fonts/open-sans-v34-latin-regular.woff","fonts/open-sans-v34-latin-regular.woff2","fonts/static/Bitter-Black.ttf","fonts/static/Bitter-BlackItalic.ttf","fonts/static/Bitter-Bold.ttf","fonts/static/Bitter-BoldItalic.ttf","fonts/static/Bitter-ExtraBold.ttf","fonts/static/Bitter-ExtraBoldItalic.ttf","fonts/static/Bitter-ExtraLight.ttf","fonts/static/Bitter-ExtraLightItalic.ttf","fonts/static/Bitter-Italic.ttf","fonts/static/Bitter-Light.ttf","fonts/static/Bitter-LightItalic.ttf","fonts/static/Bitter-Medium.ttf","fonts/static/Bitter-MediumItalic.ttf","fonts/static/Bitter-Regular.ttf","fonts/static/Bitter-SemiBold.ttf","fonts/static/Bitter-SemiBoldItalic.ttf","fonts/static/Bitter-Thin.ttf","fonts/static/Bitter-ThinItalic.ttf","images/icons/logo.png","images/icons/logoInvert.png","images/icons/shuffle.svg","img/153015thStreet.png","img/2020-04-01_14:22:17.png","img/3737314319_23e57f7dc8_c.jpg","img/3738060962_4eec2f1297_c.jpg","img/3738111976_c2de9968cf_c.jpg","img/3739013972_eac1be384d_c.jpg","img/404-southpark.jpg","img/ALReport.pdf","img/Animation/Lovelock_Elementary_School.pdf","img/Animation/SmithValleySchoolsElementary56.pdf","img/Animation/barChartEducational_Attainment.gif","img/Animation/barChartGender_Earnings2019.gif","img/Animation/barChartGender_Earnings2020.gif","img/Animation/barChartLoans_Debt.gif","img/Animation/barChartRaceK12Percent.gif","img/Animation/barChartRacePostSec.gif","img/Animation/barChart_Loans.gif","img/Animation/barState_Expenditure.gif","img/Animation/charter_State.gif","img/Animation/gganimate_measles.gif","img/Animation/hexBackground.gif","img/Animation/install-steps.gif","img/Animation/lineBullyingUpdateTall.gif","img/Animation/lineCollegeEnrollment.gif","img/Animation/lineCollegeEnrollment2020.gif","img/Animation/lineCompletionTall.gif","img/Animation/lineCrimesTall.gif","img/Animation/lineEarningsProgram.gif","img/Animation/lineEducationGridDoctorate.gif","img/Animation/lineEducationGridMasters.gif","img/Animation/lineEducationLoans.gif","img/Animation/lineSchool_Revenue.gif","img/Animation/lineStatusDropoutRateTall.gif","img/Animation/line_Bachelors.gif","img/Animation/line_Expenditures.gif","img/Animation/line_High_School.gif","img/Animation/line_graph_bullying.gif","img/Animation/line_pupil.gif","img/Animation/mapGraduation_Rate.gif","img/Animation/mapGraduation_Rate2020.gif","img/Animation/map_ELL_Color2019.gif","img/Animation/map_ELL_Color2020.gif","img/Animation/measlesCarto.gif","img/Animation/measlesCartogram.gif","img/Animation/measlesCompress.gif","img/Animation/measlesCompressed.gif","img/Animation/narrowsLargeTall.gif","img/Animation/public_Enrollment.gif","img/Animation/tx_Housing.gif","img/ES.pdf","img/Figure1.png","img/Figure2.png","img/Figure3.png","img/Figure4.png","img/Figure5.png","img/Lovelock_Elementary_School.pdf","img/NAEP.png","img/PresidentialElectionResultsbyUrbanArea-1.png","img/SAAM-1970.324_1_screen.jpg","img/SAAM-1976.140.1_1_screen.jpg","img/SAAM-1978.40.1_1_screen.jpg","img/SAAM-1978.40.3_2_screen.jpg","img/SAAM-1978.40.4_1_screen.jpg","img/SAAM-1980.36.12_1_screen.jpg","img/SAAM-1980.36.7_2_screen.jpg","img/SmithValleySchoolsElementary56.pdf","img/Thomas_PR_09_Clown.jpg","img/WisconsinMinnesota.png","img/WisconsinPresidentialElectionResultsBarChart-1.png","img/WisconsinPresidentialElectionResultsbyCounty-1.png","img/WisconsinandMinnesotaPresidentialElectionResultsbyCounty-1.png","img/WisconsinbyCounty.png","img/about.png","img/aboutInvert.png","img/alReport.png","img/almaRealist1.jpg","img/almaRealist2.jpg","img/apps.png","img/appsInvert.png","img/avatar-favicon.png","img/avatar-icon.png","img/barChartEducational_Attainment.png","img/barChartGender_Earnings2019.png","img/barChartGender_Earnings2020.png","img/barChartLoans_Debt.png","img/barChartRaceK12Percent.png","img/barChartRacePostSec.png","img/barChartRaceState.mp4","img/barChartRaceState.png","img/barChart_Loans.png","img/barState_Expenditure.png","img/blastOff.jpg","img/bryant.jpg","img/bryant2.jpg","img/cartoons/a.jpeg","img/cartoons/air.jpeg","img/cartoons/amishFarm.jpeg","img/cartoons/ant.jpeg","img/cartoons/authentic.jpeg","img/cartoons/babies.jpeg","img/cartoons/balloon.jpeg","img/cartoons/bee.jpeg","img/cartoons/bikeTherapist.jpeg","img/cartoons/bleary.jpeg","img/cartoons/bodybuilding.jpeg","img/cartoons/breaking.jpeg","img/cartoons/broadway.jpeg","img/cartoons/cabbages.jpeg","img/cartoons/camping.jpeg","img/cartoons/chandelier.jpg","img/cartoons/check.jpeg","img/cartoons/chimpanzees.jpeg","img/cartoons/classic.jpeg","img/cartoons/clear.jpeg","img/cartoons/cone.jpeg","img/cartoons/cozy.jpeg","img/cartoons/crane.jpeg","img/cartoons/curb.jpeg","img/cartoons/delegation.jpeg","img/cartoons/demons.jpeg","img/cartoons/dishrags.jpeg","img/cartoons/ducklings.jpeg","img/cartoons/ducky.jpeg","img/cartoons/email.jpeg","img/cartoons/enoughGood.jpeg","img/cartoons/estate.jpeg","img/cartoons/fish.jpeg","img/cartoons/fitting.jpeg","img/cartoons/follow.jpeg","img/cartoons/fridge.jpeg","img/cartoons/friendly.jpeg","img/cartoons/gallery.jpeg","img/cartoons/gamenight.jpeg","img/cartoons/gamges.jpeg","img/cartoons/glow.jpg","img/cartoons/gnomes.jpeg","img/cartoons/hammer.jpeg","img/cartoons/highway.jpeg","img/cartoons/ice.jpeg","img/cartoons/jane.jpeg","img/cartoons/labor.jpeg","img/cartoons/lightbulb.jpeg","img/cartoons/limited.jpeg","img/cartoons/looking.jpeg","img/cartoons/loss.jpeg","img/cartoons/management.jpeg","img/cartoons/martins.jpeg","img/cartoons/mattress.jpg","img/cartoons/mice.jpeg","img/cartoons/mirror.jpg","img/cartoons/moustache.jpeg","img/cartoons/mrBee.jpeg","img/cartoons/muzzle.jpeg","img/cartoons/nest.jpg","img/cartoons/next.jpeg","img/cartoons/ope.jpeg","img/cartoons/owl.jpeg","img/cartoons/performanceArtist.jpeg","img/cartoons/piano.jpeg","img/cartoons/pickle.jpeg","img/cartoons/pullover.jpeg","img/cartoons/queasy.jpeg","img/cartoons/racoon.jpeg","img/cartoons/ramp.jpeg","img/cartoons/report.jpeg","img/cartoons/scrapers.jpeg","img/cartoons/shades.jpeg","img/cartoons/shark.jpg","img/cartoons/sheep.jpeg","img/cartoons/shoe.jpeg","img/cartoons/shots.jpeg","img/cartoons/singlesNight.jpeg","img/cartoons/soda.jpeg","img/cartoons/sorry.jpeg","img/cartoons/squadron.jpeg","img/cartoons/suits.jpeg","img/cartoons/text.jpeg","img/cartoons/thaw.jpeg","img/cartoons/thermostat.jpeg","img/cartoons/toes.jpeg","img/cartoons/training.jpeg","img/cartoons/trash.jpeg","img/cartoons/trees.jpeg","img/cartoons/tube.jpeg","img/cartoons/tupped.jpeg","img/cartoons/urgentCare.jpeg","img/cartoons/view.jpeg","img/cartoons/watching.jpeg","img/cartoons/weight.jpg","img/cartoons/what.jpeg","img/cartoons/wildflowers.jpeg","img/cartoons/younger.jpeg","img/cartoons/zoo.jpeg","img/cartoons.png","img/cartoonsInvert.png","img/cc.jpeg","img/cflOriginal.gif","img/cflShell.gif","img/cflShell.pdf","img/charter_State.png","img/chicklet538.png","img/cmsd.png","img/county.jpg","img/cover.png","img/dailyApril.png","img/diversity.png","img/draft_odds.png","img/draft_odds_team.png","img/drilldown-1.png","img/edsurvey.png","img/ellipsis.png","img/ellipsis@2x.png","img/favicon.ico","img/gamerank.png","img/games_by_genre.png","img/games_by_theme.png","img/genre_interactive.png","img/gg-1.png","img/gg.png","img/gganimate_measles.png","img/ghostbusters.gif","img/hex.png","img/hexBackground.png","img/hexGridWisconsin.png","img/hexWI.png","img/hexWIVoteCount.png","img/hexagon-thumb.jpg","img/hexagon.jpg","img/hexgridwithsf-1.png","img/icils.png","img/icils2.png","img/icils3.png","img/icils4.png","img/install-steps.png","img/jTaylor.jpg","img/jekyll-blog.jpg","img/leeAnimation.mp4","img/leeAnimation.webm","img/lineBullyingUpdateTall.png","img/lineCollegeEnrollment.png","img/lineCollegeEnrollment2020.png","img/lineCompletionTall.png","img/lineCrimesTall.png","img/lineEarningsProgram.png","img/lineEducationGridDoctorate.png","img/lineEducationGridMasters.png","img/lineEducationLoans.png","img/lineSchool_Revenue.png","img/lineStatusDropoutRateTall.png","img/line_Bachelors.png","img/line_Expenditures.png","img/line_High_School.png","img/line_graph_bullying.png","img/line_pupil.png","img/mapGraduation_Rate.png","img/mapGraduation_Rate2020.png","img/map_ELL_Color2019.png","img/map_ELL_Color2020.png","img/marchOnWashington.jpg","img/mean_game_ranking_2d.jpeg","img/mean_game_ranking_2d.png","img/meanranking.jpg","img/measles.png","img/measlesCarto.png","img/measlesCartogram.png","img/measlesCompress.png","img/measlesCompressed.png","img/measlesReplication.png","img/michael.png","img/midwestPlot.png","img/midwestPlot2.png","img/midwestPlotDefaultAlignment.png","img/midwestPlotDefaultAlignment2.png","img/midwestPlotLeftAligned.png","img/midwestPlotLeftAlignedAxisText.png","img/midwestPlotLegend.png","img/mikeAtNASA.png","img/minors_batting_ARI.jpg","img/narrows.jpg","img/narrowsLargeTall.png","img/ncesAnimation.png","img/nevada.png","img/nevadaOriginal.gif","img/nevadaShell.gif","img/orig538.png","img/path.jpg","img/percCovid.png","img/pisa.png","img/posts.png","img/postsInvert.png","img/profile.jpg","img/public_Enrollment.png","img/rampage.jpg","img/rmarkdown.png","img/scatterPlotting-1.png","img/skeletonplot-1.png","img/sphere-thumb.jpg","img/sphere.jpg","img/squareGridWisconsin.png","img/squareWI.png","img/squareWIVoteCount.png","img/sys_time_MiLB.jpg","img/talis.png","img/theme_interactive.png","img/tigrisshapefile-1.png","img/timss.png","img/triangle-thumb.jpg","img/triangle.jpg","img/txHousing.png","img/tx_Housing.png","img/unnamed-chunk-4-1.png","img/wiHexPlot.png","img/wisconsinVotes-1.png","link.svg","robots.txt"]),
	mimeTypes: {".pdf":"application/pdf",".csv":"text/csv",".toml":"application/toml",".png":"image/png",".otf":"font/otf",".ttf":"font/ttf",".txt":"text/plain",".svg":"image/svg+xml",".woff":"font/woff",".woff2":"font/woff2",".jpg":"image/jpeg",".gif":"image/gif",".mp4":"video/mp4",".jpeg":"image/jpeg",".webm":"video/webm"},
	_: {
		client: {start:"_app/immutable/entry/start.C7MDKfb-.js",app:"_app/immutable/entry/app.4uok-sWf.js",imports:["_app/immutable/entry/start.C7MDKfb-.js","_app/immutable/chunks/B_MgHUdH.js","_app/immutable/chunks/DedTd7GD.js","_app/immutable/chunks/DtO-chcV.js","_app/immutable/chunks/CxcT2ZgC.js","_app/immutable/chunks/DIh3MrjY.js","_app/immutable/chunks/iI_LtpKd.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/entry/app.4uok-sWf.js","_app/immutable/chunks/DSTt_Jla.js","_app/immutable/chunks/DtO-chcV.js","_app/immutable/chunks/CxcT2ZgC.js","_app/immutable/chunks/DIh3MrjY.js","_app/immutable/chunks/CvMqxeUd.js","_app/immutable/chunks/DedTd7GD.js","_app/immutable/chunks/iI_LtpKd.js","_app/immutable/chunks/XohKt3TT.js","_app/immutable/chunks/B6Ey4jMJ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js')),
			__memo(() => import('./nodes/10.js')),
			__memo(() => import('./nodes/11.js')),
			__memo(() => import('./nodes/12.js')),
			__memo(() => import('./nodes/13.js')),
			__memo(() => import('./nodes/14.js')),
			__memo(() => import('./nodes/15.js')),
			__memo(() => import('./nodes/16.js')),
			__memo(() => import('./nodes/17.js')),
			__memo(() => import('./nodes/18.js')),
			__memo(() => import('./nodes/19.js')),
			__memo(() => import('./nodes/20.js')),
			__memo(() => import('./nodes/21.js')),
			__memo(() => import('./nodes/22.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/animation.json",
				pattern: /^\/animation\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/animation.json/_server.js'))
			},
			{
				id: "/animation",
				pattern: /^\/animation\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/animation/animation.json",
				pattern: /^\/animation\/animation\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/animation/animation.json/_server.js'))
			},
			{
				id: "/animation/[animation]",
				pattern: /^\/animation\/([^/]+?)\/?$/,
				params: [{"name":"animation","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,3,], errors: [1,,,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/apps",
				pattern: /^\/apps\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			},
			{
				id: "/cartoons",
				pattern: /^\/cartoons\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 14 },
				endpoint: null
			},
			{
				id: "/cartoons/[cartoons]",
				pattern: /^\/cartoons\/([^/]+?)\/?$/,
				params: [{"name":"cartoons","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 15 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 16 },
				endpoint: null
			},
			{
				id: "/license",
				pattern: /^\/license\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 17 },
				endpoint: null
			},
			{
				id: "/posts.json",
				pattern: /^\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/posts.json/_server.js'))
			},
			{
				id: "/posts",
				pattern: /^\/posts\/?$/,
				params: [],
				page: { layouts: [0,4,], errors: [1,,], leaf: 18 },
				endpoint: null
			},
			{
				id: "/posts/posts.json",
				pattern: /^\/posts\/posts\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/posts/posts.json/_server.js'))
			},
			{
				id: "/posts/[posts]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"posts","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,4,5,], errors: [1,,,], leaf: 19 },
				endpoint: null
			},
			{
				id: "/projects.json",
				pattern: /^\/projects\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/projects.json/_server.js'))
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,6,], errors: [1,,], leaf: 20 },
				endpoint: null
			},
			{
				id: "/projects/projects.json",
				pattern: /^\/projects\/projects\.json\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/projects/projects.json/_server.js'))
			},
			{
				id: "/projects/[projects]",
				pattern: /^\/projects\/([^/]+?)\/?$/,
				params: [{"name":"projects","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,6,7,], errors: [1,,,], leaf: 21 },
				endpoint: null
			},
			{
				id: "/resume",
				pattern: /^\/resume\/?$/,
				params: [],
				page: { layouts: [0,8,], errors: [1,,], leaf: 22 },
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
