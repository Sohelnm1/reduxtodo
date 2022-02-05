const initialDate ={
    list:[]
}



const todoReducers = (state=initialDate,action) =>{
    switch(action.type){
        case "ADDTODO":

        const {id,data}=action.payload;
        return{
            ...state,
            list:[
                ...state.list,
                {
                    id:id,
                    data:data

            }
        ]
        }

        case "DELETE_TODO":
            const newList= state.list.filter((elem)=>elem.id !== action.id)

    
        return{
            ...state,
            list: newList
            
        }

        case "REMOVE_TODO":
            return{
            ...state,
            list:[]
        
        }
        default :return state;
    }
}
export default todoReducers;