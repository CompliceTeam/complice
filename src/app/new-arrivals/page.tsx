'use client';

import Sorter from '@/components/NewArrivals/Sorter';
import Products from '@/components/Products/Products';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Paginator from '@/components/layout/Paginator';
import { useState } from 'react';
import { ProductThumbType } from '../../../typings';
import DATA from '../../assets/dummy/products.json';

function Page() {
  const [products, setProducts] = useState<ProductThumbType[]>(DATA);
  const [sortedProducts, setSortedProducts] = useState<ProductThumbType[]>([]);

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <PageTitle title="New Arrivals" />
        <Sorter products={products} setSortedProducts={setSortedProducts} />
        <Products products={sortedProducts.length === 0 ? products : sortedProducts} showViewAll={false} />
        <Paginator productsShown={products.length} totalProducts={products.length} />
      </PageBody>
    </PageTemplate>
  );
}

export default Page;
