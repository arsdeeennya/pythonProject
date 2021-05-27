import React, {useState, useEffect} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import styled from 'styled-components'

const Container = styled(Grid)`
  font-size: 20px;
`
const Post = styled.div`
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 5px;
  border-radius: 5px;
  display: inline-block;
  border-style: none solid solid none;
  border-color: #ddd;
`
const Message = styled.div`
  padding: 12px 0px;
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

type PostType = {
  id: number;
  name: string;
  message: string;
  ip: string;
  week: string;
}

const ThreadList: React.FC =  () => {
  const [posts, setPosts] = useState<Array<PostType>>([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get<Array<PostType>>('http://127.0.0.1:8000/bbs/index/').then((res) => {
    setPosts(res.data)
    })
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        {posts.map((post) => (
          <Container container spacing={1} key={post.id}>
            <Grid item xs={9}>
              <Post>
                <div className="meta">
                  <span className="number">{post.id}</span>
                  <span className="name">
                    <b><a href="mailto:sage">{post.name}</a></b>
                  </span>
                  <span className="date">2021/05/24(月) 12:55:00.32</span>
                  <span className="uid">{post.ip}</span>
                </div>
                <Message className="message">
                  <span className="escaped">{post.message}</span>
                </Message>
              </Post>
            </Grid>
            <Grid item xs={3}>
            </Grid>
          </Container>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ThreadList;