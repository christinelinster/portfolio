import React from "react";
import "../styles/Calendly.css"
class Calendly extends React.Component {
    componentDidMount() {
      const head = document.querySelector('head');
      const script = document.createElement('script');
      script.setAttribute('src',  'https://assets.calendly.com/assets/external/widget.js');
      head.appendChild(script);
    }
  
    componentWillUnmount() {
      // whatever you need to cleanup the widgets code
    }s
  
    render(){
      return (
        <div>
          <div id="schedule_form" >
            <div 
              className="calendly-inline-widget"
              data-url="https://calendly.com/lin-christine19?hide_gdpr_banner=1&background_color=0f1214&text_color=ede7f6&primary_color=605ea1"
              style={{ minWidth: '40vw', height: '700px' }} />
          </div>
        </div>
      );
    }
  }

  export default Calendly;
