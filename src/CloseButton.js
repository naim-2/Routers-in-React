import React from 'react'

const CloseButton = () => {
    const closeTab = () => {
        window.location.href="https://www.google.com";
      };
    return(
        <div>
            <button onClick={closeTab}>Closing</button>
        </div>
    );
}

export default CloseButton;