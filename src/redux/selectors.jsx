export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.contacts.filter;
export const getIsLoading = state => state.contacts.loading;
export const getErrorMessage = state => state.contacts.error;

