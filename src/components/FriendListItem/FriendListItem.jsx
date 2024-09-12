import styles from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ friend }) {
    return (
        <li className={styles.item} key={friend.id}>
                    
            <img
                className={styles.avatar}
                src={friend.avatar}
                alt="User avatar"
                width="48"
            />
            <p className={styles.name}>{friend.name}</p>

            <p className={clsx(styles.xline, friend.isOnline ? styles.online : styles.offline)}>{friend.isOnline ? 'Online' : "Offline"}</p>
        </li>)
}