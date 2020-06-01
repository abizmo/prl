import { AccidentForm } from "#root/db/models";

export const getMany = async (req, res, next) => {
  try {
    const accidentForms = await AccidentForm.findAll();
    return res.json(accidentForms);
  } catch (err) {
    next(err);
  }
};

export const getOne = async (req, res, next) => {
  try {
    const accidentForm = await AccidentForm.findByPk(req.params.accidentFormId);
    if (!accidentForm) return next(new Error("Invalid accidentForm ID"));
    return res.json(accidentForm);
  } catch (e) {
    return next(e);
  }
};
