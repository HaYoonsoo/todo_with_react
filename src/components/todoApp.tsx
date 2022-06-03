import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from './Header';
import List from './List';
import InputBox from './InputBox';

const AppBody = styled.div`
`

const TodoApp: NextPage = () => {
  return (
    <AppBody>
      <Header />
      <List />
      <InputBox />
    </AppBody>
  )
}

export default TodoApp;