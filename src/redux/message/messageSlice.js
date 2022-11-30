import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://127.0.0.1:3000/message';

export const fetchMessages = createAsyncThunk(
  'message/fetchMessages',
  async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data.greetings;
  },

);

const messageSlice = createSlice({
  name: 'message',
  initialState: [],
  reducers: {},
  extraReducers: {
    [fetchMessages.fulfilled]: (state, action) => action.payload,
  },
});

export const { addMessage } = messageSlice.actions;

export default messageSlice.reducer;
