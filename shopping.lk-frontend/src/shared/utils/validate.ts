export const validateEmail = (email: string) => {
	const regex = /^\S+@\S+\.\S+$/;
	return regex.test(email);
};

//validateEmail('youremail@org.com'); // true
//validateEmail('youremail@com'); // false
//validateEmail('youremail.org@com'); // false

export const validateFullName = (value: string) => {
	if (!value) return 'This field must not be empty.';

	const regex = /^[a-zA-Z ]+$/;
	if (!regex.test(value)) {
		return 'Invalid full name';
	}

	return 'Valid full name';
};

//console.log(validateFullName('Brendan Eich'));
//console.log(validateFullName('James Bond 007'));

export const validatePassword = (password: string) => {
	if (!password) return 'This field must not be empty.';

	const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).{8,}$/;
	if (!regex.test(password)) {
		return 'Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one symbol.';
	}

	return 'Valid password';
};

export const validateMobileNumber = (value: string) => {
	if (!value) return 'This field must not be empty.';

	const regex = /^\d{10}$/;
	if (!regex.test(value)) {
		return 'Invalid mobile number';
	}

	return 'Valid mobile number';
};

//==================================
export const isEnum = <T, R>(e: T, value: R): boolean => {
	return Object.values(e).includes(value);
};

/* 
enum UserRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

const userRole = UserRole.ADMIN;
console.log(isEnum(UserRole, userRole)); // true
*/
