(function(exports){
    exports.Card = function(questionInput){

        var cardCont = document.getElementById("game_div");
        cardCont.className = "card_container";

        var cardFront = document.createElement("div");
        cardFront.className = "card_front";

        var cardBack = document.createElement("div");
        cardBack.className = "card_back";

        buildCard = function(){
            var flipDiv = document.createElement("div"),
                frontValDiv = document.createElement("div"),
                backValDiv = document.createElement("div"),
                catDiv = document.createElement("div");
            flipDiv.className = "flip";
            frontValDiv.className = "front_val";
            backValDiv.className = "back_val";
            catDiv.className = "cat_val";

            frontValDiv.innerHTML = questionInput;
            // backValDiv.innerHTML = answerInput;

            cardFront.appendChild(frontValDiv);
            cardFront.appendChild(catDiv);
            cardBack.appendChild(backValDiv);

            flipDiv.appendChild(cardFront);
            flipDiv.appendChild(cardBack);

            cardCont.appendChild(flipDiv);
        }

        return {
            buildCard: buildCard
        }

    }


})(this)
