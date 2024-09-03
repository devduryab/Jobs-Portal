function sendResponse(res, statusCode, data, message, success) {
  return res.status(statusCode).json({
    message,
    data,
    success,
  });
}

export default sendResponse;
