var chokidar = require('chokidar');

var watcher = chokidar.watch('./', {
   	interval: 500,
  	persistent: true,
  	ignoreInitial: true
});

// Something to use when events are received.
var log = console.log.bind(console);
log('start')
// Add event listeners.
watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`));