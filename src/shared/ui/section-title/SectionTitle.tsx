import React from "react";
import styles from "./SectionTitle.module.scss";
import clsx from "clsx";
import { SectionTitleProps } from "./section-title.types";
import Image from "next/image";

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  type = "col",
  className,
}) => {
  return (
    <div className={clsx(styles.title, styles[`t-${type}`], className)}>
      {type === "col" && (
        <>
          <h1>{title}</h1>
          <Image
            width={241.3}
            height={7.9}
            src="/icon/section_title_type-col.svg"
            alt="Profile Section Image"
          />
        </>
      )}
      {type === "row" && (
        <>
          <Image
            width={127.44}
            height={9.9}
            src="/icon/section_title_left_type-flex.svg"
            alt="Profile Section Image"
          />
          <h1>{title}</h1>
          <Image
            width={127.44}
            height={9.9}
            src="/icon/section_title_right_type-flex.svg"
            alt="Profile Section Image"
          />
        </>
      )}
    </div>
  );
};

export default SectionTitle;
