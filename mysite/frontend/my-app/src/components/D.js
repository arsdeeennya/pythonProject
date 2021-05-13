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


  return (
    <>
      <div className='input-area'>
        <input placeholder='入力してちょ' value={todoText} onChange={onChangeTodoText}/>
        <button onClick={onClickTodoText}>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {imcomplate.map((todo) => {
            return(
              <div key='todo' className='list-row'>
                <li>{todo}</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            )
          })}
        </ul>
      </div>
      <div className='complete-area'>
        <p className='title'>完了のTODO</p>
        <ul>
          {complate.map((todo) => {
            return(
              <div key='todo' className='list-row'>
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  );
}