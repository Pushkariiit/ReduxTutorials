const initalstate = 0;

const UpdateValue = (state=initalstate,action)=>{

    switch(action.type){
        case "INCREMENT": return state+action.payload;
        case "DECREMENT": return state-action.decby3;
        default: return state;
    }
}

export default UpdateValue;