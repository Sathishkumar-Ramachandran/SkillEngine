import React from "react"
import styles from "../../Styles/supportHeader.module.css"
import OptimBot from "../ChatBot"


const SupportHeader = () => {
  const [showBot, setShowBot] = React.useState(false)

  const handleSupportClick = () => {
    setShowBot(true)
  }

  return(
    <>
      <button className={`${styles.supportHeader}`} onClick={handleSupportClick}>Ask Optim</button>
      {showBot && <OptimBot />}
    </>
  )
}

export default SupportHeader;
// import React from "react";
// import styles from '../../Styles/supportHeader.module.css';


// const SupportHeader = () => {
//     return(
//         <>
//             <button className={`${styles.supportHeader}`}>Ask Optim</button>
//         </>
//     )
// }


// export default SupportHeader;