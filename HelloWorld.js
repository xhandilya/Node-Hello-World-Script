const response = {
	content: "Hello, World!"
};

console.log(Buffer.from(JSON.stringify(response)).toString("base64"));