import routie from 'libs/routie.js';
import {PostService} from '../services/post.service.js';
import {PostComponent} from '../components/post.component.js';

let $page = document.getElementById('page');

routie('post/:id', controller);

export function controller(id) {
    let promise = PostService.get(id)
    
    promise.then(
      post=>{
        PostComponent.render(post, $page)
    	}, 
      err=>console.error(err)
    )
}