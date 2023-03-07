import express from 'express'
import mostrar_categoriescontroller from '../controllers/categories.controller.js'
import schema from '../schemas/manga.js'
import validator from '../middlewares/validator.js'
import validator_title from '../middlewares/mangas/exists_title.js'
//import is_active from '../middlewares/authors/is_active.js' //MIDDLEWARE M06


import create_manga from '../controllers/manga.controller.js'


let router = express.Router();
const { show } = mostrar_categoriescontroller
const { create } = create_manga



router.get("/", show)
//router.post("/", validator(mangaCreate),validator_title,is_active,create) //RUTA CON VALIDADOR DEL M06
router.post("/", validator(schema),validator_title,create)




export default router;