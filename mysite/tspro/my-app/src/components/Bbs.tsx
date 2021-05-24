import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import axios from "axios";

type PostType = {
  id: number;
  name: string;
  message: string;
  ip: string;
  week: string;
}

const Bbs: React.FC =  () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const [texts, setTexts] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTexts(e.target.value)
  }

  axios.get('http://127.0.0.1:8000/bbs/index/').then((res) => {
    setPosts(res.data)
  })

  return (
    <React.Fragment>
      <main>
        <Container>
          {posts.map((post) => (
            <div key={post.id}>
              <div className="meta">
                <span className="number">{post.id}</span>
                <span className="name">
                  <b><a href="mailto:sage">{post.name}</a></b>
                </span>
                <span className="date">2021/05/24(月) 12:55:00.32</span>
                <span className="uid">{post.ip}</span>
              </div>
              <div className="message">
                <span className="escaped">{post.message}</span>
              </div>
            </div>
          ))}
          <form noValidate autoComplete="off">
            <textarea value={texts} onChange={handleChange} />
          </form>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Bbs;