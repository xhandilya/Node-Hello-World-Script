const response = {
	content: "Hello, World!",
	content_type: "text/plain"
};

console.log(Buffer.from(JSON.stringify(response)).toString("base64"));