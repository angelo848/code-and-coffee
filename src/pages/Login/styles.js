import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  width: 100%;
  margin: 50px auto;
  background: #f3aa6a;
  border-radius: 6px;
`

export const Title = styled.h2`
margin-top: 100px;
font-size: 30px;
text-align: center;
}
`

export const SignButtons = styled.div`
  width: 100%;
  button {
    width: 50%;
    padding: 15px 0;
    background: transparent;
    border: none;
    border-bottom: 1px solid #fff;
    font-size: 20px;
    color: #222;
    cursor: pointer;
  }
  .selected {
    background: #7d5444;
    color: #fff;
  }
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 15px auto;
  label {
    font-size: 14px;
  }
  input {
    margin-top: -10px;
    padding: 10px;
    border-radius: 4px;
    border: 1px;
    padding-left: 40px;
    font-size: 14px;
  }
  svg {
    position: relative;
    top: 19px;
    left: 10px;
    font-size: 18px;
  }
`

export const Button = styled.button`
  margin: 15px auto 25px;
  padding: 20px;
  border-radius: 3px;
  border: 2px;
  background: #7d5444;
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  width: 50%;
`
