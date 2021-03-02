export const required = value => (!!value)
    ? undefined
    : 'Field is required';

export const minLengthCreator = minLength => value => (value.length < minLength)
    ? `Min length is ${minLength} symbols`
    : undefined;

export const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

export const passwordsMustMatch = (value, allValues) =>
    value !== allValues.password
        ? 'Passwords do not match'
        : undefined;