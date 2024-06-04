import { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ShoppingCartContext } from '../../Context';
import Layout from '../../Components/Layout';
import Card from '../../Components/Card';
import ProductDetail from '../../Components/ProductDetail';

function Home() {
  const context = useContext(ShoppingCartContext);
  const [categoryItems, setCategoryItems] = useState(null);

  const location = useLocation();
  const currentPath = location.pathname;
  const currentCategory = currentPath.substring(
    currentPath.lastIndexOf('/') + 1
  );

  const filteredItemsByCategory = (items) => {
    if (currentCategory === 'clothes') {
      return items?.filter((item) =>
        item.category.toLowerCase().includes('clothing')
      );
    } else {
      if (currentCategory === 'others') {
        return items;
      } else {
        return items?.filter(
          (item) =>
            item.category.toLowerCase() === currentCategory.toLowerCase()
        );
      }
    }
  };

  useEffect(() => {
    if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        setCategoryItems(filteredItemsByCategory(context.filteredItems));
      } else {
        setCategoryItems(null);
      }
    } else {
      setCategoryItems(filteredItemsByCategory(context.items));
    }
  }, [
    context.items,
    context.searchByTitle,
    context.filteredItems,
    currentCategory,
  ]);

  const renderView = () => {
    if (categoryItems?.length > 0) {
      return categoryItems?.map((item) => <Card key={item.id} data={item} />);
    } else if (
      currentCategory.length > 0 &&
      context.searchByTitle?.length > 0
    ) {
      return <div>We don't have anything :(</div>;
    } else if (context.searchByTitle?.length > 0) {
      if (context.filteredItems?.length > 0) {
        return context.filteredItems?.map((item) => (
          <Card key={item.id} data={item} />
        ));
      } else {
        return <div>We don't have anything :(</div>;
      }
    } else {
      return context.items?.map((item) => <Card key={item.id} data={item} />);
    }
  };

  return (
    <Layout>
      <div className="flex items-center justify-center relative w-80 mb-4">
        <h1 className="font-medium text-xl">Exclusive Products</h1>
      </div>
      <input
        type="text"
        placeholder="Search a product"
        className="rounded-lg border-2 border-black w-80 p-4 mb-4 shadow-md focus:outline-none"
        onChange={(event) => context.setSearchByTitle(event.target.value)}
      />
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  );
}

export default Home;
