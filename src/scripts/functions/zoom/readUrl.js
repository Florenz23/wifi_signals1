export default function readUrl() {
    let array = []
    let time = getParameterByName('time')
    let period = getParameterByName('period')
    time = parseInt(time)
    period = parseInt(period)
    array = [time,period]
    return array
}


function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
