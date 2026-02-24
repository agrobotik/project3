import Post from './post/post';
import React from 'react';


let post_text = React.createRef();


function Posts({ posts, add_post }) {
    let get_post = () => {
        console.log(post_text.current.value);
        add_post(post_text.current.value);

    }

    return (
        <div className='profile__posts'>
            <div className='profile__add-post-container'>
                <input type='text' placeholder='Enter the post' className='profile-posts__input' ref={post_text} />
                <button className='profile-posts__add-post' onClick={get_post}>Add post</button>
            </div>
            {posts.posts.map((e, index) => <Post message={e} key={index} />)}
        </div>
    )
}

export default Posts;