import './style.css';
import { getMovies } from './module/api';

getMovies()
  .then(list => {
    list.map((item) => {
        console.log(item);
    });
  })
  .catch(err => {
    console.error(err);
  });
