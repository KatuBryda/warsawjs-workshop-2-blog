

import routie from 'libs/routie.js';

//import {AboutComponent} from '../components/about.component.js';

let $page = document.getElementById('page');
let $aboutTemplate = document.getElementById('template-about').innerHTML;

routie('o-mnie', controller);

export function controller() {
		$page.innerHTML = Mustache.render($aboutTemplate, {name: 'name moje resre'});
		}