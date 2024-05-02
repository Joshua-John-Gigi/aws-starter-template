const getHeaders = () => {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST",
    "X-Frame-Options": "deny",
    "Content-Security-Policy": "frame-ancestors 'self' ",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-cache",
  };
};

export const createResponse = (statusCode: number, body: any): any => {
  return {
    statusCode,
    body: JSON.stringify({ data: body }),
    headers: getHeaders(),
  };
};

export const createErrorResponse = (
  statusCode: number,
  errorMessage: any
): any => {
  return {
    statusCode,
    body: JSON.stringify({ error: errorMessage }),
    headers: getHeaders(),
  };
};
