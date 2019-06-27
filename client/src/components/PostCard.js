import React from 'react';
import { Card, Icon, Label, Image, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import moment from 'moment';

function PostCard({ post: { id, body, created_at, username, likeCount, commentCount, likes }}) {

    return (
        <Card fluid>
            <Card.Content>
                <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/molly.png' />
                <Card.Header>{username}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`} title="Go to the post">{moment(created_at).fromNow()}</Card.Meta>
                <Card.Description>{body}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button as='div' labelPosition='right'>
                    <Button color='blue' basic>
                        <Icon name='heart' />
                    </Button>
                        <Label basic color='blue' pointing='left'>
                            {likeCount}
                    </Label>
                </Button>
            </Card.Content>
        </Card>
    )
}

export default PostCard;