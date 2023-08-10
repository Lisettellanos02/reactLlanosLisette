//import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
  setDoc,
  writeBatch
} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCHmBUcC4YP1uoSw95LIHo9CAx7kRPwn9g",
  authDomain: "react43305.firebaseapp.com",
  projectId: "react43305",
  storageBucket: "react43305.appspot.com",
  messagingSenderId: "384859310967",
  appId: "1:384859310967:web:3bad2593d267b8ecc02f72"
};


const appFirebase = initializeApp(firebaseConfig);

const db = getFirestore(appFirebase);

// 2 Implementar async function getData()

async function getData() {
  const productsRef = collection(db, "products");
  const documentsSnapshot = await getDocs(productsRef);
  const documents = documentsSnapshot.docs;
  const docsData = documents.map(
    (item) => {
      return { ...item.data(), id: item.id };
    }
    /* {let productFullData = item.data();
    productFullData.id = item.id;
    return productFullData; }*/
  );
  return docsData;
}

//  3.Implementar getProductData
async function getProductData(id) {
  const docRef = doc(db, "products", id);
  const docSnapshot = await getDoc(docRef);

  if (docSnapshot.exists()) {
    return { ...docSnapshot.data(), id: docSnapshot.id };
  } else {
    throw new Error("No encontramos ese producto.");
  }
}

// * 4 Implementar getCategoryData
async function getCategoryData() {
  const productsRef = collection(db, "products");
  // cambiamos esto
  const q = query(productsRef, where("price", ">=", 200));
  const documentsSnapshot = await getDocs(q);

  const documents = documentsSnapshot.docs;

  return documents.map((item) => ({ ...item.data(), id: item.id }));
}

async function createOrder(orderData){
  const collectionRef = collection(db, "orders")
  const docCreated = await addDoc(collectionRef, orderData)

  return(docCreated.id)
}


async function getOrder(id){
  const docRef = doc(db, "orders", id);
  const docSnapshot = await getDoc(docRef);

  return { ...docSnapshot.data(), id: docSnapshot.id };
 

}


async function _exportProducts(){
  const productos = [
    {
        title: "Ambo Arciel",
        id: 1,
        limit: 5,
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
        limit: 5,
        description: "Camiseta de fútbol de alta calidad",
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
        stock: 2,
        description: "Ambo Arciel de dama entallado, disponible en color fucsia",
        img: "/assets/amboRosa.JPG",
        price: 9000,
        category: "lisos",
      },
      {
        title: "Cofia",
        id: 10,
        stock: 4,
        description: "Ambo Arciel de dama entallado, disponible en color fucsia",
        img: "/assets/cofia1.JPG",
        price: 2300,
        category: "accesorios",
      },
      {
        title: "Cofia",
        id: 11,
        stock: 3,
        description: "Ambo Arciel de dama entallado, disponible en color fucsia",
        img: "/assets/cofia2.JPG",
        price: 2800,
        category: "accesorios",
      },
      {
        title: "Cofia y Barbijo",
        id: 12,
        stock: 5,
        description: "Ambo Arciel de dama entallado, disponible en color fucsia",
        img: "/assets/cofia3.JPG",
        price: 3000,
        category: "accesorios",
      },
    
  ];

  for(let item of productos){   
    const collectionRef = collection(db, "products")
    const docCreated = await addDoc(collectionRef, item);
    console.log("Doc created with id:", docCreated.id)
  }
}


async function _exportProductsWithBatch(){
  const productos = [
    {
        title: "Ambo Arciel",
        id: 1,
        limit: 5,
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
        limit: 5,
        description: "Camiseta de fútbol de alta calidad",
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
        stock: 2,
        description: "Ambo Arciel de dama entallado, disponible en color fucsia",
        img: "/assets/amboRosa.JPG",
        price: 9000,
        category: "lisos",
      },
      {
        title: "Cofia",
        id: 10,
        stock: 4,
        description: "Ambo Arciel de dama entallado, disponible en color fucsia",
        img: "/assets/cofia1.JPG",
        price: 2300,
        category: "accesorios",
      },
      {
        title: "Cofia",
        id: 11,
        stock: 3,
        description: "Ambo Arciel de dama entallado, disponible en color fucsia",
        img: "/assets/cofia2.JPG",
        price: 2800,
        category: "accesorios",
      },
      {
        title: "Cofia y Barbijo",
        id: 12,
        stock: 5,
        description: "Ambo Arciel de dama entallado, disponible en color fucsia",
        img: "/assets/cofia3.JPG",
        price: 3000,
        category: "accesorios",
      },
     
  ];

  const batch = writeBatch(db); 

  productos.forEach( producto => {
    const newId = producto.id
    delete producto.id;
    const newDoc = doc(db, "products", `1${newId}`)
    batch.set(newDoc, producto);    
  })
 
  const data = await batch.commit()  
  console.log("Listo!", data)
}

export { getData, getOrder, getProductData, getCategoryData, createOrder, _exportProducts, _exportProductsWithBatch};