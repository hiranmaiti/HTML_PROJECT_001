
// slide bar

let img= document.querySelector("pic");

let btn= document.querySelectorAll("button");
let imgNum=0;
let imgArray= [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/AmazonPay/Travel/Flights/JuneOffer/PC_Hero_1500x600_CBCC-V1._CB602089342_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/camera/hero/26thJune/Audio/Bestselling_Tallhero_3000x1200._CB602562577_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/BVD_B2C/Hero/HeroBanner3_3000x1200_1606._CB602282467_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/junatf23/25thUHI/upd3/MA_3000._CB602601039_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Beauty/COOP/June/WRS-Makeup-PClj._CB602301612_.jpg",
]
btn[1].addEventListener("click",   
function() {
    if (imgNum===0) {
        imgNum=imgArray.length-1;
    } else {
        imgNum--;
    }
    pic.setAttribute("src",imgArray[imgNum]);
})

btn[2].addEventListener("click",
function() {
    if (imgNum===imgArray.length-1) {
        imgNum=0;
    } else {
        imgNum++;
    }
    pic.setAttribute("src",imgArray[imgNum]);
});



// Add to Cart


let btnCart = document.getElementsByClassName("button-41")

function addCart () {
    alert("Added to cart")
}
for (let i = 0 ; i < btnCart.length; i++) {
    btnCart[i].addEventListener('click' , addCart , false ); 
 }






// let productData = [
//     {
//         brand: "Gearbest",
//         name: "AI Smart Gateway",
//         price: "$628.00",
//         productID: "product-1",
//         catagory: "Router",
//         img: "https://gearbest.net/u_file/2303/20/products/Ai-Smart-Gateway-f-1-1676.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
//     },
//     {
//         brand: "ORTUR",
//         name: "ORTUR Laser Master 2 S2-LF 24V Laser Engraver DIY Laser Engraving Cutting Machine for Wood and Metal",
//         price: "$339.00",
//         productID: "product-2",
//         catagory: "Laser Machine",
//         img: "https://gearbest.net/u_file/2212/14/products/dc01e569e5.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
//     },
//     {
//         brand: "ORTUR",
//         name: "ORTUR Laser Master 2 Pro S2 LU2-10A Laser Engraving Cutting Machine 10W 15000mm/Min Laser Engraver",
//         price: "$519.00",
//         productID: "product-2",
//         catagory: "Laser Printer",
//         img: "https://gearbest.net/u_file/2212/14/products/0472ef5a40.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
//     },
//     {
//         brand: "ORTUR",
//         name: "Ortur LU2-10A Laser Module Ture 10W Optical Power For Laser Master 2 S2/ 2 Pro S2 Engraving Cutting Machine",
//         price: "$259.00",
//         productID: "product-3",
//         catagory: "Cutting Machine",
//         img: "https://gearbest.net/u_file/2301/05/products/61hNIJYxnqL-21d9.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
//     },
//     {
//         brand: "ORTUR",
//         name: "ORTUR Laser Master 2 Pro S2 Laser Engraver 10000mm/min 5500mW Laser Engraving Cutting Machine",
//         price: "$399.00",
//         productID: "product-4",
//         catagory: "Laser Machine",
//         img: "https://gearbest.net/u_file/2212/14/products/424aa9e3c6.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_500,w_500",
//     },
//     {
//         brand: "Gearbest",
//         name: "Wireless Android Auto Car Adapter Android Auto Dongle For Vw Mercedes Audi Citroe Lexus Jeep Hyundai Kia Mazda Peugeot - Car Ai Box - Gearbest",
//         price: "$64.46",
//         productID: "product-5",
//         catagory: "Wireless Android Auto Car Adapter",
//         img: "https://gearbest.net/u_file/2303/28/products/-1-604c.jpg?x-oss-process=image/format,webp/resize,m_lfit,h_240,w_240",
//     },
//     {
//         brand: "HP",
//         name: "HP Laptop 15s, Intel Celeron N4500, 15.6 inch(39.6cm) HD Laptop (8GB RAM,512GB SSD,Intel UHD Graphics,Du...",
//         price: "₹30,490",
//         productID: "product-6",
//         catagory: "Laptop",
//         img: "https://m.media-amazon.com/images/I/71RLItr7I8L._AC_UY327_FMwebp_QL65_.jpg",
//     },
//     {
//         brand: "DELL",
//         name: "Dell Vostro 3425 Laptop, AMD Ryzen 5-5500U/8GB/512GB/14.0 (35.56cm) FHD, TÜV Rheinlan",
//         price: "₹41,990",
//         productID: "product-7",
//         catagory: "Laptop",
//         img: "https://m.media-amazon.com/images/I/51u9Q4IEnsL._AC_UY327_FMwebp_QL65_.jpg",
//     },
//     {
//         brand: "HP",
//         name: "HP Laptop 15s, 12th Gen Intel Core i7-1255U, 15.6 inch(39.6cm)FHD Laptop(16GB RAM,512GB SSD,Intel Iris...",
//         price: "₹69,990",
//         productID: "product-8",
//         catagory: "Laptop",
//         img: "https://m.media-amazon.com/images/I/81aTWbBrR5L._AC_UY327_FMwebp_QL65_.jpg",
//     },
//     {
//         brand: "HP",
//         name: "HP Laptop 15, 11th Gen Intel Core i5-1155G7, 15.6-inch (39.6 cm), FHD, 16GB DDR4, 512GB SSD, Intel Iris Xᵉ Graphics, Backlit KB, Dual Speakers (Win 11, MSO 2021, Silver, 1.69 kg), fr4001TU...",
//         price: "₹55,990",
//         productID: "product-10",
//         catagory: "Laptop",
//         img: "https://m.media-amazon.com/images/I/71lfHAwzsGL._AC_UY327_FMwebp_QL65_.jpg",
//     },
//     {
//         brand: "HP",
//         name: "Hp Pavilion X360 11Th Gen Intel Core I3 14 Inches Fhd Multitouch 2-in-1 Laptop(8Gb Ram/512Gb...",
//         price: "₹53,990",
//         productID: "product-11",
//         catagory: "Laptop",
//         img: "https://m.media-amazon.com/images/I/51VZIz+fngL._AC_UY327_QL65_.jpg",
//     },
//     {
//         brand: "SAMSUNG",
//         name: "Samsung Galaxy S23 Ultra 5G (Green, 12GB, 256GB Storage)",
//         price: "₹1,24,999",
//         productID: "product-12",
//         catagory: "Mobile",
//         img: "https://m.media-amazon.com/images/I/61VfL-aiToL._AC_UY327_FMwebp_QL65_.jpg",
//     },
//     {
//         brand: "APPLE",
//         name: "Apple iPhone 14 Pro Max (128 GB) - Deep Purple",
//         price: "₹1,27,999",
//         productID: "product-13",
//         catagory: "Mobile",
//         img: "https://m.media-amazon.com/images/I/71yzJoE7WlL._AC_UY327_FMwebp_QL65_.jpg",
//     },
//     {
//         brand: "ASUS",
//         name: "ASUS ROG Strix G17 (2022), 17.3-inch (43.94 cms) FHD 144Hz, AMD Ryzen 7-6800H, RTX 3050 4GB Graphics,",
//         price: "₹87,990",
//         productID: "product-14",
//         catagory: "Latop",
//         img: "https://m.media-amazon.com/images/I/81ahHX9wU1L._AC_UY327_FMwebp_QL65_.jpg",
//     },
//     {
//         brand: "ASUS",
//         name: "Asus ROG Ally Console 7' 120Hz Gaming Handheld - AMD Z1 Extreme Processor - 512GB - White",
//         price: "₹84,999",
//         productID: "product-15",
//         catagory: "Console",
//         img: "https://m.media-amazon.com/images/I/612qftKBfKL._AC_UY327_FMwebp_QL65_.jpg",
//     },
//     {
//         brand: "REDGEAR",
//         name: "Redgear Cosmo 7,1 Usb Gaming Wired Over Ear Headphones With Mic With Virtual Surround Sound,50Mm Driver, Rgb Leds & Remote Control(Black)",
//         price: "₹1,599",
//         productID: "product-16",
//         catagory: "Headphone",
//         img: "https://m.media-amazon.com/images/I/71PhCZEGH7L._SY450_.jpg",
//     },
//     {
//         brand: "OPPO",
//         name: "Oppo Pad Air 4 GB RAM 64 GB ROM 10.36 inch with Wi-Fi Only Tablet (Grey)",
//         price: "₹16,999",
//         productID: "product-17",
//         catagory: "Ipad",
//         img: "https://m.media-amazon.com/images/I/513FD4w8hGL._SY450_.jpg",
//     },
//     {
//         brand: "APPLE",
//         name: "Apple 2021 10.2-inch (25.91 cm) iPad with A13 Bionic chip (Wi-Fi, 64GB) - Space Grey (9th Generation)",
//         price: "₹30,900",
//         productID: "product-18",
//         catagory: "Ipad",
//         img: "https://m.media-amazon.com/images/I/61NGnpjoRDL._AC_UY327_FMwebp_QL65_.jpg",
//     },

// ]






// let container = document.getElementById("container-1");


// function displayProducts(productData){
//     container.innerHTML = "";
//     productData.forEach(function(el){
//         let product = document.createElement("div")
//         product.setAttribute("id", "product");
//         let img = document.createElement("img");
//         img.setAttribute("id", "img-1");
//         img.src = el.img;

//         let name = document.createElement("h3")
//         name.innerText = el.name

//         let brand = document.createElement("h4")
//         brand.innerText = el.brand


//         let price = document.createElement("p")
//         price.innerText = el.price
        
//         let productBtn = document.createElement("div")
//         productBtn.setAttribute("id", "productBtn");

//         let addToCart = document.createElement("button")
//         addToCart.innerText = "Add to cart"
//         addToCart.setAttribute("id", "btnCart")
//         addToCart.addEventListener("click", function(){
//           alert("Added to Cart")
//         })

//         productBtn.append(addToCart);
//         product.append(img,name,brand,price,productBtn);
//         container.append(product);
//     })
// }
// displayProducts(productData);