import gql from 'graphql-tag';

export const ALL_POSTS_QUERY = gql`
query AllPostsQuery($first: Int!, $skip: Int!) {
    allPosts(filter: {isPublished: true}, orderBy: createdAt_DESC, first: $first, skip: $skip) {
        id
        slug
        title
        summary
        createdAt
        tags {
            name
        }
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
        ...PostFragment 
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
        tags {
            name
        }
        content    

    }
    Next: allPosts(first: 1, after: $strId) {
        ...PostFragment 
    }
}

fragment PostFragment on Post {
    title
    slug
    id
}
`;

export const GET_POST_BY_TAGS_QUERY = gql`
query GetPostsByTag($tag: String!) {
    allTags(filter: {name: $tag}) {
        posts(filter: {isPublished: true}) {
            id
            slug
            createdAt
            title
            summary
            author {
                firstName
                lastName
            }
        }
    }
}
`;
