const router = express.Router()
import dotenv from "dotenv";
dotenv.config();

router.post("/register", registerUser);
router.post("/login", loginUser);


export default router