var debug = false;

function sendEvent(eventCategory, eventAction) {
    try {
        dataLayer.push({
            'event': 'GAEvent',
            'eventCategory': eventCategory,
            'eventAction': eventAction,
            'eventLabel': window.location.href
        });
    } catch (err) {
    }
}

function sendEventValue(eventCategory, eventAction, eventValue) {
    try {
        dataLayer.push({
            'event': 'GAEvent',
            'eventCategory': eventCategory,
            'eventAction': eventAction,
            'eventLabel': window.location.href,
            'eventValue': eventValue,
        });
    } catch (err) {
    }
}

$(document).ready(function () {
    try {
        $("#digitalocean-button").click(function (e) {
                var url = "https://www.digitalocean.com/?refcode=4a302f6cfbc4";
                sendEvent("DigitalOcean Click: " + $(this).attr("class"), $(this).text());
                window.open(url, "_blank");
                e.preventDefault();
            }
        ).easyab({
                'slot': 1,
                'name': 'digitalocean-button-color',
                'default-value': 'btn-primary',
                'alternatives': [
                    {
                        'value': 'btn-danger',
                        'alternative': function ($this) {
                            $this.removeClass('btn-primary').addClass('btn-danger');
                        }
                    },
                    {
                        'value': 'btn-success',
                        'alternative': function ($this) {
                            $this.removeClass('btn-primary').addClass('btn-success');
                        }
                    }
                ]
            });
        $("a").click(function (e) {
            sendEvent("Outbound Link Click", $(this).attr("href"));
            window.open($(this).attr("href"), "_blank");
            e.preventDefault();
        });
        $("#digitalocean-button-text").easyab({
            'slot': 2,
            'name': 'digitalocean-button-text',
            'default-value': 'only',
            'alternatives': [
                {
                    'alternative': 'just'
                },
                {
                    'alternative': 'as little as'
                },
                {
                    'alternative': 'under'
                },
                {
                    'alternative': 'merely'
                }
            ]
        });
        sendEventValue("Page View", document.title, 1);
        if (debug) {
            console.table(dataLayer);
        }
    } catch (err) {
    }
});
