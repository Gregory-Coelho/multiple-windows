import styles from "../styles/Background.module.css";
import { ReactNode } from "react";

export const Background = ({ children }: { children: ReactNode }) => {
  return <div className={styles.backgroundCard}>{children}</div>;
};
