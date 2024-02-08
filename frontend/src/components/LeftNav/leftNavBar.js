// LeftNav.js
import React, { useState } from "react";
import styles from "../../Styles/leftnav.module.css";
import LeftNavOptions from "./leftNavOptions";

const LeftNav = () => {
  const [activeOption, setActiveOption] = useState("/");

  return (
    <div className={styles.leftnav}>
      <ul className={styles.leftnavoptions}>
        {LeftNavOptions.map((option, index) => (
          <li key={index}>
            <div
              className={`leftnavoption ${option.link === activeOption ? "active" : ""}`}
              onClick={() => setActiveOption(option.link)}
            >
              <i className={`${option.icon} ${styles.leftnavicon}`}></i>
              <span className={`${styles.title}`} style={{ color: "#070a10" }}>{option.title}</span>
            </div>
            {option.submenu && option.submenu.map((subItem, subIndex) => (
              <div key={subIndex} className={styles.submenu}>
                <div className={styles.submenuTitle}>
                    <span>{subItem.icon}</span>
                    <span>{subItem.title}</span>
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftNav;
