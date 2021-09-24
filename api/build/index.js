"use strict";

var _server = _interopRequireDefault(require("./server"));

var _environment = _interopRequireDefault(require("./environment"));

var _database = _interopRequireDefault(require("./database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Start the server
const port = Number(_environment.default.port);
(0, _database.default)();

_server.default.listen(port, () => {
  console.info("Express server started on port: " + port);
});