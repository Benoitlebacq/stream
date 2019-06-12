import _ from "lodash"

export default  (state = {}, action) => {
    switch (action.type) {
        case 'EDIT_STREAM':
            return {...state, [action.payload.id] : action.payload}
        case 'FETCH_STREAM' :
            return {...state, [action.payload.id] : action.payload}
        case 'FETCH_STREAMS' :
            return {...state, ..._.mapKeys(action.payload, 'id')}
        case 'DELETE_STREAM' :
            return _.omit(state, action.payload)
        case 'CREATE_STREAM' :
            return {...state, [action.payload.id] : action.payload}
        default :
        return state;
    }
}

//return {...state, title : action.payload.title , description : action.payload.description}
// a tester , sinon fait un if action.payload.title existe etc..

//mapKeys permet de tranformer un tableau en objet