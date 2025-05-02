import ImageSlider from "./ImageSlider";

const DetailsSection = () => {
    const productData = {
        images: [
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png',
            'https://i.ibb.co.com/vx5NwzVF/image-6-1.png'
        ]
    }
    return (
        <div>
            <ImageSlider data={productData}/>
        </div>
    );
};

export default DetailsSection;