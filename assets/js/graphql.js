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

export const GET_POST_AND_EDGES_QUERY = gql`
query GetPostQuery($strId: String!, $id: ID!) {
    Previous: allPosts (last: 1, before: $strId){
        title
        slug
        id
    }
    Post(id: $id) {
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
    Next: allPosts(first: 1, after: $strId) {
        title
        slug
        id
    }
}
`;
