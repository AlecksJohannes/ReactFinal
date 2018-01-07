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
// TODO: HANDLE YOUR EMAIL HERE, 
// emails : IS AN JSON ARRAY WITH EMAIL FOR EXAMPLE BELOW
// body : IS STRING ONLY
// FOLLOW EXAMPLE BELOW 
//
//
// P/S :TESTED AND WORKS fine
function sendMail() {
  fetch('http://reactfinale.herokuapp.com/mail/', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
      emails: '[{"email":"alecksjohanssen@gmail.com"},{"email":"mikeytore@gmail.com"}]',
      body: 'yourOtherValue',
    }),
  });
}

export { getSearchResult, sendMail }
