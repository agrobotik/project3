import profile_picture from '../../images/profile_picture.jpg'
import './profile.css';
import Posts from './posts/posts';

function Profile({ posts, add_post }) {
  return (
    <div className='profile'>
      <div className="profile__user">
        <img className="profile-user__img" src={profile_picture} alt="ads" />
        <h2 className='profile-user__name'>Stepan</h2>
        <p className='profile-user__bio'>Если пишешь код - ты программист, если не пишешь то не программист</p>
      </div>
      <Posts posts={posts} add_post={add_post} />

    </div>
  );
}

export default Profile;