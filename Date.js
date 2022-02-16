// jshint esversion:6

// module.exports.getDate = getDate;

exports.getDate = function() {
  let today = new Date();

  let options = {
  weekday: "long",
  day: "numeric",
  month: "short",
  year: "numeric"
  };

  return today.toLocaleDateString("en-US", options);
};

module.exports.getyear = getyear;

function getyear(){
  let today = new Date();

  let options = {
  year: "numeric"
  };

  return today.toLocaleDateString("en-US", options);
}
