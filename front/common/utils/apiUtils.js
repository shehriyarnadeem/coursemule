import axios from "axios";
const { Octokit } = require("@octokit/core");

const octokit = new Octokit({ auth: `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` });

export const sendGraphQlQueryPost = async (query) => {
  const res = await axios.post("https://api.hashnode.com", { query });
  return res.data;
};


export const gitApiRequest = async (url) => {
  const res = await octokit.request("GET /users/{username}/repos/fsfev2", {
    username: "shehriyarnadeem",
    type:"private"
  });
  return res;
};


