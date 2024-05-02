import { Constants } from "./constants";

export const isValidEmail = (str: string) =>
  str &&
  new RegExp(Constants.emailRegexPattern).test(str) &&
  str.length <= Constants.stringMaxLength;

export const isValidName = (str: string | undefined) =>
  str !== null &&
  str !== "" &&
  str !== undefined &&
  str.length <= Constants.nameMaxLength;

export const isValidMessage = (str: string | undefined) =>
  str !== null &&
  str !== "" &&
  str !== undefined &&
  str.length <= Constants.messageMaxLength;
