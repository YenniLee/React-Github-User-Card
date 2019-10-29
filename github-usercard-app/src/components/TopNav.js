import React from 'react';
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

const TopNav = ({ handleChange, searchInput, handleSubmit }) => {
    return (
        <Header>
            <h1>GitHub UserCard React App</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Search Username" 
                    onChange={handleChange} 
                    value={searchInput} 
                />
                <button>Search</button>
            </form>   
        </Header>
    )
}

export default TopNav;