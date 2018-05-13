const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

if (isDev) {
    require("dotenv").load();
}

function envFor(name) {
    console.log(process.env[name]);
    return process.env[name] || "";
}

const env = {
    isTrue(name) {
        return envFor(name) === "true";
    },

    isFalse(name) {
        return envFor(name) === "false";
    },

    get(name) {
        return envFor(name);
    }
};

module.exports = env;
