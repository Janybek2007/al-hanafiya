import Breadcrumb from "$/shared/ui/breadcrumb/Breadcrumb";
import React from "react";
import Filtiration from "./sections/filtration/Filtiration";
import Image from "next/image";
import SectionTitle from "$/shared/ui/section-title/SectionTitle";
import scss from "./ArticlesPage.module.scss";
import { ArticleItem } from "$/entities/articles";
import { articles } from "$/entities/articles/constants/articles.constants";

const ArticlesPage: React.FC = () => {
  return (
    <main>
      <div className="container">
        <Breadcrumb
          items={[
            { label: "Башкы бет", href: "/" },
            { label: "Макалалар", href: "#this" },
          ]}
        />

        <Filtiration />

        <SectionTitle className={scss.title} title={"Бардык макалалар"} />

        <section className={scss.article_head}>
          <ArticleItem
            className={scss.card_article}
            variant="2"
            item={{ ...articles[0], category: "Викх" }}
          />
          <div className={scss.articlesList}>
            {articles.map((article) => (
              <ArticleItem
                className={scss.card_articleList}
                type="list"
                variant="2"
                key={article.id}
                item={{ ...article, category: "Викх" }}
              />
            ))}
          </div>
        </section>

        <section>
          <div className={scss["articles"]}>
            {articles.map((art) => (
              <ArticleItem
                variant="2"
                type="list"
                key={art.id}
                item={{ ...art, category: "Викх" }}
              />
            ))}
          </div>
        </section>

        <SectionTitle className={scss.title} title={"Популярдуу макалалар"} />

        <section>
          <div className={scss["popularArticle"]}>
            {articles.map((art) => (
              <ArticleItem
                variant="1"
                type="card"
                key={art.id}
                item={{ ...art, category: "Викх" }}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ArticlesPage;
