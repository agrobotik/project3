import Post from './post/post';

function Posts() {
    return (
        <div className='profile__posts'>
            <div className='profile__add-post-container'>
                <input type='text' placeholder='Enter the post' className='profile-posts__input' />
                <button className='profile-posts__add-post'>Add post</button>
            </div>
            <Post message="Hi my name is Stepan. I'm a programmer from Germany. Please give me a big salary, 100k+ Euros" />
            <Post message="Hello" />
        </div>
    )
}

export default Posts;