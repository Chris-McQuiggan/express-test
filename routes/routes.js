const express = require("express");
const router = express.Router();

// @route   GET test/test
// @desc    Tests get route
// @access  Public
router.get("/test*", (req, res) => {
  res.json({
    message: "get test success",
    sentHeaders: req.headers,
    sentRawHeaders: req.rawHeaders,
    sentMethod: req.method,
    sentParams: req.params,
    sentQuery: req.query,
    sentBody: req.body
  });
});

// @route   POST test/test
// @desc    Tests post route
// @access  Public
router.post("/test*", (req, res) => {
  res.json({
    message: "post test success",
    sentHeaders: req.headers,
    sentRawHeaders: req.rawHeaders,
    sentMethod: req.method,
    sentParams: req.params,
    sentQuery: req.query,
    sentBody: req.body
  });
  
});

// @route   PUT test/test
// @desc    Tests put route
// @access  Public
router.put("/test*", (req, res) => {
  res.json({
    message: "put test success",
    sentHeaders: req.headers,
    sentRawHeaders: req.rawHeaders,
    sentMethod: req.method,
    sentParams: req.params,
    sentQuery: req.query,
    sentBody: req.body
  });
  
});

// @route   DELETE test/delete
// @desc    Tests delete route
// @access  Public
router.delete("/test*", (req, res) => {
  res.json({
    message: "delete test success",
    sentHeaders: req.headers,
    sentRawHeaders: req.rawHeaders,
    sentMethod: req.method,
    sentParams: req.params,
    sentQuery: req.query,
    sentBody: req.body
  });

});

module.exports = router;
