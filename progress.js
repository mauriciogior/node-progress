
var Progress = function() {
	this.stream = process.stderr;
	this.loading;
	this.index = 0;
	this.progressMessage = 'Loading';
	this.pieces = [
		'- '+ this.progressMessage + '.',
		'\\ '+ this.progressMessage + '..',
		'| '+ this.progressMessage + '...',
		'/ '+ this.progressMessage + '....'
	];

	this.longWaitMessage = false;
	this.timeSpent = 0;
}

Progress.prototype = {

	start : function() {
		var self = this;

		this.loading = setInterval(function() {
			if(self.longWaitMessage && self.timeSpent % 25 == 0) {
				self.stream.clearLine();
				self.stream.write(self.longWaitMessage + '\n');
			}

			self.stream.clearLine();
			self.stream.write(self.pieces[self.index++]);
			self.stream.cursorTo(0);

			if(self.index > 3) {
				self.index = 0;
			}

			self.timeSpent += 1;
		}, 150);
	},

	setLongWaitMessage : function(message) {
		this.longWaitMessage = message;
	},

	setProgressMessage : function(message) {
		this.progressMessage = message;
	},

	finish : function() {
		this.stream.clearLine();
		this.timeSpent = 0;
		clearInterval(this.loading);
	}

}

exports.get = function() {
	return Progress;
}
