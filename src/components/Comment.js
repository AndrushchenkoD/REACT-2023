import React, {Component} from 'react';

class Comment extends Component {

    constructor(props, context) {
        super(props, context);
    this.comment=this.props.comment;
    }

    render() {
        return (
            <div>
                <ul>
                    <li>postId:{this.comment.postId}</li>
                    <li>id:{this.comment.id}</li>
                    <li>name:{this.comment.name}</li>
                    <li>email:{this.comment.email}</li>
                    <li>body:{this.comment.body}</li>
                </ul>
            </div>
        );
    }
}

export default Comment;