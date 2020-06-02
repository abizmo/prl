import { NotificationCategory } from "#root/db/models";

export const getMany = async (req, res, next) => {
  try {
    const notificationCategories = await NotificationCategory.findAll();
    return res.json(notificationCategories);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const notificationCategory = await NotificationCategory.findByPk(
      req.params.notificationCategoryId,
    );
    if (!notificationCategory)
      return next(new Error("Invalid NotificationCategory ID"));
    return res.json(notificationCategory);
  } catch (e) {
    return next(e);
  }
};
