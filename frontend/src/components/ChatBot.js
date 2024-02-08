import React from "react";
import Styles from '../Styles/chatbot.module.css'

const OptimBot = () => {
    return(
      <div className={`${Styles.ChatComponent} d-flex flex-column align-items-start justify-content-between}`}>
        <div className={`${Styles.ChatHeader}`}>OptimBot</div>
        <div className={`${Styles.ChatContent}`}>
          {/* Add chat messages here */}
        </div>
        <div className={`${Styles.ChatInput}`}>
          <input type="text" placeholder="Type a message..." />
        </div>
      </div>
    )
    }
  export default OptimBot;