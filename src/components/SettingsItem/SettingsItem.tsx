//-------------------------------------------------------------------< styles >
import styles from "../../styles/components/SettingsItem/SettingsItem.module.css";
//--------------------------------------------------------------------< types >
import { ReactNode } from "react";

interface SettingsItemProps {
  title: string;
  children: ReactNode;
}
//=========================================================[ < SettingsItem > ]
export default function SettingsItem({ title, children }: SettingsItemProps) {
  //-----------------------------------------------------------------< return >
  return (
    <li className={styles.container}>
      <header>{title}</header>
      {children}
    </li>
  );
}
