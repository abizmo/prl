import { NotificationClassification } from "#root/db/models";

export const getMany = async (req, res, next) => {
  try {
    const notificationClassifications = await NotificationClassification.findAll();
    return res.json(notificationClassifications);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const notificationClassification = await NotificationClassification.findByPk(
      req.params.notificationClassificationId,
    );
    if (!notificationClassification)
      return next(new Error("Invalid NotificationClassification ID"));
    return res.json(notificationClassification);
  } catch (e) {
    return next(e);
  }
};
