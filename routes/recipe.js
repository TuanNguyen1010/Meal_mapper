const router = express.Router();
const RecipeController = require('../controller/recipeController')

router.post('/', RecipeController.add)