
function Products() {

    const products = [
        { "title": "Fujifilm X100T 16 MP Digital Camera (Silver)", cost: 520, imageurl: "https://coloshop-template.vercel.app/images/product_1.png" },
        { "title": "Samsung CF591 Series Curved 27-Inch FHD Monitor", cost: 610, imageurl: "https://coloshop-template.vercel.app/images/product_2.png" },
        { "title": "Blue Yeti USB Microphone Blackout Edition", cost: 120, imageurl: "https://coloshop-template.vercel.app/images/product_3.png" },
        { "title": "DYMO LabelWriter 450 Turbo Thermal Label Printer", cost: 410, imageurl: "https://coloshop-template.vercel.app/images/product_4.png" },
        { "title": "Pryma Headphones, Rose Gold & Grey", cost: 180, imageurl: "https://coloshop-template.vercel.app/images/product_5.png" },
        { "title": "Fujifilm X100T 16 MP Digital Camera (Silver)", cost: 520, imageurl: "https://coloshop-template.vercel.app/images/product_6.png" },
        { "title": "Fujifilm X100T 16 MP Digital Camera (Silver)", cost: 520, imageurl: "https://coloshop-template.vercel.app/images/product_7.png" },
        { "title": "Samsung CF591 Series Curved 27-Inch FHD Monitor", cost: 610, imageurl: "https://coloshop-template.vercel.app/images/product_8.png" },
        { "title": "Blue Yeti USB Microphone Blackout Edition", cost: 120, imageurl: "https://coloshop-template.vercel.app/images/product_9.png" },
        { "title": "DYMO LabelWriter 450 Turbo Thermal Label Printer", cost: 410, imageurl: "https://coloshop-template.vercel.app/images/product_10.png" },

    ]



    return (
    <div className="main-container">
           { products.map((element,index)=>
            <div className="container2">
                <img src={element.imageurl} alt="" width="160px"/><br /><br />
                <p>{element.title}</p>
                <p id="product-price">${element.cost}</p>
                
            </div>)}
        
    </div>
    );
};

export default Products;
