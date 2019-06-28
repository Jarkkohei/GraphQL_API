import React from 'react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import { Form, Button } from 'semantic-ui-react';

import { useForm } from '../util/hooks';

function PostForm() {

    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        body: ''
    });

    const [createPost, { error }] = useMutation(CREATE_POST_MUTATION, {
        variables: values,
        update(_, result) {
            console.log(result);
            values.body = '';
        }
    });

    function createPostCallback() {
        createPost();
    }

    return (
        <div>
            <Form onSubmit={onSubmit}>
                <h2>Create a post:</h2>
                <Form.Field>
                    <Form.Input
                        placeholder="Hi World"
                        name="body"
                        onChange={onChange}
                        value={values.body}
                    />
                    <Button type="submit" color="blue">
                        Submit
                    </Button>
                </Form.Field>
            </Form>
        </div>
    )
}

const CREATE_POST_MUTATION = gql`
    mutation createPost($body: String!) {
        createPost(body: $body) {
            id
            body
            created_at
            username
            likes{
                id
                username
                created_at
            }
            likeCount
            comments {
                id
                body
                username
                created_at
            }
            commentCount
        }
    }
`;

export default PostForm;