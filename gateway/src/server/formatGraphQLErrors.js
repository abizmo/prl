import get from "lodash/get";

const formatGraphQLErrors = error => {
  const errorDetails = get(error, "originalError.response.body");

  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (e) {
    return error;
  }
};

export default formatGraphQLErrors;
