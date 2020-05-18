import { AccidentForm } from "#root/db/models";

export const getMany = async (req, res, next) => {
  try {
    const accidentForms = await AccidentForm.findAll();
    return res.json(accidentForms);
  } catch (err) {
    next(err);
  }
};
