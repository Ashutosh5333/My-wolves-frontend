import React, { useEffect, useState } from "react";
import { Box ,Input , Divider,useToast ,Text, Button,} from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux";

import "./productpage.css";
import ProductCard from "../Components/ProductCard";
import { ADDProducts, getProducts } from "../Redux/action";

const ProductPage = () => {
  const dispatch = useDispatch()
  const toast = useToast()
  const [title,SetTitle] = useState("");
  const [description,SetDescription] = useState("");
  const products = useSelector((store) => store.products);
      
    useEffect(() => {
      dispatch(getProducts);
    }, []);

   const payload ={
       title,
       description
   }



  const handleSubmit = () =>{
      dispatch(ADDProducts(payload))
      .then((res) => {
        if(res.type === "ADD_PRODUCT_SUCCESS" && res.payload.msg !== "Post sucessfully" ){
          toast({
            position:"top",
            status : "error",
            title:res.payload.err
           })
           dispatch(getProducts);
         }
         else{
          toast({
            position:"top",
            status : "success",
            title:res.payload.msg
           })
         }
      })
      .catch((err) => {
        console.log(err);
        toast({
          position : 'top',
          colorScheme : 'red', 
          status : "error",
          title:err
        })
      });

  }
  
  return (
    <>
         <Box  maxH="500px">
         
         <Box width="90vw" m="auto" display="flex" justifyContent={"space-between"} gap="5" mt="10"> 
           <Text fontSize={{base:"1.5rem",md:"1.5rem",lg:"2rem" }} fontWeight={"600"}> Publish A Post </Text>

           <Button p="4"  onClick={handleSubmit}  colorScheme='facebook'  fontSize={"1.2rem"} fontWeight={"600"}> Publish </Button>
         </Box>

         <Divider color={"gray"} width="90vw" m="auto" mt="10" />

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} name="title"
           onChange={(e) => SetTitle(e.target.value)}
           fontSize={{base:"1.5rem",md:"1.5rem",lg:"3.4rem" }} placeholder='Title' />
       </Box>

       <Box  width="80vw" m="auto"  mt="10">
          <Input variant={"unstyled"} 
            onChange={(e) => SetDescription(e.target.value)}
          name="description" fontSize={{base:"1.5rem",md:"1.5rem",lg:"2rem" }} placeholder='Description' />
       </Box>

       

    
     </Box>
       

      <Box mt="20" >
          <ProductCard  />;
      </Box>

    </>
  )

};

export default ProductPage;
