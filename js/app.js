function sendEvent(eventCategory,eventAction) {
  try {
  dataLayer.push({
          'event': 'GAEvent',
          'eventCategory': eventCategory,
          'eventAction': eventAction,
          'eventLabel': window.location.href
  });
  } catch(err) {}
}

function sendEventValue(eventCategory,eventAction,eventValue) {
  try {
  dataLayer.push({
          'event': 'GAEvent',
          'eventCategory': eventCategory,
          'eventAction': eventAction,
          'eventLabel': window.location.href,
          'eventValue': eventValue,
  });
  } catch(err) {}
}

$(document).ready(function() {
  try {
    window.dataLayer = window.dataLayer || [];
    console.log("Document ready!");
    // continue
    //sendEvent('Foo','Bar');
    //sendEvent('Button','Click');
    $("a").click(function (e) {
        dataLayer.push({
            'event': 'GAEvent',
                'eventCategory': 'Outbound Link Click',
                'eventAction': $(this).attr("href"),
                'eventLabel': window.location.href
        });
        window.location.href = window.location.origin+window.location.pathname+"#google"
    });
    $("a").click(function (e) {
        e.preventDefault();
    });
    console.table(dataLayer);
  } catch(err) {}
});
