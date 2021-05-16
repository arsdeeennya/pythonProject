import React from 'react';
import Container from '@material-ui/core/Container';
import axios from "axios";

const Bbs =  () => {

  const users = () => {
    axios.get('http://127.0.0.1:8000/bbs/index').then((res) => {
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
