module.exports = {
  health: function(req, res) {
    res.json({
      health: "server is up and running"
    })
  }
}
