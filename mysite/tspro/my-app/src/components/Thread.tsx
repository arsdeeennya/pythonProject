import React from 'react';
import ThreadList from './ThreadList';
import ThreadForm from './ThreadForm';
import Container from '@material-ui/core/Container';

const Thread: React.FC =  () => {

  return (
    <React.Fragment>
      <main>
        <Container>
          <ThreadList/>
          <ThreadForm/>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default Thread;