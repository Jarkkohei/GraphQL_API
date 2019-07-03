import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function DeleteButton(props) {
    return (
        <Button as="div" color="red" floated="right" onClick={() => console.log('Delete post')}>
            <Icon name="trash" style={{ margin: 0 }}></Icon>
        </Button>
    )
}

export default DeleteButton;