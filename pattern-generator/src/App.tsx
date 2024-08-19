import { useState } from 'react';
import './App.css';
import Input from './components/Input';
import SelectBox from './components/SelectBox';

function App() {
  const [text, setText] = useState<string>('');
  const [row, setRow] = useState<number>(0);
  const [pattern, setPattern] = useState<number>(0);
  const [patternValue, setPatternValue] = useState<string>('');
  const patternList = [
    { value : 0, name : 'Upper left triangle'},
    { value :1, name : 'Upper right triangle'}
  ]
  const handlePatternInputChange = (value: string) => {
    setText(value);
  };

  const handleRowNumberInputChange = (value: number) => {
    setRow(value);
  }

  const handleSelectPatternInputChange = (value: number) => {
    setPattern(value);
  }

  const generatePattern = () => {
    let symbol = '';
    let underline = '';
    switch (pattern) {
      case 0:
        for (let i = 1; i <= row; i++) {
          const str = `${text} `;
          symbol += str.repeat(i) + '\n';
        }
        setPatternValue(symbol);
    }
  }

  return (
    <>
      <div>
        <h1>React Pattern Generator</h1>
        <div>
        <Input
          label='Pattern Name'
          type='string'
          placeholder='Enter your pattern'
          onInputChange={handlePatternInputChange}
        />

      <Input
          label='Row Number'
          type='number'
          placeholder='Enter your row number'
          onInputChange={handleRowNumberInputChange}
        />
        <SelectBox patternList={patternList}  onselectInputChange={handleSelectPatternInputChange}/>

          <button onClick={generatePattern}>Generate</button>
        </div>

       <br/>
       <textarea cols={100} rows={20} className='myTextArea'  value={patternValue}>
       
       </textarea>
      </div>
    </>
  );
}

export default App;
