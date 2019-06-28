import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
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