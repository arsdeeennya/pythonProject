import React from 'react';
import Thread from './Thread';
import ThreadForm from './ThreadForm';
import Container from '@material-ui/core/Container';

const Bbs: React.FC =  () => {

  return (
    <React.Fragment>
      <main>
        <Container>
          <Thread/>
          <ThreadForm/>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Bbs;