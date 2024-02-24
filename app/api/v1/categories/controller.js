// import service categories
const {
  getAllCategories,
  createCategories,
  getOneCategories,
  updateCategories,
  deleteCategories,
} = require("../../../services/mongoose/categories");

const { StatusCodes } = require("http-status-codes");

// function create
const create = async (req, res, next) => {
  try {
    //simpan category ke db
    const result = await createCategories(req);

    // respon client
    res.status(StatusCodes.CREATED).json({
      data: result,
    });
  } catch (err) {
    // express error handler
    next(err);
  }
};

// index
const index = async (req, res, next) => {
  try {
    const result = await getAllCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// find
const find = async (req, res, next) => {
  try {
    const result = await getOneCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// update
const update = async (req, res, next) => {
  try {
    const result = await updateCategories(req);

    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// destroy
const destroy = async (req, res, next) => {
  try {
    const result = await deleteCategories(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

// export fungsi create
module.exports = {
  index,
  create,
  find,
  update,
  destroy,
};
