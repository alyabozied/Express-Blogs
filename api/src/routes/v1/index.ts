import express from 'express'
// const authRoute = require('./auth.route');
import {userRoute} from './user.route';
// const docsRoute = require('./docs.route');
// const config = require('../../config/config');

const V1Router = express.Router();

const defaultRoutes = [
//   {
//     path: '/auth',
//     route: authRoute,
//   },
  {
    path: '/users',
    route: userRoute,
  },
];

// const devRoutes = [
//   // routes available only in development mode
//   {
//     path: '/docs',
//     route: docsRoute,
//   },
// ];

defaultRoutes.forEach((route) => {
  V1Router.use(route.path, route.route);
});

/* istanbul ignore next */
// if (config.env === 'development') {
//   devRoutes.forEach((route) => {
//     router.use(route.path, route.route);
//   });
// }

export default V1Router;
