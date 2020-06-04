import UsersService from "#root/adapters/UsersService";

const createUserSessionResolver = async (
  obj,
  { userId, password },
  context,
) => {
  const userSession = await UsersService.createUserSession({
    userId,
    password,
  });

  context.res.cookie("userSessionId", userSession._id, { httpOnly: true });

  return userSession;
};

export default createUserSessionResolver;
