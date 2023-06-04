import axios from "axios"
import * as types from "./actionTypes"

const getProductReq = () =>{
     return {
        type: types.GET_PRODUCTS_REQUEST
     }
} 
const getProductSucess = (payload) => {
     return {
        type :types.GET_PRODUCTS_SUCCESS,
        payload,
     }
}
const getProductFail = () => {
    return {
        type :types.GET_PRODUCTS_FAILURE
    }
}
// -------- add product ---------- 

const AddProductReq = () =>{
    return {
       type: types.ADD_PRODUCT_REQUEST,
    }
} 
const AddProductSucess = (payload) => {
    return {
       type :types.ADD_PRODUCT_SUCCESS,
       payload,
    }
}
const AddProductFail = () => {
   return { 
       type :types.ADD_PRODUCT_FAILURE
   }
}
// -------- Edit 

const EditProductReq = () =>{
    return {
       type: types.EDIT_PRODUCT_REQUEST
    }
} 
const EditProductSucess = (payload) => {
    return {
       type :types.EDIT_PRODUCT_SUCCESS,
       payload,
    }
}
const EditProductFail = () => {
   return {
       type :types.EDIT_PRODUCT_FAILURE
   }
}

// --------- delprodyct

const DelProductReq = () =>{
    return {
       type: types.DELETE_PRODUCT_REQUEST
    }
} 
const DelProductSucess = (payload) => {
    return {
       type :types.DELETE_PRODUCT_SUCCESS,
       payload,
    }
}
const DelProductFail = () => {
   return {
       type :types.DELETE_PRODUCT_FAILURE
   }
}


const getsingledataReq = () =>{
    return {
       type: types.SINGLE_PRODUCT_REQUEST
    }
 } 
 const getsingledataSucess = (payload) => {
    return {
       type :types.SINGLE_PRODUCT_SUCCESS,
       payload,
    }
 }
 const getsingledataFail = () => {
   return {
       type :types.SINGLE_PRODUCT_FAILURE
   }
 }


const  getProducts = (dispatch) => {
   dispatch(getProductReq())
   return axios.get(`http://localhost:8000/todo`)
    .then((r) => {
        dispatch(getProductSucess(r.data));
    }).catch((e)=> {
        dispatch(getProductFail())
    })
}

// ---------------

const  ADDProducts =(payload) => (dispatch) => {
    dispatch(AddProductReq())
    return axios.post(`http://localhost:8000/todo/create`,payload)
     .then((r) => {
      return   dispatch(AddProductSucess(r.data));
     }).catch((e)=> {
     return    dispatch(AddProductFail())
     })
 }

// -------------

const  EditProducts =(id,payload) => (dispatch) => {
    dispatch(EditProductReq())
    return axios.patch(`http://localhost:8000/todo/edit/${id}`,payload)
     .then((r) => {
  return      dispatch(EditProductSucess(r.data));
     }).catch((e)=> {
         dispatch(EditProductFail())
     })
 }

 
export  const  SingleProducts =(id) => (dispatch) => {
    dispatch(getsingledataReq())
    return axios.get(`http://localhost:8000/todo/${id}`)
     .then((r) => {
   return     dispatch(getsingledataSucess(r.data));
     }).catch((e)=> {
         dispatch(getsingledataFail())
     })
 }

//  --------------

const  DelProducts =(id) => (dispatch) => {
    dispatch(DelProductReq())
    return axios.delete(`http://localhost:8000/todo/delete/${id}`)
     .then((r) => {
         dispatch(DelProductSucess(r.data));
     }).catch((e)=> {
         dispatch(DelProductFail())
     })
 }



export {getProducts,ADDProducts,DelProducts,EditProducts}
