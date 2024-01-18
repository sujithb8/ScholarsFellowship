const express = require('express');
const { isAuthenticated, isAdmin } = require('../middleware/auth');
const { addUniv,  singleUniv, updateUniv,deleteUniv,allUnivs,  showUnivs, singleProg } = require('../controller/univController');
const router = express.Router();

//univ Routes
// /universities/create
router.post('/universities/create',isAuthenticated,isAdmin, addUniv);
router.get('/universities',showUnivs)
// router.get('/universities/:keyword',allUnivs)
router.get('/university/:univId',singleUniv)
router.put('/universe/upd/:univ_id',updateUniv,isAdmin)
router.delete('/universe/del/:id',deleteUniv,isAdmin)
router.get('/:univId/:programId',singleProg)


module.exports = router;