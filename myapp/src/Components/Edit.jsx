import React from 'react'
import { Box, Input } from '@chakra-ui/react';

const Edit = () => {
    const [post,SetPost] = useState({
        description:""
     })

     const handleChange = (e) =>{
        const {name,value}= e.target
        SetPost({...post,[name]:value})
     }


  return (
    <>
    <Box width={{base:"60vw",md:"80vw",lg:"80vw" }} m="auto"  mb="10">
        <Input  placeholder='Updated Content'
         name="Description"
         onChange={handleChange}
          fontSize={"1.2rem"} variant={"unstyled"} 
               mt="6" mb="6" 
         />
     </Box>
    
    
    </>
  )
}

export default Edit