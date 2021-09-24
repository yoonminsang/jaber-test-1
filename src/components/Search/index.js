import React from 'react';
import { Input } from 'antd';
import styled from 'styled-components';
import useInputs from '../../hooks/useInputs';

const SearchWrapper = styled.div`
  width: 240px !important;
  height: 32px;
  color: black !important;
  border-radius: 4px;
  input {
    border-right: 0;
    &:focus,
    :hover {
      border-color: #d9d9d9 !important;
      box-shadow: none !important;
    }
  }
  button {
    border-left: 0;
    &:focus,
    :hover {
      border-color: #d9d9d9 !important;
      box-shadow: none !important;
    }
  }
`;

const Search = ({ placeholder }) => {
  const [{ search }, onChange, reset] = useInputs({
    search: '',
  });
  const onSearch = () => {
    alert(`${search} 검색~~`);
    reset();
  };
  return (
    <SearchWrapper>
      <Input.Search
        value={search}
        onChange={onChange}
        name="search"
        placeholder={placeholder}
        onSearch={onSearch}
      />
    </SearchWrapper>
  );
};

export default Search;
