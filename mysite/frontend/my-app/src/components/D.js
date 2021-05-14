import React,{useState} from 'react';
import '../d.css';

export const D = () => {
  const [todoText, setTodoText] = useState('')
  const [imcomplate, setimcomplate] = useState(['aaa'],['iiii'])
  const [complate, setcomplate] = useState(['uuuu'])

  const onChangeTodoText = (event) => setTodoText(event.target.value)

  const onClickTodoText = () => {
    if(todoText !== ''){
      const newTodos = [...imcomplate, todoText]
      setimcomplate(newTodos)
      setTodoText('')
    }
  }

  const onClickDelete = (index) => {
    const newTodos = [...imcomplate]
    newTodos.splice(index, 1)
    setimcomplate(newTodos)
  }

  const onClickFinish = (index) => {
    const newTodos = [...imcomplate]
    newTodos.splice(index, 1)

    const newCompleteTodo = [...complate, imcomplate[index]]
    setimcomplate(newTodos)
    setcomplate(newCompleteTodo)
  }

  const back = (index) => {
    const oldTodos = [...complate]
    oldTodos.splice(index, 1)

    const newCompleteTodo = [...imcomplate, complate[index]]
    setimcomplate(newCompleteTodo)
    setcomplate(oldTodos)
  }

  return (
    <>
      <div className='input-area'>
        <input disabled={imcomplate.length >=5} placeholder='入力してちょ' value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickTodoText}>追加</button>
      </div>
      {imcomplate.length >= 5 &&
        <p style={{color: 'red'}}>まっくす！！</p>
      }
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {imcomplate.map((todo, index) => {
            return(
              <div key='todo' className='list-row'>
                <li>{todo}</li>
                <button onClick={() => onClickFinish(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {complate.map((todo, index) => {
            return(
              <div key='todo' className='list-row'>
                <li>{todo}</li>
                <button onClick={() => back(index)}>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  );
}