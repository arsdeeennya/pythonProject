import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import axios from "axios";
import Button from '@material-ui/core/Button';
import CreateIcon from '@material-ui/icons/Create';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string,
  message: string,
};

const Responce = styled.div`
  margin: 90px 110px 0px;
`
const ResPost = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-top: 20px;
  border-bottom: 1px dotted #dcdcdc;
  padding-bottom: 5px;
  margin-bottom: 1em;
`
const Name = styled.input`
  width: 100%;
  font-size: 130%;
  padding: 8px 14px;
  margin-bottom: 15px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
`
const Comment = styled.textarea`
  width: 100%;
  font-size: 170%;
  padding: 8px 14px;
  margin-bottom: 15px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 5px;
`

const Write = styled(Button)`
  float: right;
  font-size: 20px;
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
    },
    root: {
      flexGrow: 1,
    },
  }),
);

const Post = styled.div`
  font-size: 20px;
  background-color: #ffffff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 5px;
  // display: inline-block;
  border-style: none solid solid none;
  border-color: #ddd;
`
const Message = styled.div`
  padding: 12px 0px;
`

const ErrorMsg = styled.span`
  color: deeppink;
  font-weight: 700;
`

type PostType = {
  id: number;
  name: string;
  message: string;
  ip: string;
  week: string;
}

const Main = styled.main`
  background-color: #f2f3f7;
  padding: 70px 0px 100px;
`

const Thread: React.FC =  () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const [posts, setPosts] = useState<Array<PostType>>([]);
  
  const onSubmit: SubmitHandler<Inputs> = data => {
    if(data.name === ''){
      data.name = '森のくまさん'
    }
    axios.post('http://127.0.0.1:8000/bbs/index/', data,{
      headers: { "Content-Type": "application/json" },
    })
    .then(res => {
      setPosts([...posts,res.data])

    })
    .catch(res => {
      console.log(res)
    })
  };

  const classes = useStyles();

  useEffect(() => {
    axios.get<Array<PostType>>('http://127.0.0.1:8000/bbs/index/')
      .then((res) => setPosts(res.data));
  }, []);

  return (
    <React.Fragment>
      <Main>
        <Container>
          <div className={classes.root}>
            {posts.map((post, index) => (
              <div key={index}>
                <Post>
                <div>
                  <span>{post.id}</span>
                  <span>
                    <b><a href="mailto:sage">{post.name}</a></b>
                  </span>
                  <span>2021/05/24(月) 12:55:00.32</span>
                  <span>{post.ip}</span>
                </div>
                <Message>
                  <span>{post.message}</span>
                </Message>
              </Post>
              </div>
            ))}
          </div>
          <Responce>
            <ResPost>レスを投稿する</ResPost>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Name {...register("name", { maxLength: 20 })} placeholder={'名前(省略可)'} size={70} />
              {errors.name && <ErrorMsg style={{color: 'deeppink'}}>名前が長すぎます！</ErrorMsg>}
              <Comment {...register("message", { required: true })} placeholder={'コメント内容'} rows={5} cols={70} />
              {errors.message && <ErrorMsg style={{color: 'deeppink'}}>本文がありません！</ErrorMsg>}
              <Write variant="contained" color="primary" className={classes.button} endIcon={<CreateIcon/>} type='submit'>書き込む</Write>
            </form>
          </Responce>
        </Container>
      </Main>
    </React.Fragment>
  );
}

export default Thread;