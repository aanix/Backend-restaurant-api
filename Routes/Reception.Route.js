const express = require('express')
const router = express.Router()
const { verifyAccessToken } = require('../helpers/jwt_helpers.js')
const Controller = require('../Controller/Reception.Controller.js')

//Any request to /receptions (e.g., GET /receptions or POST /receptions)
//will be handled by the reception.route.js.
router.post('/', verifyAccessToken, Controller.create) //crud with token check
router.put('/:id', verifyAccessToken, Controller.update)
router.delete('/:id', verifyAccessToken, Controller.delete)
router.get('/:id', Controller.get)
router.get('/', Controller.list)

module.exports = router // route ko export kr skte hain kisi bhi file me, isme bhi contact krdo
