import React from 'react';
import { Input, Button } from 'semantic-ui-react'
import styled from 'styled-components';

const Header = styled.header`
    background: #5878a7;
    color: #FAFAFA;
    padding: 20px;
    text-align: center;
`;
const Search = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const TopNav = () => {
    return (
        <Header>
            <h1>GitHub UserCard React App</h1>
            <Search class="ui icon input">
                <Input type="text" placeholder="Search Username" />
                <Button>Search</Button>
            </Search>   
        </Header>
    )
}

export default TopNav;