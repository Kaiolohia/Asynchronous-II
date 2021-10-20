$FORM = $("#number-fact")
NUMBERSURL = "http://numbersapi.com/"

$FORM.on("submit", evt => {
    evt.preventDefault();
    num = $("#number").val();
    getNumberData(num);
})

async function getNumberData(num) {
    if (!num) { return updateNumberData('') };
    res = await axios.get(`${NUMBERSURL}${num}`);
    return updateNumberData(res.data);
}

function updateNumberData(data) {
    $("#fact").text(data)
}