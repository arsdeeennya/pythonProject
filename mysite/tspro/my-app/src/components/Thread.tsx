import React, {useState, useEffect} from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import axios from "axios";

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

const Thread: React.FC =  () => {
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
          <Grid container spacing={8} key={post.id}>
            <Grid item xs={9}>
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
            </Grid>
            <Grid item xs={3}>
              {/* なし */}
            </Grid>
          </Grid>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Thread;