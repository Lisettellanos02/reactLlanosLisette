function getData() {
    return new Promise((resolve, reject) => {
        const productos = [
        {
            title:"Ambo Lila",
            id: 1,
            limit: 5,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboLila.jpg",
            price: 9000,
        },
        {
            title:"Ambo Azul",
            id: 2,
            limit: 8,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboAzul.jpg",
            price: 11000,
        },
        {
            title:"Ambo Rosa",
            id: 3,
            limit: 3,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboRosa.jpg",
            price: 8500,
        },
        {
            title:"Ambo Negro",
            id: 4,
            limit: 6,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboNegro.jpg",
            price: 9500,
        },
        {
            title:"Ambo Amarillo",
            id: 5,
            limit: 7,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboAmarillo.jpg",
            price: 10500,
        },
        {
            title:"Ambo Rojo",
            id: 6,
            limit: 8,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboRojo.jpg",
            price: 12000,
        },

        ];

    setTimeout(() => {
        const date = new Date().toLocaleDateString;
        resolve(productos, date);
    }, 2000);
    });
}

export function getProductData() {
    return new Promise((resolve, reject) => {
        const productos = [
        {
            title:"Ambo Lila",
            id: 1,
            limit: 5,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img: "/assets/amboLila.jpg",
            price: 9000,
        },
        {
            title:"Ambo Azul",
            id: 2,
            limit: 8,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboAzul.jpg",
            price: 11000,
        },
        {
            title:"Ambo Rosa",
            id: 3,
            limit: 3,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboRosa.jpg",
            price: 8500,
        },
        {
            title:"Ambo Negro",
            id: 4,
            limit: 6,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboNegro.jpg",
            price: 9500,
        },
        {
            title:"Ambo Amarillo",
            id: 5,
            limit: 7,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboAmarillo.jpg",
            price: 10500,
        },
        {
            title:"Ambo Rojo",
            id: 6,
            limit: 8,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"/assets/amboRojo.jpg",
            price: 12000,
        },

        ];

    setTimeout(() => {
     resolve(productos[0]);
    }, 2000);
    });
}

export default getData;
