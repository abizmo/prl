import { addHours } from "date-fns";

import { UserSession } from "#root/db/models";
import generateUUID from "#root/helpers/generateUUID";
//import passwordCompareSync from "#root/helpers/passwordCompareSync";

const USER_SESSION_EXPIRY_HOURS = 1;

const setupRoutes = (app) => {
  app.post("/sessions", async (req, res, next) => {
    if (!req.body.userId || !req.body.password) {
      return next(new Error("Invalid body!"));
    }

    try {
      // Identificar contra LDAP
      //const user = await User.findOne({
      //  attributes: {},
      //  where: {
      //    email: req.body.email
      //  }
      //});

      //if (!user) return next(new Error("Invalid email!"));

      //if (!passwordCompareSync(req.body.password, user.passwordHash)) {
      //  return next(new Error("Incorrect password!"));
      //}
      const user = { id: req.body.userId };
      // Identificar contra LDAP

      const expiresAt = addHours(new Date(), USER_SESSION_EXPIRY_HOURS);

      const sessionToken = generateUUID();

      const userSession = await UserSession.create({
        expiresAt,
        _id: sessionToken,
        userId: user.id,
      });

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.get("/sessions/:sessionId", async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error("Invalid session ID"));

      return res.json(userSession);
    } catch (e) {
      return next(e);
    }
  });

  app.delete("/sessions/:sessionId", async (req, res, next) => {
    try {
      const userSession = await UserSession.findByPk(req.params.sessionId);

      if (!userSession) return next(new Error("Invalid session ID"));

      await userSession.destroy();

      return res.end();
    } catch (e) {
      return next(e);
    }
  });
};

export default setupRoutes;
