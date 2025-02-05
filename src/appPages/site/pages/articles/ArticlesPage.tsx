import Breadcrumb from "$/shared/ui/breadcrumb/Breadcrumb";
import React from "react";
import Filtiration from "./sections/filtration/Filtiration";

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
      </section>
    </main>
  );
};

export default ArticlesPage;
