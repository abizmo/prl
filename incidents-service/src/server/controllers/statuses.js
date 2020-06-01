import { Status } from "#root/db/models";

export const getMany = async (req, res, next) => {
  try {
    const statuses = await Status.findAll();
    return res.json(statuses);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const status = await Status.findByPk(req.params.statusId);
    if (!status) return next(new Error("Invalid status ID"));
    return res.json(status);
  } catch (e) {
    return next(e);
  }
};
