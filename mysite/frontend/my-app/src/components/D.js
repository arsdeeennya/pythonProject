import React,{useState} from 'react';
import '../d.css';

export const D = () => {
  const [imcomplate, setimcomplate] = useState(['aaa'],['iiii'])
  return (
    <>
      <div className='input-area'>
        <input placeholder='TODOを入力'/>
        <button>追加</button>
      </div>
      <div className='incomplete-area'>
        <p className='title'>未完了のTODO</p>
        <ul>
          {imcomplate.map((todo) => {
            return(
              <div className='list-row'>
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
          <div>
            <li>ああああ</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
}