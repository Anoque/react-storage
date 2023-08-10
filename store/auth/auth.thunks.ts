import { createAsyncThunk } from '@reduxjs/toolkit'
import axios, { AxiosError } from 'axios'
import { loginRequest } from './auth.types'

export const loginUser = createAsyncThunk<string, loginRequest>(
  `auth/login`,
  async (requestData, { rejectWithValue }) =>
    await axios
      .post('http://localhost:5000/api/auth/login', requestData)
      .then((res) => res.data)
      .catch((err: AxiosError) => rejectWithValue(err.message)),
)

export const registerUser = createAsyncThunk<string, loginRequest>(
  `auth/register`,
  async (requestData, { rejectWithValue }) =>
    await axios
      .post('http://localhost:5000/api/auth/register', requestData)
      .then((res) => res.data)
      .catch((err: AxiosError) => rejectWithValue(err.message)),
)
