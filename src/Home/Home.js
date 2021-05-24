import React from 'react';
import logo from '../logo.png';
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
                            <h className="tweet">tweet</h> &nbsp;
                        <img style={{ width: "45px", height: "45px" }}
                                src={this.state.imageURL}
                                alt="" />
                            <Navbar.Brand className="post-link" href="/post" > Post </Navbar.Brand>
                            <Navbar.Brand className="view-link" href="/viewTweet" > View </Navbar.Brand>
                            <Navbar.Brand className="viewall-link" href="/viewAllTweets" > View All </Navbar.Brand>
                        </Navbar>
                    </div>
                    <div className="content" >
                        <div className="row">
                            <div className="col-lg-6">
                                <p>Twitter is an American microblogging and social networking</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <p>service on which users post and interact with messages</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <p>known as "tweets". Registered users can post, like and retweet</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <p>tweets, but unregistered users can only read them.</p>
                            </div>
                        </div>

                        <div className="form-group" id="loginbutton">
                            <Button href="/logout">Logout</Button> {' '}
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