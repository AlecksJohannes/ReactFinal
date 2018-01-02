const queryString = require('query-string');

function getSearchResult(student_link, options) {
  var queryBuilder = queryString.stringify({
    'q[nation_languages_name_in][]': options.language,
    'q[languages_name_in][]': options.classTaken,
    'q[additional_skills_in][]': options.additionalSkill,
    'q[location_in][]': options.location,
    'q[experience_in][]': options.experience
  });
  return fetch(student_link + '?' + queryBuilder)
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
}

export { getSearchResult }
