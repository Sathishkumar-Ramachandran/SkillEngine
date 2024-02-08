import React, { useState } from "react";
import Styles from "../Styles/main.module.css";
import OptimBot from "../components/ChatBot";


const Main = ( {children} ) => {
    const [showComp, setShowComp] = useState(false);
  
    const toggleComp = () => {
      setShowComp(!showComp);
    }
  
    return(
      <div className={`${Styles.main}`}>
      <div className={`${Styles.CompScreen}`}>
          {children}
      </div>
      <div onClick={toggleComp}>
          <OptimBot className={`${Styles.OptimBot} ${showComp ? Styles.open : ''}`} />
      </div>
      </div>
    )
    };
  export default Main;