import streams from '../apis/streams';
import history from '../history';
import swal from 'sweetalert';

export const signIn = (userId) => {
    return {
        type : 'SIGN_IN',
        payload : userId
    };
};

export const signOut = () => {
    return {
        type : 'SIGN_OUT'
    };
};

export const createStream  = (formValues) => {
    return  async (dispatch, getState) => {
        const { userId } = getState().auth
        const resp = await streams.post('/streams', {...formValues, userId});
        dispatch({ type : 'CREATE_STREAM' , payload : resp.data});
        // .push sert ici a ré orienter le user vers le patch indiqué entre ()
        swal("Well done !", "Your stream has been added!", "success");
        history.push('/');
    };
};

export const fetchStreams = () =>  async dispatch => {
    const resp = await streams.get('/streams')
    dispatch ({ type :'FETCH_STREAMS' , payload : resp.data})
};

export const fetchStream =(id) =>  async dispatch => {
    const resp = await streams.get(`streams/${id}`)
    dispatch ({type : 'FETCH_STREAM' , payload : resp.data})
}

export const editStream =(id, formValues) => async dispatch => {
    const resp = await streams.patch(`streams/${id}`, formValues)
    dispatch ({type : 'EDIT_STREAM' , payload : resp.data})
    swal("And it's done !", "Your stream has been edited!", "success");
        history.push('/');
}

export const deleteStream =(id) => async dispatch => {
    await streams.delete(`streams/${id}`);
    dispatch({ type : 'DELETE_STREAM', payload : id})
    swal("Deleted !", "Your stream has been deleted !", "success");
    history.push('/');
}