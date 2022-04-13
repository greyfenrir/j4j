fs = require("fs");

const buffer = fs.readFile("file-ops.js", (err, data) => {
	if (err) {
		console.log(err);
		process.exit(1);
	}
	console.log("Content of file-ops.js:");
	console.log(data.toString().split('\n').filter(line => !!line).join('\n'));
});
console.log('show me first')
