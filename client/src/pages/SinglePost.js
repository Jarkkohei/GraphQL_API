import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Image, Card } from 'semantic-ui-react';
import moment from 'moment';

function SinglePost(props) {

    const postId = props.match.params.postId;

    const { data: { getPost } } = useQuery(FETCH_POST_QUERY, {
        variables: {
            postId
        }
    }); 

    let postMarkup;

    if(!getPost) {
        // While waiting for the post...
        postMarkup = <p>Loading post...</p>
    } else {
        // When post is fetched...
        const { id, body, created_at, username, comments, likes, likeCount, commentCount } = getPost;

        postMarkup = (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={2}>
                        <Image src='https://react.semantic-ui.com/images/avatar/large/molly.png' size="small" float="right" />
                    </Grid.Column>
                    <Grid.Column width={10}>
                       <Card fluid>
                           <Card.Content>
                               <Card.Header>{ username }</Card.Header>
                               <Card.Meta>{ moment(created_at).fromNow() }</Card.Meta>
                               <Card.Description>{ body }</Card.Description>
                           </Card.Content>
                           <hr/>
                       </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        );
    }

    return (
        <>
            {postMarkup}
        </>
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