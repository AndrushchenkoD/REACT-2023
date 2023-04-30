import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostsByCommentID } from '../Services';

export default function Post() {
    let { id } = useParams();
    let [post, setPost] = useState({});

    useEffect(() => {
        getPostsByCommentID(id).then((value) => {
            if (value) {
                setPost(value);
            }
        });
    }, [id]);

    return (
        <div>
            {post && (
                <ul>
                    <li>id: {post.id}</li>
                    <li>userId: {post.userId}</li>
                    <li>title: {post.title}</li>
                    <li>body: {post.body}</li>
                </ul>
            )}
        </div>
    );
}