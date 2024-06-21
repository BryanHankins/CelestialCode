
const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const path = event.path.replace("/Store", "");
  const response = await fetch(`https://store--celestialcode.netlify.app${path}`);
  const body = await response.text();

  return {
    statusCode: response.status,
    headers: { "Content-Type": "text/html" },
    body: body
  };
};
