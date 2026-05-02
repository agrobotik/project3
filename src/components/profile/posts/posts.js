import Post from './post/post';
import React from 'react';


let post_text = React.createRef();


function Posts({ posts, add_post, on_post_change }) {

    let get_post = () => {
        add_post(post_text.current.value);
        post_text.current.value = "";

    }

    let on_change = () => {
        on_post_change(post_text.current.value);
        console.log("on_change");

    }

    return (
        <div className='profile__posts'>
            <div className='profile__add-post-container'>
                <input type='text' placeholder='Enter the post' value={posts.new_post_text} className='profile-posts__input' ref={post_text} onChange={on_change} />
                <button className='profile-posts__add-post' onClick={get_post}>Add post</button>
            </div>
            {posts.posts.map((e, index) => <Post message={e} key={index} />)}
        </div>
    )
}

export default Posts;