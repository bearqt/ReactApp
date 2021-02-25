import React from 'react';
import {
    InputGroup,
    Input,
    Button,
} from 'reactstrap';
import './SearchPanel.css'


const SearchPanel:React.FC = () => {
    return (
        <div className="search-panel">
            <InputGroup>
                <Input placeholder="Поиск по новостям..." />
                <Button color="info" >Поиск</Button>
            </InputGroup>
            <br />
        </div>
    )    
}

export default SearchPanel