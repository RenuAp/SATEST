// storage.js

// Import necessary functions from 'node-persist'
import { initSync, setItemSync, getItemSync } from 'node-persist';

// Initialize storage
initSync();

// Function to save data
export const saveData = (key, data) => {
  setItemSync(key, data);
};

// Function to retrieve data
export const getData = (key) => {
  return getItemSync(key);
};
