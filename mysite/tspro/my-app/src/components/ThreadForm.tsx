import React, {useState} from 'react';
import styled from 'styled-components'

const Responce = styled.div`
  margin-top: 90px;
`
const Post = styled.div`
  font-size: 20px;
  margin-top: 20px;
  border-bottom: 1px dotted #dcdcdc;
  padding-bottom: 5px;
  margin-bottom: 1em;
`
const Name = styled.input`
  display: block;
`
const Comment = styled.textarea`
  display: block;
`
const Write = styled.input`
  display: block;
`

const ThreadForm: React.FC =  () => {
  const [texts, setTexts] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTexts(e.target.value)
  }
  console.log(texts)
  return (
    <React.Fragment>
      <Responce>
        <Post>レスを投稿する</Post>
        <form>
          <Name placeholder={'名前(省略可)'} size={70}/>
          <Comment placeholder={"コメント内容"} rows={5} cols={70} value={texts} onChange={handleChange}/>
          <Write type={"submit"} value={"書き込む"}/>
        </form>
      </Responce>
    </React.Fragment>
  );
}

export default ThreadForm;