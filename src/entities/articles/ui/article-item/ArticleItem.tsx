import React from "react";
import { articles } from "../../constants/articles.constants";
import styles from "./ArticleItem.module.scss";
import clsx from "clsx";
import { formatDate } from "$/shared/libs/date-formatter";
import { Svg } from "$/shared/ui/svg/Svg";
import Image from "next/image";
import Link from "next/link";
type ArticleItemProps = {
  type?: "list" | "card";
  variant?: "1" | "2";
  item: (typeof articles)[number];
};

export const ArticleItem: React.FC<ArticleItemProps> = ({
  type = "card",
  item,
  variant = "1",
}) => {
  const { date, description, image_src, title, views, category } = item;
  return (
    <div
      className={clsx(
        styles.article_card,
        styles[`t-${type}`],
        styles[`v-${variant}`]
      )}
    >
      <figure>
        <Image
          width={type == "list" ? 438 : 408}
          height={type == "list" ? 223 : 238}
          src={image_src}
          alt="Article Image"
        />
      </figure>
      <div className={styles["card_content"]}>
        {category && <div className={styles["badge-category"]}>{category}</div>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>
          {description.split("").slice(0, 100).join("")}...
          <Link href="#">Читать</Link>
        </p>
        <div className={styles.row}>
          <div className={styles.row_}>
            <div className={styles.item}>
              <Svg
                className="flexCenter child"
                width={28}
                height={28}
                src={"/icon/history-outlined.svg"}
              />
              <span>{formatDate(date).timeAgo}</span>
            </div>
            <div className={styles.item}>
              <Svg
                className="flexCenter child"
                width={28}
                height={28}
                src={"/icon/view.svg"}
              />
              <span>{views}</span>
            </div>
          </div>
          <span>
            {variant === "2" ? date.split(" ")[0] : formatDate(date).DDMMYYYY}
          </span>
        </div>
      </div>
    </div>
  );
};
