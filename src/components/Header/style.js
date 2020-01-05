import styled from 'styled-components'

import Background from '../../assets/img/background.jpg'

export const Container = styled.div`
  height: 300px;
  background: url(${Background});
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #f3aa6a;
    }
  }
  .text {
    color: #fff;
    font-size: 23px;
    margin-top: 25px;
  }
`
