import React from "react";
import ArticleContent from "./sections/article-content/ArticleContent";
import SimilarArticles from "./sections/similar-articles/SimilarArticles";
import LatestLessons from "./sections/latest-lessons/LatestLessons";
import Filtration from "../articles/sections/filtration/Filtiration";
import { BackButton } from '$/shared/ui/back-button/BackButton'
export const ArticleDetailPage: React.FC = () => {
  return (
    <main>
      <section className={'back_section'}>
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

