import { Incident } from "#root/db/models";

export const getMany = async (req, res, next) => {
  try {
    const incidents = await Incident.findAll();
    return res.json(incidents);
  } catch (err) {
    next(err);
  }
};
