function Post(props) {
    return (
        <div className='profile-posts__post'>
            <img className='profile-post__avatar' />
            <p className='profile-post__name'>Stepan</p>
            <p className='profile-post__comment'>{props.message}</p>
        </div>
    )
}

export default Post;