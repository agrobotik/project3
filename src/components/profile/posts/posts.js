import { DATA } from '../../../data/data';
import { re_render_tree } from '../../../render';
import Post from './post/post';
import React from 'react';


let post_text = React.createRef();


function Posts({ posts, add_post }) {
    let get_post = () => {
        add_post(post_text.current.value);
        post_text.current.value = "";
    }


    return (
        <div className='profile__posts'>
            <div className='profile__add-post-container'>
                <input type='text' placeholder='Enter the post' value={posts.new_post_text} className='profile-posts__input' ref={post_text} onChange={() => {
                    posts.new_post_text = post_text.current.value;
                    re_render_tree(DATA);
                }} />
                <button className='profile-posts__add-post' onClick={get_post}>Add post</button>
            </div>
            {posts.posts.map((e, index) => <Post message={e} key={index} />)}
        </div>
    )
}

export default Posts;