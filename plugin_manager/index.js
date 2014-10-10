module.exports = function (deps) {
  return {
    listLocal: function() {
      return require('./list_local_plugins')(deps) 
    },
    listRemote: function() {
      return require('./list_remote_plugins')(deps) 
    },
    createNew: function() {
      return require('./create_new_plugin')(deps)
    }
  }
}
