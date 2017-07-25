(function() {
  // get url paramaters 
  var urlWithoutAnchor = window.location.href.split('#');
  if(urlWithoutAnchor[1]) {
    urlWithoutAnchor.splice(1,1);
  }

  var paramaterArray = urlWithoutAnchor.join("").split("?");
  // url for return POST
  var returnRootURL = paramaterArray[0];
  paramaterArray.splice(0,1);

  if(paramaterArray.length == 0) {
    return; 
  }

  // convert queries to object
  var paramaterObject = {};

  paramaterObject.rootURL = returnRootURL;

  paramaterArray.forEach(function(paramaterArray_string) {
    var paramaterArray_string_array = paramaterArray_string.split("=");
    paramaterObject[paramaterArray_string_array[0]] = paramaterArray_string_array[1];
  });

  console.log(paramaterObject);
  console.log(returnRootURL);
})();
