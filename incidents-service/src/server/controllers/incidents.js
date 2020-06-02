import { Incident } from "#root/db/models";

export const getMany = async (req, res, next) => {
  try {
    const incidents = await Incident.findAll();
    return res.json(incidents);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const incident = await Incident.findByPk(req.params.incidentId);
    if (!incident) return next(new Error("Invalid incident ID"));
    return res.json(incident);
  } catch (e) {
    return next(e);
  }
};
