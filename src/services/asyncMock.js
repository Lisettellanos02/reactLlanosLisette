const productos = [
    {
      title: "Ambo Arciel",
      id: 1,
      stock: 5,
      description: "Ambo Arciel de dama entallado, disponible en color lila",
      img: "/assets/amboLila.jpg",
      price: 8000,
      category: "lisos",
    },
    {
      title: "Ambo Arciel",
      id: 2,
      stock: 8,
      description: "Ambo Arciel de dama entallado, disponible en estampado mariposa",
      img: "/assets/amboMariposa.png",
      price: 11000,
      category: "estampados",
    },
    {
      title: "Ambo Arciel",
      id: 3,
      stock: 3,
      description: "Ambo Arciel de dama entallado, disponible en color negro",
      img: "/assets/amboNegro.jpg",
      price: 12000,
      category: "lisos",
    },
    {
      title: "Ambo Arciel",
      id: 4,
      stock: 2,
      description: "Ambo Arciel de dama entallado, disponible en estampado con detalles naranjas",
      img: "/assets/amboNaranja.WEBP",
      price: 15600,
      category: "estampados",
    },
    {
      title: "Ambo Arciel",
      id: 5,
      stock: 5,
      description: "Ambo Arciel de dama entallado, disponible en color azul",
      img: "/assets/amboAzul.jpg",
      price: 13500,
      category: "lisos",
    },
    {
      title: "Ambo Arciel",
      id: 6,
      stock: 8,
      description: "Ambo Arciel de dama entallado, disponible en estampado rosa pastel y blanco",
      img: "/assets/amboEstampado.jpg",
      price: 11700,
      category: "estampados",
    },
    {
      title: "Ambo Arciel",
      id: 7,
      stock: 3,
      description: "Ambo Arciel de dama entallado, disponible en color rojo",
      img: "/assets/amboRojo.jpg",
      price: 12800,
      category: "lisos",
    },
    {
      title: "Ambo Arciel",
      id: 8,
      stock: 2,
      description: "Ambo Arciel de dama entallado, disponible en multicolor rosa, blanco y celeste",
      img: "/assets/amboCo.WEBP",
      price: 10300,
      category: "estampados",
    },
    {
      title: "Ambo Arciel",
      id: 9,
      stock: 5,
      description: "Ambo Arciel de dama entallado, disponible en color fucsia",
      img: "/assets/amboRosa.JPG",
      price: 9000,
      category: "lisos",
    },
    {
      title: "Cofia",
      id: 10,
      stock: 4,
      description: "Hermosa cofia para quirofano marca Arciel",
      img: "/assets/cofia1.JPG",
      price: 2300,
      category: "accesorios",
    },
    {
      title: "Cofia",
      id: 11,
      stock: 3,
      description: "Hermosa cofia para quirofano marca Arciel",
      img: "/assets/cofia2.JPG",
      price: 2800,
      category: "accesorios",
    },
    {
      title: "Cofia y Barbijo",
      id: 12,
      stock: 5,
      description: "Hermosa cofia y barbijo para quirofano marca Arciel",
      img: "/assets/cofia3.JPG",
      price: 3000,
      category: "accesorios",
    },
  ];
  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const date = new Date().toLocaleDateString;
        resolve(productos, date);
      }, 2000);
    });
  }
  
  export function getProductData(idURL) {
    return new Promise((resolve, reject) => {
      const productRequested = productos.find(
        (item) => item.id === Number(idURL)
      );
  
      setTimeout(() => {
        resolve(productRequested);
      }, 2000);
    });
  }
  
  export function getCategoryData(categoryURL) {
    return new Promise((resolve, reject) => {
      const categoryRequested = productos.filter((item) => {
        return item.category.toLowerCase() === categoryURL.toLowerCase();
      });
  
      setTimeout(() => {
        resolve(categoryRequested);
      }, 2000);
    });
  }
  
  export default getData;