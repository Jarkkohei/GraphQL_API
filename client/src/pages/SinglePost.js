import React from 'react';
import gql from 'graphql-tag';

function SinglePost(props) {

    const postId = props.match.params.postId;

    return (
        <div>
            
        </div>
    )
}

const FETCH_POST_QUERY = gql`
    query($postId: ID!) {
        getPost(postId: $postId) {
            id
            body
            created_at
            username
            likeCount
            likes {
                username
            }
            commentCount
            comments {
                id
                username
                created_at
                body
            }
       }
    }
`;

export default SinglePost;