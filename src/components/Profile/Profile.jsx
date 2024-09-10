import styles from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.profileContainer}>
          <div>
              <div className={styles.imgthumb}>            
                <img className={styles.img}
                src={image}
                alt="User avatar"
                 />
      </div>
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span>Followers</span>
                  <span className={styles.bold}>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span className={styles.bold}>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span className={styles.bold}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}


