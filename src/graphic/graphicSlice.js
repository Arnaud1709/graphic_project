import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boardlist: [
    {
      name: 'Alpha',
      id: 1,
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Bravo',
      id: 2,
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Charlie',
      id: 3,
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Delta',
      id: 4,
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Echo',
      id: 5,
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Fox-Trot',
      id: 6,
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Golf',
      id: 7,
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ],
}

export const graphicSlice = createSlice({
    name: 'graphic',
    state: {
        value: initialState
      },
    
      reducers: {
        next: state => {
            state.id += 1;
        },
        previous: state => {
            state.id -= 1;
        }
      }
      
});

export const {next, previous} = graphicSlice.actions;

export const selectCount = state => state.graphic.value;

export default graphicSlice.reducer;