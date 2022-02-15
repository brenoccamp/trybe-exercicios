const express = require('express');
const tokenValidation = require('../middlewares/tokenValidation');
const axios = require('axios');
const cors = require('cors');

const router = express.Router();
// router.use(cors());
// router.use(express.json());

const ENDPOINTCOINDDESK = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json)'

router.get(
  '/price',
  tokenValidation,
  async (_req, res, _next) => {
    const apiResponse = await axios.get(ENDPOINTCOINDDESK);

    res.status(200).json(apiResponse.data);
  }
)

module.exports = router;