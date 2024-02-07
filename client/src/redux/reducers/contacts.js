import { produce } from 'immer';

const initialState = {
    contactsList: []
};

export default produce((state, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            { state.contactsList.push(action.payload) }
            break;
        case 'GET_ALL_CONTACTS':
            { state.contactsList = action.payLoad }
            break;
}
}, initialState)

