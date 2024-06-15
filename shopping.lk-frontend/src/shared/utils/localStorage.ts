export const storage = {
	get: (key: string, defaultValue = null) => {
		const value = localStorage.getItem(key);
		return value ? JSON.parse(value) : defaultValue;
	},
	set: (key: string, value: string) => localStorage.setItem(key, JSON.stringify(value)),
	remove: (key: string) => localStorage.removeItem(key),
	clear: () => localStorage.clear(),
};

//storage.set('motto', 'Eat, Sleep, Code, Repeat');
//storage.get('motto');

//////////////=================================//////////

// Set data in localStorage
function setLocalStorage(key, data) {
	try {
		localStorage.setItem(key, JSON.stringify(data));
		return true; // Data successfully stored
	} catch (error) {
		console.error(`Error setting data in localStorage for key "${key}":`, error);
		return false; // Error occurred while storing data
	}
}

// Get data from localStorage
function getLocalStorage(key) {
	try {
		const storedData = localStorage.getItem(key);
		return storedData ? JSON.parse(storedData) : null;
	} catch (error) {
		console.error(`Error retrieving data from localStorage for key "${key}":`, error);
		return null; // Error occurred while retrieving data
	}
}

// Remove data from localStorage
function removeLocalStorage(key) {
	try {
		localStorage.removeItem(key);
		return true; // Data successfully removed
	} catch (error) {
		console.error(`Error removing data from localStorage for key "${key}":`, error);
		return false; // Error occurred while removing data
	}
}

// Clear all data in localStorage
function clearLocalStorage() {
	try {
		localStorage.clear();
		return true; // localStorage cleared successfully
	} catch (error) {
		console.error('Error clearing localStorage:', error);
		return false; // Error occurred while clearing localStorage
	}
}
