import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  searchValue: '',
  showAlert: false,
  alertMessage: '',
  isLoading: false,
  artistsList: [],
}
const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
    setArtists: (state, action) => {
      state.artistsList = action.payload
      console.log(state.artistsList)
    },
    handleSubmit: (state) => {
      console.log('submit')
      if (state.searchValue === '') {
        state.showAlert = true
      }
    },
    clearAlert: (state) => {
      state.showAlert = false
    },
    handleChange: (state, action) => {
      console.log(action.payload.target.value)
      state.searchValue = action.payload.target.value
    },
  },
})

console.log(searchBarSlice)
export default searchBarSlice.reducer
export const { handleChange, handleSubmit, clearAlert, setArtists } =
  searchBarSlice.actions
