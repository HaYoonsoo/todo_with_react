import type { NextPage } from 'next';
import styled from 'styled-components';
import Header from './Header';
import List from './List';
import InputBox from './InputBox';
import styles from './todoApp.module.css';

const TodoApp: NextPage = () => {
  return (
    <div className={styles.AppBody}>
      <Header />
      <List />
      <InputBox />
    </div>
  )
}

export default TodoApp;