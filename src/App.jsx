import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';

const Globalstyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s;
  }
  body{
    background-color: ${props => props.theme.background};
  }
`

const AppContainer = styled.div`
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background-color: ${props => props.theme.background};
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h1`
  font-size: 24px;
  color: ${props => props.theme.color};
`;

const InputContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: ${props => props.theme.background};
`;

const AddButton = styled.button`
  padding: 10px 20px;
  margin-left: 10px;
  border: none;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.background};
  }
`;

const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
  color: ${props => props.theme.color};
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: ${props => props.theme.background};
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

const DeleteButton = styled.button`
  border: none;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.color};
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.background};
  }
`;

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isdark , setIsdark] = useState(false)

  const handleAddTask = () => {
    if (inputValue.trim() === '') return;
    setTasks([...tasks, inputValue]);
    setInputValue('');
  };

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <ThemeProvider theme={isdark ? darkTheme : lightTheme}>
      <Globalstyle />
    <AppContainer>
      <Title>Simple To-Do App</Title>
      <InputContainer>
        <Input
          type="text"
          placeholder="Add a new task"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AddButton onClick={handleAddTask}>Add</AddButton>
        <button className='btn' onClick={() => setIsdark(!isdark)}>click</button>
      </InputContainer>
      <TaskList>
        {tasks.map((task, index) => (
          <TaskItem key={index}>
            {task}
            <DeleteButton onClick={() => handleDeleteTask(index)}>Delete</DeleteButton>
          </TaskItem>
        ))}
      </TaskList>
    </AppContainer>
    </ThemeProvider>
  );
}

export default App
