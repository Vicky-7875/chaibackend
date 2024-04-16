require("dotenv");
const express = require("express");

const app = express();
const port = 4000;

let myData = {
  login: "Vicky-7875",
  id: 53465016,
  node_id: "MDQ6VXNlcjUzNDY1MDE2",
  avatar_url: "https://avatars.githubusercontent.com/u/53465016?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/Vicky-7875",
  html_url: "https://github.com/Vicky-7875",
  followers_url: "https://api.github.com/users/Vicky-7875/followers",
  following_url:
    "https://api.github.com/users/Vicky-7875/following{/other_user}",
  gists_url: "https://api.github.com/users/Vicky-7875/gists{/gist_id}",
  starred_url: "https://api.github.com/users/Vicky-7875/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/Vicky-7875/subscriptions",
  organizations_url: "https://api.github.com/users/Vicky-7875/orgs",
  repos_url: "https://api.github.com/users/Vicky-7875/repos",
  events_url: "https://api.github.com/users/Vicky-7875/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/Vicky-7875/received_events",
  type: "User",
  site_admin: false,
  name: "Vivek Tondare",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 12,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: "2019-07-30T06:45:27Z",
  updated_at: "2024-04-05T14:42:31Z",
};

app.get("/", (req, res) => {
  res.send("hello wolrd");
});
app.get("/youtube", (req, res) => {
  res.send("<h2>chai aur code</h2>");
});

app.get("/login", (req, res) => {
  res.send("<h1>please login </h1>");
});

app.get("/github", (req, res) => {
  res.json(myData);
});

app.listen(process.env.PORT , () => {
  console.log(`server running on ${port}`);
});
