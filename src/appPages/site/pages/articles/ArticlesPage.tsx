import Breadcrumb from "$/shared/ui/breadcrumb/Breadcrumb";
import React from "react";
import Filtiration from "./sections/filtration/Filtiration";
import Image from "next/image";
import SectionTitle from "$/shared/ui/section-title/SectionTitle";
import scss from "./ArticlesPage.module.scss";

const ArticlesPage: React.FC = () => {
  return (
    <main>
      <section className="container">
        <Breadcrumb
          items={[
            { label: "Башкы бет", href: "/" },
            { label: "Макалалар", href: "#this" },
          ]}
        />

        <Filtiration />

        <SectionTitle className={scss.title} title={"Бардык макалалар"} />
      </section>
    </main>
  );
};

export default ArticlesPage;
