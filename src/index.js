import "babel-polyfill";
import express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';
import proxy from "express-http-proxy";
import Routes from "./client/Routes";
import { matchRoutes } from "react-router-config";

const app = express();

app.use('/api', proxy('https://react-ssr-api.herokuapp.com/', {
  proxyReqOptDecorator(opts) {
    opts.headers['x-forwarded-host'] = "localhost:3000";
    return opts;
  }
}));

app.use(express.static('public'));

app.get('*', (req, resp) => {
  const store = createStore(req);
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    resp.send(renderer(req, store));
  });
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
});

// completed till 064
