import Image from "next/image";
import styles from "./card.module.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

const CARD_ICONS = {
  work: WorkIcon,
  school: SchoolIcon,
  certificate: WorkspacePremiumIcon,
};
interface CardProps {
  icon: "work" | "school" | "certificate";
  title: string;
  subTitle: string;
  duration: string;
  location?: string;
  description?: string;
}
export default function Card({
  icon,
  title,
  subTitle,
  duration,
  location,
  description,
}: CardProps) {
  const Icon = CARD_ICONS[icon];
  return (
    <div className={styles.container}>
      {Icon && (
        <div className={styles.icon}>
          <Icon fontSize="inherit" />
        </div>
      )}
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subTitle}>{subTitle}</p>
        <p className={styles.info}>
          {duration}
          {location ? " | " + location : ""}
        </p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
