module.exports = (error, req, res, next) => {
  if (error.name === 'ValidationError') {
    return res.status(400).json(error);
  }
  next(error);
};

// next(new Error(''))
// next(new CustomError(''));
// class CustomError extends Error {

// }

// if (error instanceof CustomError) {

// }
