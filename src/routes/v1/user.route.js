import express from 'express'
import controller from '../../controllers/user.controller.js'
const Router = express.Router()

Router.get('/users/1/details', controller.show)

export default Router