import React from 'react';
import Form from './Form';
function Background(props) {
    return (
        <div>
           
             <div className="WebsiteLogoLogo">
                <img src="https://app.wobot.ai/assets/images/wobot-logo.png" alt="" />
            </div>  
            <Form/>
            <div className="box-rotate-fixed">
                <div class="box-strip box-strip-middle"></div>
                <div className="box-strip box-strip-top-right"></div>
                
                <div className="box-strip box-strip-bottom-left"></div>
                
            </div>
      
        </div>
    );
}

export default Background;