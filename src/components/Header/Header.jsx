
import styles from './Header.module.css';
import Nav from './Nav';

function Header({ count }) { // ← добавили пропс count
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1 className={styles.title}>React Blog</h1>
          <span className={styles.count}>Статей: {count}</span> {/* ← счётчик */}
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
