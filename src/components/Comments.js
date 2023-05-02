import React, {Component} from 'react';
import {AxiousApiService} from "../services/axious.api.service";
import Comment from "./Comment";

class Comments extends Component {
    state={comments:[]}

    constructor(props, context, state) {
        super(props, context);
        this.AxiousApiService=new AxiousApiService();
        this.AxiousApiService.getComments().then(value => this.setState({comments:value}))
    }

    render() {
        return (
            <div>
                {
                    this.state.comments.map(value => <Comment key={value.id} comment={value}/>)
                }
            </div>
        );
    }
}

export default Comments;