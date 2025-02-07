import React, {useState, useEffect} from 'react';
import {Button} from '@/components/ui/button';

interface AppProps {}

const App = (props: AppProps) => {
  const [data, setData] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/hello')
      .then(res => res.json())
      .then(data => setData(data.message))
      .catch(e => console.log('[fetch erorr]', e));
  }, []);

  return (
    <div className="mx-auto mt-5 w-25">
      <h1 className="text-3xl font-bold">Hello {data}</h1>
      <Button variant="outline">Button</Button>
    </div>
  );
};

export default App;
