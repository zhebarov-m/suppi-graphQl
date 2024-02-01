import { ApolloClient, InMemoryCache } from '@apollo/client';

const token = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN; // Мой токен, можно поменять


const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${token}`,
    },
    cache: new InMemoryCache()
});

export default client;
