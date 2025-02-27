// import {hello, summ, minus} from './module.js'
import * as mathFn  from './module.js'


mathFn.hello('tester');

mathFn.summ(2,3);
mathFn.minus(2,1);

// https://swapi.dev/api/

fetch('https://swapi.dev/api/people/1/')
      .then(response => response.json())
      .then(json => console.log(json))