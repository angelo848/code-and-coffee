import styled from 'styled-components'

export const Container = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: 90px 0;
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
  overflow: hidden;
  position: relative;
  line-height: 1.5em;
  max-height: 4.5em;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
  &:before {
    content: '...';
    position: absolute;
    right: 0;
    bottom: 3px;
  }
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: white;
  }
`

export const Button = styled.a`
  padding: 10px;
  background-color: #7d5444;
  color: #fff;
  text-decoration: none;
  width: fit-content;
  border-radius: 4px;
  margin-top: 15px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #3d7ad2;
  }
`
