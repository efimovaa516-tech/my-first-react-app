import styles from './App.module.css';
import Header from './components/Header/Header';
import ArticleList from './components/ArticleList/ArticleList';
import articles from './data/articles'; // ← импорт данных!

function App() {
  return (
    <div className={styles.app}>
      <Header count={articles.length} /> {/* ← передаём количество! */}
      <main>
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
