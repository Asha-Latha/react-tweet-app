import React from 'react';
import logo from '../3t.png';
import { Navbar, Button } from 'react-bootstrap';
import '../App.css';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: logo
        };
    }
    render() {
        return (
            <>
                <div className="home">

                    <div className="header">
                        <Navbar className="color-nav" fixed="top"    >
                            <h className="tweet">Tweet</h> &nbsp;
                        <img style={{ width: "50px", height: "50px" }}
                                src={this.state.imageURL}
                                alt="" />
                            <Navbar.Brand className="post-link" href="/post" > Post </Navbar.Brand>
                            <Navbar.Brand className="view-link" href="/viewTweet" > View</Navbar.Brand>
                            <Navbar.Brand className="viewall-link" href="/viewAllTweets" > ViewAll </Navbar.Brand>
                        </Navbar>
                    </div>
                    <div className="content" >
                        <div className="row" style={{lineHeight: '2.2'}}>
                            <div className="col-lg-6">
                                <p style={{color: 'black', fontSize: '29px', fontStyle: 'italic'}}>Tweet! Tweet!!
                                Lets's start sharing knowledge and gain knowledge!
                                Happy Tweeting!
                                </p>
                            </div>
                        </div>
                        
                        <div className="form-group" id="loginbutton">
                            <Button href="/logout" style={{color: 'red'}}>Logout</Button> {' '}
                        </div>

                    </div>
                    <div>
                        <Navbar fixed="bottom" bg="dark" className="footer" >
                            Copyright @ 2021
                  </Navbar>
                    </div>
                </div>
            </>
        );
    }
}
export default Home;