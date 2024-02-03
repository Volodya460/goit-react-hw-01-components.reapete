import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';
export default function FriendList({ arr }) {
  return (
    <ul className={css.friendlList}>
      {arr.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
}
