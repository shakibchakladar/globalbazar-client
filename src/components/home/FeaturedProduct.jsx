import ProductCard from "../ProductCard";

const FeaturedProduct = () => {
    return (
        <div  className="grid md:grid-cols-3 gap-3">
            <ProductCard image={'https://img.drz.lazcdn.com/static/bd/p/2f5f9c8b778b86863b723094fbae38f1.jpg_720x720q80.jpg_.webp'} title={"T-shirt"} price={'50'}/>
            <ProductCard image={'https://img.drz.lazcdn.com/static/bd/p/d29350452f0aac75a2e78c3260e2245b.jpg_200x200q80.jpg_.webp'} title={'One plus'} price={'120'}/>
            <ProductCard image={'https://img.drz.lazcdn.com/static/bd/p/758a1c0cb5f182f64724b6e11678896a.jpg_200x200q80.jpg_.webp'} title={'Special watch'} price={'80'}/>
            <ProductCard image={'https://img.drz.lazcdn.com/static/bd/p/492944ea4aa9dd5e25e0f94d11f6ed75.jpg_200x200q80.jpg_.webp'} title={'Soe'} price={'20'}/>
            <ProductCard image={'https://img.drz.lazcdn.com/static/bd/p/d29350452f0aac75a2e78c3260e2245b.jpg_200x200q80.jpg_.webp'} title={'One plus'} price={'120'}/>
            <ProductCard image={'https://img.drz.lazcdn.com/static/bd/p/d29350452f0aac75a2e78c3260e2245b.jpg_200x200q80.jpg_.webp'} title={'One plus'} price={'120'}/>
        </div>
    );
};

export default FeaturedProduct;