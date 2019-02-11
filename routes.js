const routes = module.exports = require('next-routes')()

routes
.add("/projects/:id", "projects/_id")
