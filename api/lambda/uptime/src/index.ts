import { Handler, APIGatewayProxyEvent } from "aws-lambda";
import axios from "axios";
import {
  createErrorResponse,
  createResponse,
} from "/opt/nodejs/helpers/common";
import { messages, statusCodes } from "/opt/nodejs/helpers/constants";
import {
  isValidEmail,
  isValidMessage,
  isValidName,
} from "/opt/nodejs/helpers/validation";

export const handler: Handler<object, object> = async (
  event: APIGatewayProxyEvent
) => {
  try {
  } catch (err) {}
};
