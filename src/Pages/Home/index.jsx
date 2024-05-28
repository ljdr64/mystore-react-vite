import { useState, useEffect } from 'react';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import { apiUrl } from '../../Api';

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    try {
      fetch(`${apiUrl}products`)
        .then((response) => response.json())
        .then((data) => setItems(data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <Layout>
      Home
      <div className="grid gap-10 grid-cols-4 w-full max-w-screen-lg">
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </Layout>
  );
}

export default Home;
