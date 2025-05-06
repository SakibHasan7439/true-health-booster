import React from 'react';

const CheckoutField = () => {
    return (
        <div className="bg-white rounded-xl shadow-md w-full">
      <h2 className="md:text-[20px] p-4 font-medium bg-[#F8F7F0] text-primary-color mb-6">Total Cart</h2>

      <div className="space-y-4 mb-6 p-6">
        <div className="flex justify-between text-primary-color">
          <span className='text-[16px] font-medium'>Subtotal</span>
          <span className='text-[16px] font-medium text-[#32BADE]'>$450.00</span>
        </div>
        <div className="flex justify-between text-gray-700">
          <span className='text-[16px] font-medium'>Discount</span>
          <span>------</span>
        </div>
        <div className="border-t pt-4 flex justify-between text-lg">
          <span className='text-[16px] font-medium'>Total Amount</span>
          <span className='text-[16px] font-medium text-[#32BADE]'>$450.00</span>
        </div>
      </div>
      <div className="mb-6 p-6">
        <div className="flex items-center gap-2">
        <label className="block text-sm text-[14px] font-medium">
          Coupon
        </label>
          <input
            id="coupon"
            type="text"
            placeholder="coupon code"
            className="w-full px-3 py-2 text-sm] border border-gray-300 rounded-sm"
          />
          <button
            className="bg-[#32BADE] text-white px-4 py-2 cursor-pointer rounded-sm hover:bg-[#3a6976] transition"
          >
            Apply
          </button>
        </div>
      </div>

      <button className="w-full bg-[#32BADE] text-white py-3 rounded-b-md font-semibold cursor-pointer transition">
        Proceed To Checkout
      </button>
    </div>
    );
};

export default CheckoutField;