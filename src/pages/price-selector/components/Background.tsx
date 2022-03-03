import { ReactNode } from "react";
import styles from "../styles/Background.module.css";

export const Background = ({ children }: { children: ReactNode }) => {
  return <div className={styles.background}>{children}</div>;
};
