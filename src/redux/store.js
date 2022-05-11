import {legacy_createStore as createStore, combineReducers} from 'redux'
import filmReducer from './reducers/filmReducer'
const store = createStore(combineReducers({
    film:filmReducer,
}),
{
    film:{
        Category: "Movie",
        CoverImage: "FeaturedCoverImage.png",
        Date: "2021-10-24T12:16:50.894556",
        Description: "Info About it",
        Duration: "6000",
        Id: "1",
        MpaRating: "18+",
        ReleaseYear: "2021",
        Title: "The Irishman",
        TitleImage: "FeaturedTitleImage.png",
    }
})

export default store