import Breadcrumb from "$/shared/ui/breadcrumb/Breadcrumb";
import React from "react";

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
      </section>
    </main>
  );
};

export default ArticlesPage;
