// Coloque aqui suas actions
// Action Types
export const SAVED_EMAIL = 'SAVED_EMAIL';

// Action Creators

export const getEmail = (email) => ({
  type: SAVED_EMAIL,
  email,
});
