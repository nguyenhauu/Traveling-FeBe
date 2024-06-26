import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json({ success: false, message: "not authorize" });
  }
  jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(401).json({ success: false, message: "token invalid" });
    }
    req.user = user;
    next();
  });
};

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.role === "user" || req.user.role === "admin") {
      next();
    } else {
      return res
        .status(401)
        .json({ success: false, message: "not authenticated" });
    }
  });
};

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, (err) => {
    if (err) return next(err);
    if (req.user.role === "admin") {
      next();
    } else {
      return res.status(401).json({ success: false, message: "not authorize" });
    }
  });
};
