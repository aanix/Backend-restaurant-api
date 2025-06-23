const express = require('express')
const router = express.Router()
const {verifyAccessToken} = require('../helpers/jwt_helpers')
const Controller = require('../Controller/Restaurant.Controller.js')

//Any request to /restaurants (e.g., GET /restaurants or POST /restaurants)
//will be handled by the restaurant.route.js.
router.post('/', verifyAccessToken, Controller.create) //crud with token check
router.put('/:id',verifyAccessToken, Controller.update)
router.delete('/:id',verifyAccessToken, Controller.delete)
router.get('/:id', Controller.get)
router.get('/', Controller.list)

module.exports = router // route ko export kr skte hain kisi bhi file me





