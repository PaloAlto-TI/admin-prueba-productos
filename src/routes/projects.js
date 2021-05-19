const express = require('express');
const router = express.Router();
const projectCTRL = require('../controllers/project.controller');


router.post('/projects', projectCTRL.createProject)
router.get('/projects', projectCTRL.getProjects)
router.get('/projects/:id', projectCTRL.getOneProject)
router.put('/projects/:id', projectCTRL.updateProject)



module.exports = router