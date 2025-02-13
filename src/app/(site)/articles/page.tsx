import { ArticlesPage } from '$/appPages/site'
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Калыс устаз тарабынан жазылган макалалар  | Макалалар",
};

const page = () => <ArticlesPage />;

export default page;
