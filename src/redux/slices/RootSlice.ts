import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        isbn: "ISBN",
        title: "Title",
        author_name: "Author",
        book_length: "Length",
        year_of_release: "Year",
        in_stock: "In Stock",
    },
    reducers: {
        chooseIsbn: (state, action) => {
            state.isbn = action.payload;
        },
        chooseTitle: (state, action) => {
            state.title = action.payload;
        },
        chooseAuthorName: (state, action) => {
            state.author_name = action.payload;
        },
        chooseBookLength: (state, action) => {
            state.book_length = action.payload;
        },
        chooseYearOfRelease: (state, action) => {
            state.year_of_release = action.payload;
        },
        chooseInStock: (state, action) => {
            state.in_stock = action.payload;
        }
    }
});

export const reducer = rootSlice.reducer;
export const { chooseIsbn, chooseTitle, chooseAuthorName, chooseBookLength, chooseYearOfRelease, chooseInStock } = rootSlice.actions;
