export const getLocalResource = (name) => {
    const images = require.context("../assets", true);
    return name && images(`./${name}`);
  };