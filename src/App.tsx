import './App.scss';
import InputSearch from "./components/InputSearch/InputSearch.tsx";
import { useState } from "react";
import ReposList from "./components/ReposList/ReposList.tsx";
import { GET_REPOSITORIES } from "./apollo/repositories.ts";
import client from "./apollo/client.ts";

function App() {
    const [repositories, setRepositories] = useState([]);

    const handleSearch = async (query: string) => {
        const { data } = await client.query({
            query: GET_REPOSITORIES,
            variables: {
                queryString: query,
            },
        });
        setRepositories(data.search.edges);
    };

    return (
        <div className="App">
            <h1>Тестовое для Suppi</h1>
            <InputSearch onSearch={handleSearch} />
            <ReposList repositories={repositories} />
        </div>
    );
}

export default App;
