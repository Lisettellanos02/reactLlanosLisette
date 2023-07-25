function getData() {
    return new Promise((resolve, reject) => {
        const productos = [
        {
            title:"Ambo Lila",
            id: 1,
            limit: 5,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"http://mla-s1-p.mlstatic.com/843559-MLA41421157195_042020-O.jpg",
            price: 9000,
        },
        {
            title:"Ambo Azul",
            id: 2,
            limit: 8,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"https://http2.mlstatic.com/D_NQ_NP_862349-MLA31115409909_062019-W.jpg",
            price: 11000,
        },
        {
            title:"Ambo Rosa",
            id: 3,
            limit: 3,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"https://i.pinimg.com/originals/42/c2/ee/42c2eec124c57ed3fa5006a2fa0eb337.jpg",
            price: 8500,
        },
        {
            title:"Ambo Negro",
            id: 4,
            limit: 6,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"https://i.pinimg.com/474x/2d/f0/e0/2df0e0d147e2f610c6000a1be61ceaad--medical-scrubs-nursing-scrubs.jpg",
            price: 9500,
        },
        {
            title:"Ambo Amarillo",
            id: 5,
            limit: 7,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"https://i.pinimg.com/474x/2d/f0/e0/2df0e0d147e2f610c6000a1be61ceaad--medical-scrubs-nursing-scrubs.jpg",
            price: 10500,
        }

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
            img: "/assets/img/ambo lila",
            price: 9000,
        },
        {
            title:"Ambo Azul",
            id: 2,
            limit: 8,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"",
            price: 11000,
        },
        {
            title:"Ambo Rosa",
            id: 3,
            limit: 3,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"",
            price: 8500,
        },
        {
            title:"Ambo Negro",
            id: 4,
            limit: 6,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"",
            price: 9500,
        },
        {
            title:"Ambo Amarillo",
            id: 5,
            limit: 7,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"",
            price: 10500,
        },
        {
            title:"Ambo Rojo",
            id: 6,
            limit: 8,
            description: "Hermoso ambo medico de excelente calidad, ultimos diseños disponibles a un precio de promocion",
            img:"",
            price: 10500,
        },

        ];

    setTimeout(() => {
     resolve(productos[0]);
    }, 2000);
    });
}

export default getData;
