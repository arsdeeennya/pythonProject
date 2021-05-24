import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import axios from "axios";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Dev: React.FC =  () => {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const users = () => {
    axios.get<Array<TodoType>>('http://127.0.0.1:8000/bbs/index/').then((res) => {
      setTodos(res.data)
    })
  }

  return (
    <React.Fragment>
      <main>
        <Container>
          <button onClick={users}>すいっち</button>
          {todos.map((todo) => (
            <div key={todo.id}>
              <p>タイトル{todo.title}</p>
              <p>ID{todo.userId}</p>
              <p>？？？{todo.id}</p>
            </div>
          ))}
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Dev;