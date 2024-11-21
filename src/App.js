import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to Markdown Previewer!

## This is a sub-heading...

- Here's a list item
- **Bold text**
- [A link](https://fr.legacy.reactjs.org/)

\`\`\`
function example() {
  return "Code block example";
}
\`\`\`

> Blockquote example

![Image Example](https://tse1.mm.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=180)
`);

  const handleMarkdownChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
   <div className='app'>
    <div className='container'>
      <div className='header'>
        <span>Editor</span>
        <button className='close-button' onClick={ () => setMarkdown("")}>✖</button>
      </div>
    <textarea
      id='editor'
      value={markdown}
      onChange={handleMarkdownChange}
      placeholder='Enter Markdown here...'
    />
    </div>
    <div className='container'>
      <div className='header'>
        <span>Previewer</span>
        <button className='close-button' onClick={ () => setMarkdown("")}>✖</button>
      </div>
    <div 
      id='preview'
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
      ></div>
    </div>
   </div> 
  );
}

export default App;
