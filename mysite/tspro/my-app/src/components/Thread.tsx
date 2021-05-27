import React from 'react';
import ThreadList from './ThreadList';
import ThreadForm from './ThreadForm';
import Container from '@material-ui/core/Container';
import styled from 'styled-components'

const Main = styled.main`
  background-color: #f2f3f7;
  padding-top: 30px;
`
const Thread: React.FC =  () => {

  return (
    <React.Fragment>
      <Main>
        <Container>
          <ThreadList/>
          <ThreadForm/>
        </Container>
      </Main>
    </React.Fragment>
  );
}

export default Thread;