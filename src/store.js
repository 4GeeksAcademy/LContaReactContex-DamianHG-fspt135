const url = 'https://playground.4geeks.com/contact/'
const usuario = "damian"

export const initialStore = () => {
  return {
    editContact: null
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'edit_contact':
      const contact = action.payload

      return {
        ...store,
        editContact: contact
      };
    default:
      throw Error('Unknown action.');
  }


}
