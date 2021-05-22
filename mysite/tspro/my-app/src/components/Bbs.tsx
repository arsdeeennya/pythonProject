import React from 'react';
import Container from '@material-ui/core/Container';
import axios from "axios";

const Bbs: React.FC =  () => {

  const users = () => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      console.log(res)
    })
  }

  return (
    <React.Fragment>
      <main>
        <Container>
          <button onClick={users}>すいっち</button>
          {/* <button onClick={user1}>すいっち</button> */}
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Bbs;