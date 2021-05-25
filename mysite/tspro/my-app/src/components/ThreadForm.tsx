import React, {useState, useEffect} from 'react';

const ThreadForm: React.FC =  () => {
  const [texts, setTexts] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTexts(e.target.value)
  }

  return (
    <React.Fragment>
      <form noValidate autoComplete="off">
        <textarea value={texts} onChange={handleChange} />
      </form>
    </React.Fragment>
  );
}

export default ThreadForm;