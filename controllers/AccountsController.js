const crypto = require("crypto");
const axios = require("axios");

// Handle Login Request and Return Google OAuth URL
const login = async (req, res) => {
  const client_id = process.env.CLIENT_ID;
  const redirect_uri = "http://localhost:2080/accounts/callback";
  const state = generateStateParameter();
  const scope = encodeURIComponent(
    "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"
  );

  // Construct the Google OAuth URL
  const authUri = `https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=${client_id}&redirect_uri=${encodeURIComponent(
    redirect_uri
  )}&scope=${scope}&state=${state}&access_type=offline&prompt=consent`;

  // Respond with the URL (in a real scenario, you might want to wrap this in a JSON object)
  res.json({ authUrl: authUri });
  console.log(authUri);
};

//helper
function generateStateParameter() {
  return crypto.randomBytes(20).toString("hex");
}

// Callback function for OAuth From Google
const callback = async (req, res) => {
  const code = req.query.code; // The authorization code
  if (code) {
    try {
      const response = await exchangeCodeForTokens(code);
      // Extract only the relevant data from the response
      const tokens = {
        accessToken: response.data.access_token,
        refreshToken: response.data.refresh_token,
        expiresIn: response.data.expires_in,
        scope: response.data.scope,
        tokenType: response.data.token_type,
        idToken: response.data.id_token,
      };
      console.log("About to send tokens");
      res.json(tokens);
      console.log("Sent tokens");
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error exchanging code for tokens", error });
    }
  } else {
    res.status(400).json({ message: "No code recieved" });
  }
};

//helper
function exchangeCodeForTokens(code) {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const redirect_uri = "http://localhost:2080/accounts/callback";
  return axios.post("https://oauth2.googleapis.com/token", {
    code,
    client_id,
    client_secret,
    redirect_uri,
    grant_type: "authorization_code",
  });
}

const logout = async (req, res) => {
  return;
};

module.exports = {
  login,
  logout,
  callback,
};
