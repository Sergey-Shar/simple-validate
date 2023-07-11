import { ERRORS } from "./errors";

export const validationSchema = {
  email: {
    isRequired: {
      message: ERRORS.errorMessageEmpty
    },
    isEmail: {
      message: ERRORS.errorMessageEmail
    }
  },
  password: {
    isRequired: {
      message: ERRORS.errorMessageEmpty
    },
    isPassword: {
      message: ERRORS.errorMessagePassword
    }
  },
  confirmPassword: {
    isRequired: {
      message: ERRORS.errorMessageEmpty
    },
    isCheckPassword: {
      message: ERRORS.errorMessageComfirmPassword
    }
  }
};
