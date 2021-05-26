import React from 'react';
import logo from '../3t.png';
import { Navbar, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            imageURL: logo,
            "loginId": "",
            "tweetMessage": "",
            "hashTag": "",
            "user": []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    getTweetMessage = (e) => {
        this.setState({ tweetMessage: e.target.value })

    }
    getHashTag = (e) => {
        this.setState({ hashTag: e.target.value })
    }

    handleSubmit(e) {
        console.log("Inside add post handle submit functin")
        e.preventDefault();

        this.addPost()
    }

    addPost = (e) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log('post  Tweet')
        // let headers = new Headers();
        let addTweets = {
            "tweetMessage": this.state.tweetMessage,
            "hashTag": this.state.hashTag

        }

        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.post('http://localhost:9500/v1/Tweet/postTweet/' + localStorage.getItem('userLoginId'), addTweets,

            {
                headers: headers
            })
            .then(response => {
                console.log("posted tweet successfully");
                console.log(response.data.tweetId)
                localStorage.setItem('tweetId', response.data.tweetId)
                console.log(response);
                this.props.history.push("/home");
            }, error => {
                console.error(error);
            })
    }
    render() {
        return (
            <>
                <div className="header">

                    <Navbar className="color-nav" fixed="top"    >
                        <h className="tweet">Tweet</h> &nbsp;
                    <img style={{ width: "50px", height: "50px" }}
                            src={this.state.imageURL}
                            alt="" />
                        <Navbar.Brand className="view-link1" href="/viewTweet" > View </Navbar.Brand>
                        <Navbar.Brand className="viewall-link1" href="/viewAllTweets" > ViewAll </Navbar.Brand>
                        <Button href="/">Logout</Button> {' '}
                    </Navbar>
                </div>

                <div id="uipost">
                    <Form onSubmit={this.handleSubmit}>
                        <div className="mb-3">
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label style={{ fontFamily: 'normal', fontStyle: 'italic', fontSize: '20px' }}>Drop in Files: </Form.File.Label>
                                <Form.File.Input />
                            </Form.File>
                        </div>
                        <br />
                        <div >
                            <h5 style={{ color: 'blueviolet' }}>Post your tweet:</h5>
                            <textarea id="post" name="post" rows="5" cols="44" onChange={this.getTweetMessage} ></textarea>
                        </div>
                        <br />
                        <Form.Row style={{ marginRight: '0px' }}>
                            <Form.Group controlId="formGridCity" >
                                <Form.Control placeholder="#hashtag" onChange={this.getHashTag} />
                            </Form.Group>
                        </Form.Row>
                        <div id="postbutton" >
                            <button id="postb">Post</button>
                        </div>
                    </Form>
                </div>
                <div>
                    <Navbar fixed="bottom" bg="dark" className="footer" >
                        Copyright @ 2021
                  </Navbar>
                </div>
            </>
        );
    }
}
export default Post;