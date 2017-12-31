function getSearchResult() {
  return fetch('https://api.myjson.com/bins/gg8yr')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

export { getSearchResult }
