import Image from "next/image";

const ProductsCard = ({product, className, className2}) => {
    return (
        <div className="text-primary-color mb-4">
            <Image 
                width={312}
                height={312}
                src={product?.image}
                className={`mb-2 md:mb-4 xl:mb-6 ${className}`}
                alt="product image"
            />
            <h4 className="md:text-lg font-semibold hover:text-[#32BADE] xl:text-2xl pb-2 xl:pb-4">{product?.title}</h4>
            <p className={`cut-text lg:text-[12px] ${className2} font-medium xl:text-[15px]`}>{product?.description}</p>
        </div>
    );
};

export default ProductsCard;