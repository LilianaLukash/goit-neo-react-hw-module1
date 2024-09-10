import styles from './FriendList.module.css';
import clsx from 'clsx';
export default function FriendList({ friends }) {
    return (
        <ul className={styles.friendList}>
            {friends.map(friend => (
                <li className={styles.item} key={friend.id}>
                    
                    <img
                        className={styles.avatar}
                        src={friend.avatar}
                        alt="User avatar"
                        width="48"
                    />
                    <p className={styles.name}>{friend.name}</p>

                    <p className={clsx ( styles.xline, friend.isOnline? styles.online : styles.offline)}>{friend.isOnline ? 'Online' : "Offline"}</p>
                </li>
            ))}
        </ul>
    );
}
