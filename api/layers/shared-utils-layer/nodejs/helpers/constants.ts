export const statusCodes = {
  SUCCESS: 200,
  DISCORD_MESSAGE_DELIVERED: 204,
  BAD_REQUEST: 400,
};

export const messages = {
  kEmailRequired: "Please provide a valid email",
  kNameRequired: "Please provide a valid name",
  kMessageRequired: "Please provide a valid message",
  kInternalError: "Oops! Something went wrong, Please try again later",
};

export const Constants = {
  emailRegexPattern: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/g,
  stringMaxLength: 50,
  nameMaxLength: 100,
  messageMaxLength: 1000,
};
