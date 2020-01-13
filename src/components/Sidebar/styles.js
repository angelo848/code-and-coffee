import styled from 'styled-components'

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`

export const SearchBar = styled.form`
  display: flex;
  font-size: 15px;
  border: 2px solid #3a2727;
  border-radius: 20px;
  padding: 10px 20px;
  input,
  button {
    font-size: inherit;
  }
  input {
    border: none;
    background: no-repeat;
    &:focus {
      border-color: #3d7ad2;
    }
  }
  button {
    background: transparent;
    border: none;
  }
`

export const About = styled.div`
  margin: 50px 0;
  h3 {
    font-size: 20px;
    width: 102%;
    margin-bottom: 10px;
  }
  p {
    color: #3a2727;
    font-size: 17px;
    text-align: justify;
  }
`

export const Articles = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  h4 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  a {
    margin: 10px 0;
    width: fit-content;
    text-decoration: none;
    color: #7d5444;
    font-size: 17px;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const Categories = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  a {
    margin: 10px 0;
    width: fit-content;
    text-decoration: none;
    color: #7d5444;
    font-size: 17px;
    span {
      margin-left: 10px;
    }
    .expand {
      display: none;
    }
  }
  a:hover {
    color: #3d7ad2;
  }
  a:hover .contract {
    display: none;
  }
  a:hover .expand {
    display: initial;
  }
`

export const Newsletter = styled.form`
  h4 {
    font-size: 20px;
    margin-bottom: 15px;
  }
  input {
    padding: 10px;
    border-radius: 5px;
    border: 2px solid #a5a5a5;
    font-size: 14px;
    width: 100%;
  }
  button {
    padding: 10px;
    background-color: #7d5444;
    color: #fff;
    border-radius: 4px;
    border: 2px;
    margin-top: 15px;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      background-color: #7b4631;
    }
  }
`
