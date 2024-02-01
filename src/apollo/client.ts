import { ApolloClient, InMemoryCache } from '@apollo/client';

const GITHUB_PERSONAL_ACCESS_TOKEN = 'ваш токен гит'

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN}`,
    },
    cache: new InMemoryCache()
});

export default client;
