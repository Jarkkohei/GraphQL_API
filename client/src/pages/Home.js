import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

function Home() {
    const { loading, data: { getPosts: posts } } = useQuery(FETCH_POSTS_QUERY);

    if(posts) {
        console.log(posts);
    }

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
}

const FETCH_POSTS_QUERY = gql`
    {
        getPosts{
            id 
            body 
            created_at 
            username 
            likeCount
            likes{
                username
            }
            commentCount
            comments{
                id 
                username 
                created_at 
                body
            }
        }
    }
`;

export default Home;