import styled from 'styled-components'

export const Container = styled.div`
  width: 55%;
  margin: 100px auto;
  display: flex;
`

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 90px;
  margin: 0 auto;
  margin-right: 80px;
`

export const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 4px;
`

export const Title = styled.a`
  color: #3a2727;
  font-size: 2rem;
  text-decoration: none;
  margin-top: 20px;
  width: fit-content;
  &:hover {
    color: #2a3c52;
  }
`

export const PostMeta = styled.div`
  color: #565656;
  font-size: 0.9em;
  margin-top: 10px;
  text-transform: uppercase;
  .separator {
    margin: 0 10px;
  }
`

export const Description = styled.p`
  color: #333;
  font-size: 1.2rem;
  margin-top: 30px;
  position: relative;
  line-height: 1.5em;
  max-height: 4.5em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
`
