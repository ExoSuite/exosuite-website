function waitForElement(elementId, callBack) {
    window.setTimeout(function () {
        let element = document.getElementById(elementId);
        if (element) {
            callBack(elementId, element);
        } else {
            waitForElement(elementId, callBack);
        }
    }, 500)
}

async function search(string) {
    let accessToken = "";
    await getAccessToken()
        .then(res => accessToken = res);
    if (string === "")
        string = "*";
    return await fetch(`${window.apiDomain}user/search?text=${string}`, initCallAPI(accessToken, 'GET'))
        .then(response => response.json())
        .then(data => {
            return data;
        });
}

function displayResult(result) {
    $('#selectPeople').find('option').remove().end();
    for (let i = 0; result.data[i]; i++)
        $('#selectPeople').append('<option val="'+ i +'" value=' + result.data[i].id + '>' + result.data[i].first_name + ' ' + result.data[i].last_name +'</option>');
    $('#selectPeople').selectpicker('refresh');
}

waitForElement('searchInput', () => {
    const textInput = document.getElementById('searchInput');
    let timeout = null;
    let resultSearch = undefined;

    textInput.onkeyup = () => {
        clearTimeout(timeout);
        timeout = setTimeout(async () => {
            await search(textInput.value).then(r => resultSearch = r);
            displayResult(resultSearch);
        }, 500);
    };
});
