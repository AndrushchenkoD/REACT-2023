import React, {Component} from 'react';
import {AxiousApiService} from "../services/axious.api.service";
import Post from "./Post";

class Posts extends Component {
    state={posts:[]}

    constructor(props, context) {
        super(props, context);
        this.AxiousApiService=new AxiousApiService();
        this.AxiousApiService.getPosts().then(value => this.setState({posts:value}));
    }


    render() {
        return (
            <div>
                {
                    this.state.posts.map(value=><Post key={value.id} post={value}/>)
                }

            </div>
        );
    }
}

export default Posts;