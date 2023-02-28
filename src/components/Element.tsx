import styles from "./element.module.css";
import Link from "next/link";

interface ElementProps {
  children?: React.ReactNode;
  name: string;
  selfClosing?: boolean;
  attribute?: [string, string];
  comment?: string;
  link?: string;
}

export default function Element({
  children,
  name,
  attribute,
  comment,
  link,
  selfClosing = false,
}: ElementProps) {
  const element = (
    <>
      <p className={styles.element}>
        {"<" + name}
        {attribute && (
          <>
            {" "}
            <span>{attribute[0]}</span>
            {"="}
            <span>{'"' + attribute[1] + '"'}</span>
          </>
        )}
        {selfClosing ? " />" : ">"}
        {comment && <span className={styles.comment}>{"// " + comment}</span>}
      </p>
      {children ? <div className={styles.tab}>{children}</div> : undefined}
      {!selfClosing && <p className={styles.element}>{`</${name}>`}</p>}
    </>
  );
  if (link)
    return (
      <Link href={link} target={link.includes("http") ? "_blank" : "_self"}>
        {element}
      </Link>
    );
  return element;
}
