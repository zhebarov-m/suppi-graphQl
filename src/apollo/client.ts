import { ApolloClient, InMemoryCache } from '@apollo/client';

// const token = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN; // Переменная окружения с моим токеном
const GITHUB_ACCESS_TOKEN: string = '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'

const client = new ApolloClient({
    uri: 'https://api.github.com/graphql',
    headers: {
        Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    cache: new InMemoryCache()
});

export default client;
