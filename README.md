# Node Progress
Simple loading message for indeterminate processes.

### How to use

```javascript
var progress = require('node-progress').get();

progress.start();

someLongWork(function() {
	progress.finish();

	/* ... */
});
```

### API
+ `progress.start()` : begins the progress.
+ `progress.finish()` : finishes the progress.
+ `progress.setLongWaitMessage(message)` : sets a long wait message. This message is shown every 2.5s.
+ `progress.setProgressMessage(message)` : sets the default progress message (Default: "Loading").
