import React, {Component} from 'react';

class Post extends Component {

    constructor(props, context) {
        super(props, context);
        this.post=this.props.post;
    }

    render() {
        return (
            <div>
                <ul>
                    <li>id:{this.post.id}</li>
                    <li>title:{this.post.title}</li>
                    <li>body:{this.post.body}</li>
                    <li>userId:{this.post.userId}</li>
                </ul>
            </div>
        );
    }
}

export default Post;