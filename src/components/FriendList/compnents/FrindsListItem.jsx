import PropTypes from "prop-types";
import css from "./FriendsListItem.module.css";
const FriendsListItem = ({ friends }) => {
  return (
    <>
      {" "}
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li key={id} className={css.item}>
            <span className={css.status}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 10 10"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="5" cy="5" r="3" fill={isOnline ? "green" : "red"} />
              </svg>
            </span>
            <img
              className={css.avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </>
  );
};
FriendsListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    })
  ),
};
export default FriendsListItem;
