const filmReducer = (state={},action)=>{
    switch(action.type){
        case 'choose':
        return action.payload
           
        default:
            return state
    }
}
export default filmReducer