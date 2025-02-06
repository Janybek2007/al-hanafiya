import { BackButton } from "$/entities/articles";
import React from "react";
import styles from "./ArticleDetailPage.module.scss";
import ArticleContent from "./sections/article-content/ArticleContent";
import SimilarArticles from "./sections/similar-articles/SimilarArticles";
import LatestLessons from "./sections/latest-lessons/LatestLessons";
import Filtration from "../articles/sections/filtration/Filtiration";
const ArticleDetailPage: React.FC = () => {
  return (
    <main>
      <section className={styles.back_section}>
        <div className="container">
          <BackButton />
        </div>
      </section>
      <section>
        <div className="container">
          <Filtration />
        </div>
      </section>
      <ArticleContent />
      <SimilarArticles />
      <LatestLessons />
    </main>
  );
};

export default ArticleDetailPage;
