import styled from 'styled-components'

export const Nav = styled.nav`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7d5444;
  .link {
    color: #f3aa6a;
    text-decoration: none;
    margin: 0 20px;
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    &:hover {
      color: #fff;
    }
  }
`

export const LogoWrapper = styled.a`
  height: auto;
  margin-right: 20px;
`

export const Image = styled.img`
  height: 70px;
`
