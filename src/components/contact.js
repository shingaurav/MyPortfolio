import React, {Component } from 'react';
import { Grid, Cell,List,ListItem ,ListItemContent } from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Gaurav Singh</h2>
                       <img 
                       src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                       alt="avatar"   
                       style={{height:'250px'}}
                       />          
                       <p style = {{width :"75%", margin: 'auto', paddingTop: '1em'}}> Hello guys ! i'm Gaurav singh React native developer who love to code and her michi (tessa)</p>           
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-list">
                        <List>
                        <ListItem>
                       <ListItemContent style={{fontSize: '30px', fontFamily: "Anton"}}>
                           <i className="fa fa-phone-square" aria-hidden="true" />
                          (91) 9871295102
                          </ListItemContent>
                        </ListItem>
                      
                        <ListItem>
                       <ListItemContent style={{fontSize: '30px', fontFamily: "Anton"}}>
                           <i className="fa fa-fax" aria-hidden="true" />
                          (91) 9871295102
                          </ListItemContent>
                        </ListItem>
                      
                        <ListItem>
                       <ListItemContent style={{fontSize: '26px', fontFamily: "Anton"}}>
                           <i className="fa fa-envelope" aria-hidden="true" />
                         shingaurav6662@gmail.com
                          </ListItemContent>
                        </ListItem>

                        <ListItem>
                       <ListItemContent style={{fontSize: '30px', fontFamily: "Anton"}}>
                           <i className="fa fa-skype" aria-hidden="true" />
                         MySkype
                          </ListItemContent>
                        </ListItem>
                      
                      
                       </List>
                        </div>
                       
                    </Cell>

                </Grid>



            </div>
        )
    }
}

export default Contact;