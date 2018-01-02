function getSearchResult(student_link) {
  return fetch(student_link)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

export { getSearchResult }
