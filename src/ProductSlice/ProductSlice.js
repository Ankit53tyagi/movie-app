import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { FetchAPI } from '../API/Api'
import { apikey } from '../API/ApiKey'

// First, create the thunk
export const fetchAllProducts = createAsyncThunk(
    'products/fetchAllProducts',
    async (search) => {
       const movieText = 'Harry';
      const response = await FetchAPI.get(`?apikey=${apikey}&s=${search ? search : movieText}&type=movie`);
      return response.data
    }
  )

  export const fetchAllSeries = createAsyncThunk(
    'products/fetchAllSeries',
    async (search) => {
       const movieText = 'Harry';
      const response = await FetchAPI.get(`?apikey=${apikey}&s=${search ? search : movieText}&type=series`);
      return response.data
    }
  )

  export const fetchSingleInfo = createAsyncThunk(
    'products/fetchSingleInfo',
    async (id) => {
      const response = await FetchAPI.get(`?apikey=${apikey}&i=${id}`);
      return response.data
    }
  )

const initialState = {
  products: {},
  series: {},
  single : {}
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    clear : (state) =>{
      state.single = {}
    }
  },
  extraReducers:{
    [fetchAllProducts.pending]:()=>{
        console.log('pending')
    },
    [fetchAllProducts.fulfilled]:(state,{payload})=>{
        return {...state, products:payload}
    },
    [fetchAllProducts.rejected]:()=>{
        console.log('rejected')
    },
    [fetchAllSeries.fulfilled]:(state,{payload})=>{
      return {...state, series:payload}
    },
    [fetchSingleInfo.fulfilled]:(state,{payload})=>{
      return {...state, single:payload}
    },
  }
})

// Action creators are generated for each case reducer function
export const { clear } = productSlice.actions

export const getAllProducts = state=>state.products.products;
export const getAllSeries = state=>state.products.series;
export const getSingle = state=>state.products.single;

export default productSlice.reducer