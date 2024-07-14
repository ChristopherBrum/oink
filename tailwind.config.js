export const content = [
	"./app/views/**/*.html.erb",
	"./app/helpers/**/*.rb",
	"./app/assets/stylesheets/**/*.css",
	"./app/javascript/**/*.js",
];
export const theme = {
	extend: {
		fontFamily: {
			playwrite: ['"Playwrite PE"', 'cursive'],
			roboto: ['Roboto', 'sans-serif'],
		},
	},
};
