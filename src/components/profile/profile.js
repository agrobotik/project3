import profile_picture from '../../images/profile_picture.jpg'

function Profile() {
  return (
    <div className='profile'>
      <div className="profile__user">
        <img className="profile-user__img" src={profile_picture} />
        <h2 className='profile-user__name'>Stepan</h2>
        <p className='profile-user__bio'>Если пишешь код - ты программист, если не пишешь то не программист</p>
      </div>
      <div className='profile__posts'>
        <input type='text' placeholder='Enter the post' className='profile-posts__input' />
        <button className='profile-posts__add-post'>Add post</button>
        <div className='profile-posts__post'>
          <img className='profile-post__avatar' />
          <p className='profile-post__name'>Stepan</p>
          <p className='profile-post__comment'>Hi my name is Stepan. I'm a programmer from Germany. Please give me a big salary, 100k+ Euros</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;