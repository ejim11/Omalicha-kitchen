export const registrationOption = {
  fullname: {
    required: "Fullname is required",
    minLength: {
      value: 2,
      message: "Name must have at least 2 characters",
    },
    maxLength: {
      value: 98,
      message: "Name cannot be greater than 98 characters",
    },
    pattern: {
      value: /^[A-Z][a-z]+\s[A-Z][a-z]+$/i,
      message: "Fullname is required",
    },
  },
  email: {
    required: "Email is required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Valid email address is required",
    },
  },
  date: {
    required: "Date is required",
  },
  phoneNumber: {
    required: "Phone number is required",
    pattern: {
      value: /(?:\+?(\d{1,3}))?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/,
      message: "Valid phone number is required",
    },
  },
};
