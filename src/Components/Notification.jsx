import React from "react";

const Notification = ({message}) => {
    if(message === null){
        return null
    }


    return(
        <div>

            {message && (
                <div className={message.type === "success" ? "success": "error"}>
                    {message.text}
                    </div>    
            )}

            </div>
    
        
    )
}
export default Notification