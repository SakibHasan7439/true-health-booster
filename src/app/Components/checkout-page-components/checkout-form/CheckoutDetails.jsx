"use client"

import useFetch from "@/hooks/useFetch";

const CheckoutDetails = () => {
    const {data, error, loading} = useFetch("/dummy-json-data/checkoutItems.json");
    return (
        <div className="border rounded-lg lg:rounded-2xl">
            <h2 className="bg-[#F8F7F0] mb-4 rounded-t-2xl text-left text-sm font-semibold text-primary-color p-4">Checkout</h2>
            <div className="px-2 xl:px-4 py-2">
            <table className="p-4" style={{ borderSpacing: "0 20px", borderCollapse: "collapse" }}>
                <thead className="text-[12px] lg:text-[16px]">
                    <tr>
                        <th className="border-dashed border-b-2 px-3 pb-3 text-left ">Product</th>
                        <th className="text-left border-dashed border-b-2 pb-3 pr-8">Quantity</th>
                        <th className="border-dashed border-b-2 pb-3 px-0">SubTotal</th>
                    </tr>
                </thead>
                <tbody className="text-sm lg:text-[16px]">
                    {
                        data.map((item) => <tr className="text-[#11B091]" key={item?.id}>
                            <td className="pt-[14px] text-[12px] lg:text-[16px]">{item?.product_name}</td>
                            <td className="pt-[14px] text-[12px] lg:text-[16px] pb-3 text-center">{item?.quantity}</td>
                            <td className="text-center text-[12px] lg:text-[16px]">{item?.price}</td>
                        </tr>
                        )
                    }
                    <tr className="border-b border-dashed pb-2">
                        <td className="lg:py-5 py-3 text-[12px] lg:text-[16px]">SubTotal</td>
                        <td className="pl-3"></td>
                        <td className="text-center text-[12px] lg:text-[16px]">450</td>
                    </tr>
                    <tr className="border-b border-dashed pb-2">
                        <td className="text-[12px] py-3 lg:text-[16px]">Discount</td>
                        <td></td>
                        <td className="text-center py-3">-------</td>
                    </tr>
                    <tr className="pt-10">
                        <td className="lg:py-5 text-[12px] lg:text-[16px]">Total Amount</td>
                        <td></td>
                        <td className="text-center">$450.00</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default CheckoutDetails;