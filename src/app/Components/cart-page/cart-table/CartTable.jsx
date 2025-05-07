"use client"
import useFetch from "@/hooks/useFetch";
import { X, XCircle } from "lucide-react";
import Image from "next/image";

const CartTable = () => {
    const {data, error, loading} = useFetch("/dummy-json-data/cartProduct.json");
    console.log(data);
    return (
        <div className="overflow-auto"> 
          <table className="w-full divide-y">
        <thead className="bg-[#F8F7F0] rounded-2xl text-left text-sm font-semibold text-primary-color">
          <tr>
            <th className="p-4">Product</th>
            <th className="p-4">Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Total</th>
          </tr>
        </thead>
        <tbody className="text-sm border divide-y divide-gray-200">
          {data.map((item) => (
            <tr key={item.id}>
              <td className="p-4">
                <div className="flex items-center space-x-8 xl:space-x-12">
                    <div className="flex items-center gap-2 w-20 h-20">
                    <button className=" bg-white">
                        <X size={18} />
                    </button>
                        <Image
                        width={52}
                        height={52}
                        src={item.image}
                        alt={item.product}
                        className="w-[20px] h-[20px] xl:w-[52px] object-cover xl:h-[52px]"
                        />
                        
                    </div>
                    <div className="font-medium cut-text text-primary-color text-sm xl:text-[16px]">
                        <div>{item.product}</div>
                        <div>{item.used_for}</div>
                    </div>
                </div>
              </td>
              <td className="p-4 text-[#32BADE]">${item.price}</td>
              <td className="p-4">
                <div className="flex border justify-center p-2 rounded-md items-center">
                  <button
                    onClick={() => handleQuantityChange(item.id, -1)}
                  >
                    −
                  </button>
                  <input
                    type="text"
                    readOnly
                    value={item.quantity}
                    className="w-12 text-center"
                  />
                  <button
                    onClick={() => handleQuantityChange(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="p-4 text-[#32BADE]">${item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
    );
};

export default CartTable;