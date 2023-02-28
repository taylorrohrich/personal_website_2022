import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./navbar.module.css";
const NAV_ITEMS = [
  { route: "/", label: "Home" },
  { route: "/about", label: "About" },
] as const;
export default function Navbar() {
  const router = useRouter();
  return (
    <nav className={styles.container}>
      {NAV_ITEMS.map((ni) => (
        <p key={ni.route}>
          <Link
            className={
              ni.route === router.route ? styles.navItemActive : styles.navItem
            }
            href={ni.route}
          >
            {ni.label}
          </Link>
        </p>
      ))}
    </nav>
  );
}
