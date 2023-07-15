interface TotalsProps {
  discount: number;
  shippingCost: number;
  total: number;
  grandTotal: number;
}

function Totals({ discount, shippingCost, total, grandTotal }: TotalsProps) {
  return (
    <div className="w-full max-w-[1000px] flex flex-col justify-start items-start gap-5 mt-5">
      {/*  Cart Total*/ }
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 font-custom">Cart Total</p>
        <p className="text-base font-medium">{ total.toFixed(2) } &euro;</p>
      </div>
      {/*  Discount*/ }
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 font-custom">Discount</p>
        <p className="text-base font-medium">{ discount.toFixed(2) } &euro;</p>
      </div>
      {/*  Shipping Cost*/ }
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h4 font-custom flex justify-start items-center flex-wrap gap-2">Shipping Cost
          { shippingCost === 0 && (
            <span className="text-sm font-normal text-gray-400">(Will be calculated after you enter your address)</span>
          ) }
        </p>
        <p className="text-base font-medium whitespace-nowrap">{ shippingCost.toFixed(2) } &euro;</p>
      </div>
      {/* Separator */ }
      <div className="w-full border-b border-gray-200" />
      {/*  Grand Total*/ }
      <div className="w-full flex justify-between items-center gap-10">
        <p className="text-h3 font-custom">Order Total</p>
        <p className="text-lg font-medium">{ grandTotal.toFixed(2) } &euro;</p>
      </div>
    </div>
  );
}

export default Totals;
