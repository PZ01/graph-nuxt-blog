import gql from 'graphql-tag';

export const ALL_POSTS_QUERY = gql`
query AllPostsQuery($first: Int!, $skip: Int!) {
    allPosts(filter: {isPublished: true}, orderBy: createdAt_DESC, first: $first, skip: $skip) {
        id
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
`
