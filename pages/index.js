import Image from "next/image";
import localFont from "next/font/local";
import Slider from "@/components/slider";
import { useState } from "react";
import { MongoClient } from "mongodb";



export default function Home(props) {
  console.log(props);


  return (
    <><Slider/></>
  );
}

export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://savide:Saeide0935@shopping.oebem.mongodb.net/shop?retryWrites=true&w=majority'
  );


      // Choose a name for your database
      const database = client.db("shop");

      // Choose a name for your collection
      const collection = database.collection("products");
      const allData = await collection.find().toArray();
      client.close();

    return{
      props:{
        data: allData.map(dataa =>({
          title: dataa.title,
          img: dataa.img,
          desc: dataa.desc,
          size: dataa.size,
          color: dataa.color,
          inStock: dataa.inStock,
          price: dataa.price,
          categories: dataa.categories,
          id: dataa._id.toString()
        }))
      },
      revalidate: 1
    }
}
