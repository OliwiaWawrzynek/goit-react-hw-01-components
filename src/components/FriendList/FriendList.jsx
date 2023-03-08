import friend from './friends.json';
import clsx from "clsx";

export const FriendList = () => {
    return (
            <FriendListItem />
    );
};

export const FriendListItem = () => {
    return (
        <ul className="friend-list">
            {friend.map(friend => (
                <li 
                    className={clsx(
                        "item",
                        friend.isOnline && "status"
                    )}
                    key={friend.id}>
                    <span className= "status">{friend.isOnline}</span>
                    <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
                    <p className="name">{friend.name}</p>
                </li>
            ))}
        </ul>
    );
};