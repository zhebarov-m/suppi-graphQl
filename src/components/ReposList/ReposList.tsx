import styles from './ReposList.module.scss'
import {FC} from "react";
import {List, ListItem, ListItemButton, ListItemText} from "@mui/material";

export interface Repository {
    node: {
        id: string;
        name: string;
        url: string;
    };
}

interface ReposListProps {
    repositories: Repository[]
}

const RepListStyles = {
    width: '100%',
    height: '400px',
    maxWidth: 360,
    bgcolor: 'background.paper',
    overflow: 'auto',

}

const ReposList: FC<ReposListProps> = (props) => {
    const {repositories} = props

    return (
        <List
            className={styles.ReposList}
            sx={RepListStyles}
            aria-label="contacts"
        >
            {repositories.map((repository, index) => (
                <ListItem key={repository.node.id} disablePadding>
                    <ListItemButton>
                        <a
                            style={{textDecoration: 'none'}}
                            href={repository.node.url}
                        >
                            <ListItemText
                                primary={`${index + 1}) ${repository.node.name}`}
                            />
                        </a>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    );
};

export default ReposList
