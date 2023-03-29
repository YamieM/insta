import { useParams } from "react-router-dom";
//Чет не поняла, как мне именно по пользователю все вывести
const Profile = (props) => {
  const params = useParams();
  const userName = params.name;
  return (
    <main>
      <span>{userName}</span>
    </main>
  );
};

export default Profile;
