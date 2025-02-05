import React from "react";
import { articles } from "../../constants/articles.constants";
import { ArticleItem } from "../article-item/ArticleItem";
import styles from "./ArticlesList.module.scss";
export const ArticlesList: React.FC = () => {
  return (
    <div className={styles.articles_list}>
      {articles.map((art) => (
        <ArticleItem key={art.id} item={art} />
      ))}
    </div>
  );
};
