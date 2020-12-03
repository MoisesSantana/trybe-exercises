import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';

describe('Testando a aplicação, testando input', () => {
  const { getByLabelText, getByText } = render(<App />);
  const inputTask = getByLabelText('Tarefa:');
  const labelTask = getByText('Tarefa:');
  test('Verificando se o label e o input existem no documento', () => {
    expect(labelTask).toBeInTheDocument();
    expect(inputTask).toBeInTheDocument();
  });

  test('Verificando o tipo do input', () => {
    expect(inputTask.type).toBe('text');
  });
});

describe('Exercise 01', () => {
  test('Button "Adicionar" exist', () => {
    const { getByText } = render(<App />);

    const saveTaskButton = getByText('Adicionar');

    expect(saveTaskButton).toBeInTheDocument();
    expect(saveTaskButton.type).toBe('button');
  });

  test('Button "Adicionar" save task', () => {
    const { getByLabelText, getByText } = render(<App />);
    
    const saveTaskButton = getByText('Adicionar');
    const inputTask = getByLabelText('Tarefa:')

    fireEvent.change(inputTask, { target: {value: 'valueOfInputTask' } });
    fireEvent.click(saveTaskButton);

    expect(getByText('valueOfInputTask')).toBeInTheDocument();
  });

  test('Text input read new task and Button add in list', () => {
    render(<App />);

    const tasksArr = ['teste1', 'teste2', 'teste3', 'teste4', 'teste5'];

    const saveTaskButton = screen.getByText(/Adicionar/i);
    const inputTask = screen.getByLabelText(/Tarefa/i);

    tasksArr.forEach((task) => fireEvent.change(inputTask, { target: { value: task} }));

    fireEvent.click(saveTaskButton);
  });
}); 
