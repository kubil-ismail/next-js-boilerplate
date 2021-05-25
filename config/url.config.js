/*
    -------------------------------
    BASE URL ENVIRONTMENT CONFIG
    -------------------------------
*/

// development mode
const devUrl = {};

// production mode
const prodUrl = {};

// export url
const NODE_ENV = process.env.NODE_ENV === "development";
const url = NODE_ENV ? devUrl : prodUrl;

export default url;
