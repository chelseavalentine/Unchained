url_proxy = "web_proxy.php/";
api = 'merchantpoi';
zip = 10013;
MCCode = 5812;

var path = 'merchantpoi?PostalCode=10013&MCCCode=5812';

var url_full = url_proxy + path;

console.log('hi');
//url_full = url_proxy + api + '?' + 'PostalCode=' + zip + '&' + 'MCCCode=' + MCCode;
path="PostalCode=10013&MCCCode=5812";

$.ajax({
  type: "GET",
  url: "http://localhost:8000/web_proxy.php?" + "PostalCode=10013&MCCCode=5812",
  dataType: "xml",
  success: function(xml) {
    console.log('success');
    alert('worked');
  },
  error: function(xml) {
    console.log(xml);
    console.log('err');
    console.log(xml.status + ' ' + xml.statusText);
  }
});

/*$.get(url_full, function(data) {
  console.log(data);

})*/
