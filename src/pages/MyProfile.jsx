import User from "../components/user/User";

const MyProfile = () => {
  return (
    <div className="my_profile-container">
      <User
        photo="https://img.freepik.com/free-photo/little-grey-kitten-with-blue-eyes-lies-on-the-grey-couch_8353-7261.jpg"
        name="yamie"
        alt="daYa"
      />
      <div className="post-container">
        <img
          className="post-photo"
          src="https://img.freepik.com/free-photo/little-grey-kitten-with-blue-eyes-lies-on-the-grey-couch_8353-7261.jpg"
          alt="daYa"
        />
        <span>Vsem privet, eto ya</span>
      </div>
    </div>
  );
};

export default MyProfile;
