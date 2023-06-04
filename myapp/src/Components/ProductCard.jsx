import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table,  Thead,  Tbody, Button,   Tr,  Th,  Td,    TableContainer,} from '@chakra-ui/react'
import { DelProducts, getProducts } from "../Redux/action";
import "./productcard.css"

const ProductCard = ({ item }) => {
      const dispatch = useDispatch();
    const products = useSelector((store) => store.products);
      
    useEffect(() => {
      dispatch(getProducts);
    }, []);


    const del = (id) => {
       dispatch(DelProducts(id))
       .then((r)=> dispatch(getProducts))
    }


    return (
       <> 
        <TableContainer w="90%" m="auto"
        justifyContent="center"   scroll="none"
        >
  <Table variant='simple' size='2xl' m="auto">
    <Thead>
      <Tr>
        <Th>Description</Th>
        <Th>Title</Th>
        <Th> Edit </Th>
        <Th> Delete </Th>
      </Tr>
    </Thead>
    {
      products.length>0 && products.map((el) =>{
        return  <Tbody key={el._id}>
      <Tr>
        <Td>{el.description}</Td>
        <Td>{el.title} </Td>
        <Td>
         <Button > Edit </Button>
        </Td>
        <Td>
         <Button onClick={() =>del(el._id)} color="red">Delete </Button>
        </Td>

      </Tr>
    </Tbody>

      })


    }
   
    
  </Table>
</TableContainer>
        
        </>
    );
};

export default ProductCard;
