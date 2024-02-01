import styles from './InputSearch.module.scss'
import {customClasses} from "../../lib/customClasses/customClasses.ts";
import {ChangeEvent, FC, useState} from "react";
import {Button, TextField} from "@mui/material";


interface InputSearchProps {
    className?: string,
    onSearch: (query: string) => void;
}

const InputSearch: FC<InputSearchProps> = (props: InputSearchProps ) => {
    const {className, onSearch} = props
    const [query, setQuery] = useState<string>('');

    const handleChange  = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }

    const handleOnClick = () => {
        onSearch(query);
    };

    return (
        <div className={customClasses(styles.InputSearch, {}, [className!])}>
            <TextField
                sx={{fontFamily: 'monospace', fz: 12, width: '500px'}}
                onChange={handleChange}
                label="Поиск репозиторий"
                id="outlined-size-small"
                size="small"
            />
            <Button
                onClick={handleOnClick}
                sx={{fontFamily: 'monospace', padding: '8px 26px'}}
                variant="contained" size="small">
                Поиск
            </Button>
        </div>
    );
};

export default InputSearch
