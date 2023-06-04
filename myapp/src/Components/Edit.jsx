import React, { useEffect, useState } from 'react'
import { Box, Flex, HStack, Button, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { EditProducts, SingleProducts } from '../Redux/action';


const Edit = () => {
  const toast = useToast()
  const dispatch = useDispatch()
  const [single ,Setsingle] = useState()
     const {id} = useParams()

        useEffect(() =>{
         dispatch(SingleProducts(id))
         .then((res) =>{
          //  console.log(res.payload)
           Setsingle(res.payload)
         })
         .catch((err)=>{
           console.log(err)
         })
        },[id])
      

    const [post,SetPost] = useState({
      description:""
     })

     const handleChange = (e) =>{
        const {name,value}= e.target
        SetPost({...post,[name]:value})
     }

     const handleupdate = (_id) =>{
      dispatch(EditProducts(_id,post))
         .then((res) =>{
            console.log(res)
               if(res.type == "EDIT_PRODUCT_SUCCESS" && res.payload.msg == "data updated sucessfully"){
                 toast({
                   position:"top",
                   status : "success",
                   title:res.payload.msg
                  })
               }  
               else{
                 toast({
                   position:"top",
                   status : "error",
                   title:res.payload.msg
                  })
               }
          }).catch((err) =>{
             console.log(err)
          })

     }


  return (
    <>{

      single ? 
      <Box  width={{base:"80vw",md:"90vw",lg:"90vw" }}  m="auto" mt="10" p="6" spacing={3} > 
      <Flex
          justifyContent="space-between"
          direction={{ base: "column", sm: "row" }}
          gap={{ base: 5, sm: 0 }}
        >
          <HStack spacing={5} mb="5">
            <Heading > Edit Post </Heading>
          </HStack>
          <hr />
  
          <HStack spacing={5} mb="5">
             <Button colorScheme='facebook'  fontSize={"1.2rem"} fontWeight={"600"} onClick={() =>handleupdate(single?._id)}>Updated Post</Button>
          </HStack>
        </Flex> 

        <Box fontSize={"1.2rem"} letterSpacing={2} textAlign={"start"} spacing={5} > 
         <Text textAlign="center"> 
           {single?.description} 
         </Text>

</Box>

</Box> :  <div> loading ......... </div>

    }
      

    
    <Box width={{base:"60vw",md:"80vw",lg:"80vw" }} m="auto"  mb="10">
        <Input  placeholder='Updated Description'
         name="description"
         onChange={handleChange}
          fontSize={"1.2rem"} variant={"unstyled"} 
               mt="6" mb="6" 
         />
     </Box>
    
    
    </>
  )
}

export default Edit