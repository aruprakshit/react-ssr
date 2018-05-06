import  express from 'express';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const app = express();

app.use(express.static('public'));

app.get('*', (req, resp) => {
  const store = createStore();
  
  resp.send(renderer(req));
});

app.listen(3000, () => {
  console.log("Listening on port 3000");
})

// https://react-ssr-api.herokuapp.com/
