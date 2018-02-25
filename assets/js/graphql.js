import gql from 'graphql-tag';

export const ALL_POSTS_QUERY = gql`
query AllPostsQuery($first: Int!, $skip: Int!) {
    allPosts(filter: {isPublished: true}, orderBy: createdAt_DESC, first: $first, skip: $skip) {
        id
        slug
        title
        summary
        createdAt
        tags
        cover {
            url
        }
        author {
            firstName
            lastName
        }
    }
}
`;

export const GET_POST_QUERY = gql`
query GetPostQuery($slug: String!) {
    Post(slug:$slug) {
        author {
            firstName
            lastName
            thumbnail {
                url
            }
        }
        title
        createdAt
        tags
        content    
    }
}
`;
