import React from "react";
import { articles } from "../../constants/articles.constants";
import { ArticleItem } from "../article-item/ArticleItem";
import styles from "./ArticlesList.module.scss";
export const ArticlesList: React.FC = () => {
<<<<<<< HEAD
  return (
    <div className={styles.articles_list}>
      {articles.map((art) => (
        <ArticleItem key={art.id} item={art} />
      ))}
    </div>
  );
=======
	return (
		<div className={styles.articles_list}>
			{articles.map(art => (
				<ArticleItem key={art.id} item={art} />
			))}
		</div>
	);
>>>>>>> c24b04ba3e37f9367ec04a0b518cfee8729300b2
};
