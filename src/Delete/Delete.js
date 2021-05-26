import React from 'react';
import logo from '../3t.png';
import { Navbar, Form, Button } from 'react-bootstrap';
import '../App.css';
import axios from 'axios';

class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageURL: logo,
            "data": []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        console.log("Inside add post handle submit functin")
        e.preventDefault();

        this.deletePost()
    }

    deletePost = (e) => {
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
        console.log('delete  Tweet')
        // let headers = new Headers();
        console.log("Token value :**********" + localStorage.getItem('token'));
        axios.delete('http://localhost:9500/v1/Tweet/' + localStorage.getItem('tweetId'),
            {
                headers: headers
            })
            .then(response => {
                console.log("deleted tweet successfully");
                console.log(response.data)
                // localStorage.setItem('tweetId',response.data.tweetId)
                // console.log(response);
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
                        <Navbar.Brand className="view-link1" href="/post" > View </Navbar.Brand>
                        <Navbar.Brand className="viewall-link1" href="/view" > ViewAll </Navbar.Brand>
                        <Button href="/">Logout</Button> {' '}
                    </Navbar>
                </div>
                <div id="uipost">
                    <Form onSubmit={this.handleSubmit}>
                        Post Your Tweet!!
                        <div >
                            <textarea id="post" name="post" rows="5" cols="44" onChange={this.getTweetMessage} ></textarea>
                        </div>
                        <br />
                        <Form.Row>
                            <Form.Group controlId="formGridCity" >
                                <Form.Control placeholder="#hash_tag" onChange={this.getHashTag} />
                            </Form.Group>
                        </Form.Row>
                        <div id="postbutton" >
                            <button className="btn btn-secondary " id="postb">Post</button>
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
export default Edit;