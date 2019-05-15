import { configure } from '@storybook/react';
// import { addParameters } from '@storybook/react';
// import { themes } from '@storybook/theming';
// import { create } from '@storybook/theming';

// const myTheme = create({
//   ...themes.light,
//   colorPrimary: '#3D1773',
//   colorSecondary: '#F2055C',
//   barSelectedColor: '#0460D9'
// })
// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}
// addParameters({
//   options: {
//     theme: myTheme,
//   },
// });

configure(loadStories, module);
