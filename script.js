/**
 * Created by Reis on 28/05/2017.
 */
var xm = 0;
var im = 0;
var xb = 0;
var Movie;
var Trailer;
var ss = -1;
var aberto=false;
Movie = [
    ['', ''],
    ['Filme1', 'Scream - 1996', 'A year after the murder of her mother, a teenage girl is',
        'terrorized by a new killer, who targets the girl and her friends by', 'using horror films as part of adeadly game.'],
    ['Filme2', 'Halloween 4 - 1988', 'Ten years after his original massacre, the invalid Michael Myers ',
        'awakens and returns to Haddonfield to kill his seven-year-old ', 'niece on Halloween. Can Dr. Loomis stop him?'],
    ['Filme3', 'Let Me In - 2010', 'A bullied young boy befriends a young female vampire who lives in secrecy with her guardian.', '', ''],
    ['Filme4', 'Haven Hurst - 2016', 'A troubled young woman takes up residence in a gothic apartment building where she must confront a terrifying evil.', '', ''],
    ['Filme5', 'John Wick: Chapter 2 - 2017', 'After returning to the criminal underworld to repay a debt, John Wick discovers that a large bounty has been put on his life.', '', ''],
    ['Filme6', 'Split - 2016', 'Three girls are kidnapped by a man with a diagnosed 23 distinct personalities. They must try to escape before the apparent emergence of a frightful new 24th.', '', '']
];
Trailer = [
    ['https://www.youtube.com/embed/AWm_mkbdpCA?ecver=2'],
    ['https://www.youtube.com/embed/izDsHmqAl8c?ecver=2'],
    ['https://www.youtube.com/embed/reRRAEVHq8E?ecver=2'],
    ['https://www.youtube.com/embed/LUxkRTxvkbE?ecver=2'],
    ['https://www.youtube.com/embed/jU1dsoV0P34?ecver=2'],
    ['https://www.youtube.com/embed/84TouqfIsiI?ecver=2']
]
function movie() {
    if (xm < 6) {
        xm++;
        xb++;
        ss++;
    } else if (xm == 6) {
        xm = 1;
        xb = 1;
        ss = 0;
    }
    document.getElementById("Poster").src = "Filmes/" + Movie[xm][im] + ".jpg";
    document.getElementById("Name1").innerHTML = Movie[xm][1];
    document.getElementById("texto").innerHTML = Movie[xm][2] + Movie[xm][3] + Movie[xm][4];
    document.getElementById("conteudo").style.backgroundImage = "url(Back/Back" + xb + ".jpg)";
    siga = setTimeout("movie()", 5000);
    if (aberto == false) {
        document.getElementById("show").src = Trailer[ss];
    }
}
function trailer() {
    aberto=true;
    document.getElementById("trailer").style.display = "inline-block";
}