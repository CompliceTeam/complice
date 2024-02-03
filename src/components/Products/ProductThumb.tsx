import Image from 'next/image';
import Link from 'next/link';
import { ProductType } from '../../../typings';

interface ProductThumbProps {
  product: ProductType;
  isShort?: boolean;
}

function ProductThumb({ product, isShort = false }: ProductThumbProps) {
  const heightClass = isShort ? 'h-[250px] md:h-[250px]' : 'h-[250px] md:h-[375px]';
  return (
    <div className="relative flex w-full snap-center flex-col items-center justify-start gap-2 shadow-sm overflow-hidden">
      <Link href={ `/products/${ product.id }` } className={ `w-full overflow-hidden ${ heightClass }` }>
        <Image
          src={ product.imagesURL?.image1 || '' }
          alt="Category"
          width={ 400 }
          height={ 400 }
          className="h-full w-full cursor-pointer object-contain object-center transition-all duration-300 ease-in-out hover:scale-110"
        />
      </Link>
      <Link href={ `/products/${ product.id }` }
            className="flex w-full cursor-pointer flex-col items-start justify-start">
        <h3 className="text-center text-base font-[500]">{ product.title }</h3>
        { product.onSale.isOnSale ? (
          <div className="flex items-center justify-center gap-2">
            <p className="text-center text-base text-secondary opacity-70 line-through">{ product.price } &euro;</p>
            <p className="text-center text-base text-primary">{ (product.price - product.onSale.discount * product.price).toFixed(2) } &euro;</p>
          </div>
        ) : (
          <p className="text-center text-base text-secondary">{ product.price } €</p>
        ) }
      </Link>
      {/*  Discount Ribbon at left top corner */ }
      { product.onSale.isOnSale && (
        <div
          className="absolute top-12 left-12 translate-x-[-50%] -translate-y-1/2 border border-whiteGrey z-10 flex items-center justify-center w-full h-12 bg-primary transform -rotate-45">
          <p className="text-white font-custom text-lg font-[500]">-{ product.onSale.discount * 100 }%</p>
        </div>
      ) }
    </div>
  );
}

export default ProductThumb;
