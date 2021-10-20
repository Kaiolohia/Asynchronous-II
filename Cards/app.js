$DRAWBTN = $('#draw-card')
$CARDCONTAINER = $('#cards')
NEWDECKURL = 'http://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
deckId = ''

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

$(document).ready( () => {
    getDeckId().then(res => deckId = res.data.deck_id)
})

$DRAWBTN.on('click', () => {
    drawNewCard().then(res => {
        cardImgURL = res.data.cards[0].image
        $CARDCONTAINER.append(`<img src="${cardImgURL}" style="
        position: absolute;
        transform: rotate(${getRandomInt(100)-50}deg);
        ">`)
        if (res.data.remaining == 0) {
            $DRAWBTN.prop("disabled",true);
        }
    })
})

async function getDeckId() {
    return await axios.get(NEWDECKURL)
}

NEWCARDURL = function(deck_id) { return `http://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`}

async function drawNewCard() {
    return await axios.get(NEWCARDURL(deckId))
}