// Example only. Do not deploy without adding your own email provider and secrets.
// This shows the shape of the function needed to receive the NDA form.
// GitHub Pages cannot run this. Netlify/Vercel/Cloudflare Workers can.

exports.handler = async function(event) {
  return {
    statusCode: 501,
    body: JSON.stringify({
      error: "Example only. Add multipart parsing and email provider integration here."
    })
  };
};
