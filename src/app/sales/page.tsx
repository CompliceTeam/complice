'use client';

import Products from '@/components/Products/Products';
import Categories from '@/components/layout/Categories';
import PageBody from '@/components/layout/PageBody';
import PageTemplate from '@/components/layout/PageTemplate';
import PageTitle from '@/components/layout/PageTitle';
import Paginator from '@/components/layout/Paginator';
import { useState } from 'react';
import { ProductType } from '../../../typings';
import DATA from '../../assets/dummy/products.json';
import NavMap from "@/components/layout/NavMap";

function Page() {
  const [ products, setProducts ] = useState<ProductType[]>(DATA);

  return (
    <PageTemplate>
      <PageBody>
        <Categories />
        <NavMap />
        <PageTitle title="Sales" />
        { products.length > 0 ? (
          <>
            <Products products={ products } showViewAll={ false } />
            <Paginator productsShown={ products.length } totalProducts={ products.length } />
          </>
        ) : (
          <p>No products found.</p>
        ) }
      </PageBody>
    </PageTemplate>
  );
}

export default Page;