import React, {Component } from 'react';
import { Grid , Cell} from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style = {{ width:'100%', margin : 'auto'}}>
            <Grid className = "landing-grid">
                <Cell col = {12}></Cell>
                <img
                 src="https://cdn1.vectorstock.com/i/1000x1000/51/05/male-profile-avatar-with-brown-hair-vector-12055105.jpg"
                 alt ="avatar"    
                 className="avatar-img"     
                 />
                 <div className="banner-text">
                     <h1>Mobile Application developer</h1>
                     <hr/>
                     <p>Android | React Native | Javascript | Java | HTML/CSS</p>
                    <div className="social-links">
                        {/* Linkedin */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                        {/* Github */}
                        <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-free-code-camp"  aria-hidden="true" />
                        </a>
                         {/* Freecodecamp */}
                         <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-youtube-square"  aria-hidden="true" />
                        </a>
                         {/* Youtube */}
                         <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                        <i className="fa fa-linkedin-square"  aria-hidden="true" />
                        </a>
                    </div>
                 </div>
                 </Grid>
            
            </div>
        )
    }
}

export default Landing;