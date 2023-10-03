import css from "./FriendList.module.css";
import FriendsListItem from "./compnents/FrindsListItem";
import friends from "../../data/friends.json";
export const FriendList = () => {
  return (
    <ul className={css.friend_list}>
      <FriendsListItem friends={friends} />
    </ul>
  );
};
