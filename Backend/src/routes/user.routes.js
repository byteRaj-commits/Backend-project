import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
  changePassword,
  getCurrentUser,
  updateAvatar,
  updateCoverImage,
  updateUserProfile,
} from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();



router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
); // register user
router.route("/login").post(loginUser); // login user
router.route("/logout").post(verifyJWT, logoutUser); // logout user
router.route("/refresh-token").post(refreshAccessToken); // refresh access token
router.route("/change-password").post(verifyJWT, changePassword); // change password
router.route("/me").get(verifyJWT, getCurrentUser); // get current user details
router.route("/update-profile").put(verifyJWT, updateUserProfile); // update user profile
router
  .route("/update-avatar")
  .put(verifyJWT, upload.single("avatar"), updateAvatar); // update avatar

router
  .route("/update-cover-image")
  .put(verifyJWT, upload.single("coverImage"), updateCoverImage); // update cover image

export default router;
