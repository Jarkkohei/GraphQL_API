import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({ post: { id, body, created_at, username, likeCount, commentCount, likes }}) {

    function likePost() {
        console.log('likePost');
    }

    return (
        <Card fluid>
            <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`} title="Go to the post">{moment(created_at).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right' onClick={likePost}>
                    <Button color='blue' basic>
                        <Icon name='heart' />
                    </Button>
                        <Label basic color='blue' pointing='left'>
                            {likeCount}
                    </Label>
                </Button>
                <Button as='div' labelPosition='right' as={Link} to={`/posts/${id}`}>
                    <Button color='teal' basic>
                        <Icon name='comments' />
                    </Button>
                    <Label basic color='teal' pointing='left'>
                        {commentCount}
                    </Label>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PostCard;