import {createSlice} from '@reduxjs/toolkit'

const speechToTextSlice = createSlice({
    name: "user",
    initialState: {
        speechText: ""
    },
    reducers: {
        setSpeechText: (state, action) => {
            state.speechText = action.payload;
        },
    }
})

export const {setSpeechText} = speechToTextSlice.actions;
export default speechToTextSlice.reducer;