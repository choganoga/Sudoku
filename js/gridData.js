//EASY GAMES--------------------------------------------------------------------
//game 1 values~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid1 = new Array(9);
for(var i = 0; i < grid1.length; i++){
    grid1[i] = new Array(9);
}
grid1[0][3] = 1;
grid1[0][6] = 2;
grid1[1][0] = 7;
grid1[1][2] = 4;
grid1[1][4] = 6;
grid1[1][7] = 9;
grid1[2][1] = 1;
grid1[2][8] = 4;
grid1[3][0] = 6;
grid1[3][3] = 5;
grid1[3][7] = 8;
grid1[4][2] = 3;
grid1[4][4] = 2;
grid1[4][6] = 1;
grid1[5][1] = 7;
grid1[5][5] = 4;
grid1[5][8] = 5;
grid1[6][0] = 5;
grid1[6][7] = 4;
grid1[7][1] = 4;
grid1[7][4] = 1;
grid1[7][6] = 6;
grid1[7][8] = 3;
grid1[8][2] = 2;
grid1[8][5] = 3;
for(var j = 0; j < grid1.length; j++){
    for(var k = 0; k < grid1[j].length; k++){
        if(grid1[j][k] == null){
            grid1[j][k] = " ";
        }
    }
}

//game 1 answers~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid1ans = new Array(9);
for(var a = 0; a < grid1ans.length; a++){
    grid1ans[a] = new Array(9);
}
grid1ans[0][0] = 3;
grid1ans[0][1] = 9;
grid1ans[0][2] = 5;
grid1ans[0][3] = 1;
grid1ans[0][4] = 4;
grid1ans[0][5] = 8;
grid1ans[0][6] = 2;
grid1ans[0][7] = 7;
grid1ans[0][8] = 6;
grid1ans[1][0] = 7;
grid1ans[1][1] = 8;
grid1ans[1][2] = 4;
grid1ans[1][3] = 3;
grid1ans[1][4] = 6;
grid1ans[1][5] = 2;
grid1ans[1][6] = 5;
grid1ans[1][7] = 9;
grid1ans[1][8] = 1;
grid1ans[2][0] = 2;
grid1ans[2][1] = 1;
grid1ans[2][2] = 6;
grid1ans[2][3] = 9;
grid1ans[2][4] = 7;
grid1ans[2][5] = 5;
grid1ans[2][6] = 8;
grid1ans[2][7] = 3;
grid1ans[2][8] = 4;
grid1ans[3][0] = 6;
grid1ans[3][1] = 2;
grid1ans[3][2] = 9;
grid1ans[3][3] = 5;
grid1ans[3][4] = 3;
grid1ans[3][5] = 1;
grid1ans[3][6] = 4;
grid1ans[3][7] = 8;
grid1ans[3][8] = 7;
grid1ans[4][0] = 4;
grid1ans[4][1] = 5;
grid1ans[4][2] = 3;
grid1ans[4][3] = 8;
grid1ans[4][4] = 2;
grid1ans[4][5] = 7;
grid1ans[4][6] = 1;
grid1ans[4][7] = 6;
grid1ans[4][8] = 9;
grid1ans[5][0] = 1;
grid1ans[5][1] = 7;
grid1ans[5][2] = 8;
grid1ans[5][3] = 6;
grid1ans[5][4] = 9;
grid1ans[5][5] = 4;
grid1ans[5][6] = 3;
grid1ans[5][7] = 2;
grid1ans[5][8] = 5;
grid1ans[6][0] = 5;
grid1ans[6][1] = 3;
grid1ans[6][2] = 1;
grid1ans[6][3] = 7;
grid1ans[6][4] = 8;
grid1ans[6][5] = 6;
grid1ans[6][6] = 9;
grid1ans[6][7] = 4;
grid1ans[6][8] = 2;
grid1ans[7][0] = 8;
grid1ans[7][1] = 4;
grid1ans[7][2] = 7;
grid1ans[7][3] = 2;
grid1ans[7][4] = 1;
grid1ans[7][5] = 9;
grid1ans[7][6] = 6;
grid1ans[7][7] = 5;
grid1ans[7][8] = 3;
grid1ans[8][0] = 9;
grid1ans[8][1] = 6;
grid1ans[8][2] = 2;
grid1ans[8][3] = 4;
grid1ans[8][4] = 5;
grid1ans[8][5] = 3;
grid1ans[8][6] = 7;
grid1ans[8][7] = 1;
grid1ans[8][8] = 8;

//game2 values~~~~~~~~~~~~~~~~~~~
var grid2 = new Array(9);
for(var b = 0; b < grid2.length; b++){
    grid2[b] = new Array(9);
}
grid2[0][3] = 2;
grid2[0][4] = 6;
grid2[0][6] = 7;
grid2[0][8] = 1;
grid2[1][0] = 6;
grid2[1][1] = 8;
grid2[1][4] = 7;
grid2[1][7] = 9;
grid2[2][0] = 1;
grid2[2][1] = 9;
grid2[2][5] = 4;
grid2[2][6] = 5;
grid2[3][0] = 8;
grid2[3][1] = 2;
grid2[3][3] = 1;
grid2[3][7] = 4;
grid2[4][2] = 4;
grid2[4][3] = 6;
grid2[4][5] = 2;
grid2[4][6] = 9;
grid2[5][1] = 5;
grid2[5][5] = 3;
grid2[5][7] = 2;
grid2[5][8] = 8;
grid2[6][2] = 9;
grid2[6][3] = 3;
grid2[6][7] = 7;
grid2[6][8] = 4;
grid2[7][1] = 4;
grid2[7][4] = 5;
grid2[7][7] = 3;
grid2[7][8] = 6;
grid2[8][0] = 7;
grid2[8][2] = 3;
grid2[8][4] = 1;
grid2[8][5] = 8;
for(var m = 0; m < grid2.length; m++){
    for(var n = 0; n < grid2[m].length; n++){
        if(grid2[m][n] == null){
            grid2[m][n] = " ";
        }
    }
}

//game2 answers~~~~~~~~~~~~~~~~~~~~
var grid2ans = new Array(9);
for(var c = 0; c < grid2ans.length; c++){
    grid2ans[c] = new Array(9);
}
grid2ans[0][0] = 4;
grid2ans[0][1] = 3;
grid2ans[0][2] = 5;
grid2ans[0][3] = 2;
grid2ans[0][4] = 6;
grid2ans[0][5] = 9;
grid2ans[0][6] = 7;
grid2ans[0][7] = 8;
grid2ans[0][8] = 1;
grid2ans[1][0] = 6;
grid2ans[1][1] = 8;
grid2ans[1][2] = 2;
grid2ans[1][3] = 5;
grid2ans[1][4] = 7;
grid2ans[1][5] = 1;
grid2ans[1][6] = 4;
grid2ans[1][7] = 9;
grid2ans[1][8] = 3;
grid2ans[2][0] = 1;
grid2ans[2][1] = 9;
grid2ans[2][2] = 7;
grid2ans[2][3] = 8;
grid2ans[2][4] = 3;
grid2ans[2][5] = 4;
grid2ans[2][6] = 5;
grid2ans[2][7] = 6;
grid2ans[2][8] = 2;
grid2ans[3][0] = 8;
grid2ans[3][1] = 2;
grid2ans[3][2] = 6;
grid2ans[3][3] = 1;
grid2ans[3][4] = 9;
grid2ans[3][5] = 5;
grid2ans[3][6] = 3;
grid2ans[3][7] = 4;
grid2ans[3][8] = 7;
grid2ans[4][0] = 3;
grid2ans[4][1] = 7;
grid2ans[4][2] = 4;
grid2ans[4][3] = 6;
grid2ans[4][4] = 8;
grid2ans[4][5] = 2;
grid2ans[4][6] = 9;
grid2ans[4][7] = 1;
grid2ans[4][8] = 5;
grid2ans[5][0] = 9;
grid2ans[5][1] = 5;
grid2ans[5][2] = 1;
grid2ans[5][3] = 7;
grid2ans[5][4] = 4;
grid2ans[5][5] = 3;
grid2ans[5][6] = 6;
grid2ans[5][7] = 2;
grid2ans[5][8] = 8;
grid2ans[6][0] = 5;
grid2ans[6][1] = 1;
grid2ans[6][2] = 9;
grid2ans[6][3] = 3;
grid2ans[6][4] = 2;
grid2ans[6][5] = 6;
grid2ans[6][6] = 8;
grid2ans[6][7] = 7;
grid2ans[6][8] = 4;
grid2ans[7][0] = 2;
grid2ans[7][1] = 4;
grid2ans[7][2] = 8;
grid2ans[7][3] = 9;
grid2ans[7][4] = 5;
grid2ans[7][5] = 7;
grid2ans[7][6] = 1;
grid2ans[7][7] = 3;
grid2ans[7][8] = 6;
grid2ans[8][0] = 7;
grid2ans[8][1] = 6;
grid2ans[8][2] = 3;
grid2ans[8][3] = 4;
grid2ans[8][4] = 1;
grid2ans[8][5] = 8;
grid2ans[8][6] = 2;
grid2ans[8][7] = 5;
grid2ans[8][8] = 9;

//game3 values~~~~~~~~~~~~~~~~~~~~~~~
var grid3 = new Array(9);
for(var d = 0; d < grid3.length; d++){
    grid3[d] = new Array(9);
}
grid3[0][0] = 1;
grid3[0][3] = 4;
grid3[0][4] = 8;
grid3[0][5] = 9;
grid3[0][8] = 6;
grid3[1][0] = 7;
grid3[1][1] = 3;
grid3[1][7] = 4;
grid3[2][5] = 1;
grid3[2][6] = 2;
grid3[2][7] = 9;
grid3[2][8] = 5;
grid3[3][2] = 7;
grid3[3][3] = 1;
grid3[3][4] = 2;
grid3[3][6] = 6;
grid3[4][0] = 5;
grid3[4][3] = 7;
grid3[4][5] = 3;
grid3[4][8] = 8;
grid3[5][2] = 6;
grid3[5][4] = 9;
grid3[5][5] = 5;
grid3[5][6] = 7;
grid3[6][0] = 9;
grid3[6][1] = 1;
grid3[6][2] = 4;
grid3[6][3] = 6;
grid3[7][1] = 2;
grid3[7][7] = 3;
grid3[7][8] = 7;
grid3[8][0] = 8;
grid3[8][3] = 5;
grid3[8][4] = 1;
grid3[8][5] = 2;
grid3[8][8] = 4;
for(var e = 0; e < grid3.length; e++){
    for(var f = 0; f < grid3[e].length; f++){
        if(grid3[e][f] == null){
            grid3[e][f] = " ";
        }
    }
}

//game3 answers~~~~~~~~~~~~~~~~~~~~~~
var grid3ans = new Array(9);
for(var g = 0; g < grid3ans.length; g++){
    grid3ans[g] = new Array(9);
}
grid3ans[0][0] = 1;
grid3ans[0][1] = 5;
grid3ans[0][2] = 2;
grid3ans[0][3] = 4;
grid3ans[0][4] = 8;
grid3ans[0][5] = 9;
grid3ans[0][6] = 3;
grid3ans[0][7] = 7;
grid3ans[0][8] = 6;
grid3ans[1][0] = 7;
grid3ans[1][1] = 3;
grid3ans[1][2] = 9;
grid3ans[1][3] = 2;
grid3ans[1][4] = 5;
grid3ans[1][5] = 6;
grid3ans[1][6] = 8;
grid3ans[1][7] = 4;
grid3ans[1][8] = 1;
grid3ans[2][0] = 4;
grid3ans[2][1] = 6;
grid3ans[2][2] = 8;
grid3ans[2][3] = 3;
grid3ans[2][4] = 7;
grid3ans[2][5] = 1;
grid3ans[2][6] = 2;
grid3ans[2][7] = 9;
grid3ans[2][8] = 5;
grid3ans[3][0] = 3;
grid3ans[3][1] = 8;
grid3ans[3][2] = 7;
grid3ans[3][3] = 1;
grid3ans[3][4] = 2;
grid3ans[3][5] = 4;
grid3ans[3][6] = 6;
grid3ans[3][7] = 5;
grid3ans[3][8] = 9;
grid3ans[4][0] = 5;
grid3ans[4][1] = 9;
grid3ans[4][2] = 1;
grid3ans[4][3] = 7;
grid3ans[4][4] = 6;
grid3ans[4][5] = 3;
grid3ans[4][6] = 4;
grid3ans[4][7] = 2;
grid3ans[4][8] = 8;
grid3ans[5][0] = 2;
grid3ans[5][1] = 4;
grid3ans[5][2] = 6;
grid3ans[5][3] = 8;
grid3ans[5][4] = 9;
grid3ans[5][5] = 5;
grid3ans[5][6] = 7;
grid3ans[5][7] = 1;
grid3ans[5][8] = 3;
grid3ans[6][0] = 9;
grid3ans[6][1] = 1;
grid3ans[6][2] = 4;
grid3ans[6][3] = 6;
grid3ans[6][4] = 3;
grid3ans[6][5] = 7;
grid3ans[6][6] = 5;
grid3ans[6][7] = 8;
grid3ans[6][8] = 2;
grid3ans[7][0] = 6;
grid3ans[7][1] = 2;
grid3ans[7][2] = 5;
grid3ans[7][3] = 9;
grid3ans[7][4] = 4;
grid3ans[7][5] = 8;
grid3ans[7][6] = 1;
grid3ans[7][7] = 3;
grid3ans[7][8] = 7;
grid3ans[8][0] = 8;
grid3ans[8][1] = 7;
grid3ans[8][2] = 3;
grid3ans[8][3] = 5;
grid3ans[8][4] = 1;
grid3ans[8][5] = 2;
grid3ans[8][6] = 9;
grid3ans[8][7] = 6;
grid3ans[8][8] = 4;

//MEDIUM GAMES------------------------------------------------------------------
//grid4 values~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid4 = new Array(9);
for(var l = 0; l < grid4.length; l++){
    grid4[l] = new Array(9);
}
grid4[0][1] = 7;
grid4[0][2] = 4;
grid4[0][5] = 8;
grid4[0][6] = 9;
grid4[1][3] = 3;
grid4[1][7] = 5;
grid4[2][2] = 2;
grid4[2][6] = 6;
grid4[3][0] = 3;
grid4[3][1] = 1;
grid4[3][4] = 7;
grid4[3][5] = 5;
grid4[5][3] = 4;
grid4[5][4] = 9;
grid4[5][7] = 6;
grid4[5][8] = 8;
grid4[6][2] = 5;
grid4[6][6] = 7;
grid4[7][1] = 8;
grid4[7][5] = 1;
grid4[8][2] = 6;
grid4[8][3] = 2;
grid4[8][6] = 3;
grid4[8][7] = 4;
for(var h = 0; h < grid4.length; h++){
    for(var ii = 0; ii < grid4[h].length; ii++){
        if(grid4[h][ii] == null){
            grid4[h][ii] = " ";
        }
    }
}
//grid4 answers~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid4ans = new Array(9);
for(var o = 0; o < grid4ans.length; o++){
    grid4ans[o] = new Array(9);
}
grid4ans[0][0] = 5;
grid4ans[0][1] = 7;
grid4ans[0][2] = 4;
grid4ans[0][3] = 1;
grid4ans[0][4] = 6;
grid4ans[0][5] = 8;
grid4ans[0][6] = 9;
grid4ans[0][7] = 3;
grid4ans[0][8] = 2;
grid4ans[1][0] = 9;
grid4ans[1][1] = 6;
grid4ans[1][2] = 1;
grid4ans[1][3] = 3;
grid4ans[1][4] = 2;
grid4ans[1][5] = 4;
grid4ans[1][6] = 8;
grid4ans[1][7] = 5;
grid4ans[1][8] = 7;
grid4ans[2][0] = 8;
grid4ans[2][1] = 3;
grid4ans[2][2] = 2;
grid4ans[2][3] = 7;
grid4ans[2][4] = 5;
grid4ans[2][5] = 9;
grid4ans[2][6] = 6;
grid4ans[2][7] = 1;
grid4ans[2][8] = 4;
grid4ans[3][0] = 3;
grid4ans[3][1] = 1;
grid4ans[3][2] = 8;
grid4ans[3][3] = 6;
grid4ans[3][4] = 7;
grid4ans[3][5] = 5;
grid4ans[3][6] = 4;
grid4ans[3][7] = 2;
grid4ans[3][8] = 9;
grid4ans[4][0] = 6;
grid4ans[4][1] = 4;
grid4ans[4][2] = 9;
grid4ans[4][3] = 8;
grid4ans[4][4] = 1;
grid4ans[4][5] = 2;
grid4ans[4][6] = 5;
grid4ans[4][7] = 7;
grid4ans[4][8] = 3;
grid4ans[5][0] = 2;
grid4ans[5][1] = 5;
grid4ans[5][2] = 7;
grid4ans[5][3] = 4;
grid4ans[5][4] = 9;
grid4ans[5][5] = 3;
grid4ans[5][6] = 1;
grid4ans[5][7] = 6;
grid4ans[5][8] = 8;
grid4ans[6][0] = 4;
grid4ans[6][1] = 2;
grid4ans[6][2] = 5;
grid4ans[6][3] = 9;
grid4ans[6][4] = 3;
grid4ans[6][5] = 6;
grid4ans[6][6] = 7;
grid4ans[6][7] = 8;
grid4ans[6][8] = 1;
grid4ans[7][0] = 7;
grid4ans[7][1] = 8;
grid4ans[7][2] = 3;
grid4ans[7][3] = 5;
grid4ans[7][4] = 4;
grid4ans[7][5] = 1;
grid4ans[7][6] = 2;
grid4ans[7][7] = 9;
grid4ans[7][8] = 6;
grid4ans[8][0] = 1;
grid4ans[8][1] = 9;
grid4ans[8][2] = 6;
grid4ans[8][3] = 2;
grid4ans[8][4] = 8;
grid4ans[8][5] = 7;
grid4ans[8][6] = 3;
grid4ans[8][7] = 4;
grid4ans[8][8] = 5;

//grid5 values~~~~~~~~~~~~~~~~~~~~~~~~~
var grid5 = new Array(9);
for(var p = 0; p < grid5.length; p++){
    grid5[p] = new Array(9);
}
grid5[0][1] = 2;
grid5[0][3] = 6;
grid5[0][5] = 8;
grid5[1][0] = 5;
grid5[1][1] = 8;
grid5[1][5] = 9;
grid5[1][6] = 7;
grid5[2][4] = 4;
grid5[3][0] = 3;
grid5[3][1] = 7;
grid5[3][6] = 5;
grid5[4][0] = 6;
grid5[4][8] = 4;
grid5[5][2] = 8;
grid5[5][7] = 1;
grid5[5][8] = 3;
grid5[6][4] = 2;
grid5[7][2] = 9;
grid5[7][3] = 8;
grid5[7][7] = 3;
grid5[7][8] = 6;
grid5[8][3] = 3;
grid5[8][5] = 6;
grid5[8][7] = 9;
for(var q = 0; q < grid5.length; q++){
    for(var r = 0; r < grid5[q].length; r++){
        if(grid5[q][r] == null){
            grid5[q][r] = " ";
        }
    }
}

//grid5 answers~~~~~~~~~~~~~~~~~~~~~~~~
var grid5ans = new Array(9);
for(var u = 0; u < grid5ans.length; u++){
    grid5ans[u] = new Array(9);
}
grid5ans[0][0] = 1;
grid5ans[0][1] = 2;
grid5ans[0][2] = 3;
grid5ans[0][3] = 6;
grid5ans[0][4] = 7;
grid5ans[0][5] = 8;
grid5ans[0][6] = 9;
grid5ans[0][7] = 4;
grid5ans[0][8] = 5;
grid5ans[1][0] = 5;
grid5ans[1][1] = 8;
grid5ans[1][2] = 4;
grid5ans[1][3] = 2;
grid5ans[1][4] = 3;
grid5ans[1][5] = 9;
grid5ans[1][6] = 7;
grid5ans[1][7] = 6;
grid5ans[1][8] = 1;
grid5ans[2][0] = 9;
grid5ans[2][1] = 6;
grid5ans[2][2] = 7;
grid5ans[2][3] = 1;
grid5ans[2][4] = 4;
grid5ans[2][5] = 5;
grid5ans[2][6] = 3;
grid5ans[2][7] = 2;
grid5ans[2][8] = 8;
grid5ans[3][0] = 3;
grid5ans[3][1] = 7;
grid5ans[3][2] = 2;
grid5ans[3][3] = 4;
grid5ans[3][4] = 6;
grid5ans[3][5] = 1;
grid5ans[3][6] = 5;
grid5ans[3][7] = 8;
grid5ans[3][8] = 9;
grid5ans[4][0] = 6;
grid5ans[4][1] = 9;
grid5ans[4][2] = 1;
grid5ans[4][3] = 5;
grid5ans[4][4] = 8;
grid5ans[4][5] = 3;
grid5ans[4][6] = 2;
grid5ans[4][7] = 7;
grid5ans[4][8] = 4;
grid5ans[5][0] = 4;
grid5ans[5][1] = 5;
grid5ans[5][2] = 8;
grid5ans[5][3] = 7;
grid5ans[5][4] = 9;
grid5ans[5][5] = 2;
grid5ans[5][6] = 6;
grid5ans[5][7] = 1;
grid5ans[5][8] = 3;
grid5ans[6][0] = 8;
grid5ans[6][1] = 3;
grid5ans[6][2] = 6;
grid5ans[6][3] = 9;
grid5ans[6][4] = 2;
grid5ans[6][5] = 4;
grid5ans[6][6] = 1;
grid5ans[6][7] = 5;
grid5ans[6][8] = 7;
grid5ans[7][0] = 2;
grid5ans[7][1] = 1;
grid5ans[7][2] = 9;
grid5ans[7][3] = 8;
grid5ans[7][4] = 5;
grid5ans[7][5] = 7;
grid5ans[7][6] = 4;
grid5ans[7][7] = 3;
grid5ans[7][8] = 6;
grid5ans[8][0] = 7;
grid5ans[8][1] = 4;
grid5ans[8][2] = 5;
grid5ans[8][3] = 3;
grid5ans[8][4] = 1;
grid5ans[8][5] = 6;
grid5ans[8][6] = 8;
grid5ans[8][7] = 9;
grid5ans[8][8] = 2;

//grid6 values~~~~~~~~~~~~~~~~~~~~~~~~~
var grid6 = new Array(9);
for(var v = 0; v < grid6.length; v++){
    grid6[v] = new Array(9);
}
grid6[0][3] = 6;
grid6[0][6] = 4;
grid6[1][0] = 7;
grid6[1][5] = 3;
grid6[1][6] = 6;
grid6[2][4] = 9;
grid6[2][5] = 1;
grid6[2][7] = 8;
grid6[4][1] = 5;
grid6[4][3] = 1;
grid6[4][4] = 8;
grid6[4][8] = 3;
grid6[5][3] = 3;
grid6[5][5] = 6;
grid6[5][7] = 4;
grid6[5][8] = 5;
grid6[6][1] = 4;
grid6[6][3] = 2;
grid6[6][7] = 6;
grid6[7][0] = 9;
grid6[7][2] = 3;
grid6[8][1] = 2;
grid6[8][6] = 1;
for(var s = 0; s < grid6.length; s++){
    for(var t = 0; t < grid6[s].length; t++){
        if(grid6[s][t] == null){
            grid6[s][t] = " ";
        }
    }
}
//grid6 answers~~~~~~~~~~~~~~~~~~~~~~~~
var grid6ans = new Array(9);
for(var w = 0; w < grid6ans.length; w++){
    grid6ans[w] = new Array(9);
}
grid6ans[0][0] = 5;
grid6ans[0][1] = 8;
grid6ans[0][2] = 1;
grid6ans[0][3] = 6;
grid6ans[0][4] = 7;
grid6ans[0][5] = 2; 
grid6ans[0][6] = 4;
grid6ans[0][7] = 3;
grid6ans[0][8] = 9;
grid6ans[1][0] = 7;
grid6ans[1][1] = 9;
grid6ans[1][2] = 2;
grid6ans[1][3] = 8;
grid6ans[1][4] = 4;
grid6ans[1][5] = 3;
grid6ans[1][6] = 6;
grid6ans[1][7] = 5;
grid6ans[1][8] = 1;
grid6ans[2][0] = 3;
grid6ans[2][1] = 6;
grid6ans[2][2] = 4;
grid6ans[2][3] = 5;
grid6ans[2][4] = 9;
grid6ans[2][5] = 1;
grid6ans[2][6] = 7;
grid6ans[2][7] = 8;
grid6ans[2][8] = 2;
grid6ans[3][0] = 4;
grid6ans[3][1] = 3;
grid6ans[3][2] = 8;
grid6ans[3][3] = 9;
grid6ans[3][4] = 5;
grid6ans[3][5] = 7;
grid6ans[3][6] = 2;
grid6ans[3][7] = 1;
grid6ans[3][8] = 6;
grid6ans[4][0] = 2;
grid6ans[4][1] = 5;
grid6ans[4][2] = 6;
grid6ans[4][3] = 1;
grid6ans[4][4] = 8;
grid6ans[4][5] = 4;
grid6ans[4][6] = 9;
grid6ans[4][7] = 7;
grid6ans[4][8] = 3;
grid6ans[5][0] = 1;
grid6ans[5][1] = 7;
grid6ans[5][2] = 9;
grid6ans[5][3] = 3;
grid6ans[5][4] = 2;
grid6ans[5][5] = 6;
grid6ans[5][6] = 8;
grid6ans[5][7] = 4;
grid6ans[5][8] = 5;
grid6ans[6][0] = 8;
grid6ans[6][1] = 4;
grid6ans[6][2] = 5;
grid6ans[6][3] = 2;
grid6ans[6][4] = 1;
grid6ans[6][5] = 9;
grid6ans[6][6] = 3;
grid6ans[6][7] = 6;
grid6ans[6][8] = 7;
grid6ans[7][0] = 9;
grid6ans[7][1] = 1;
grid6ans[7][2] = 3;
grid6ans[7][3] = 7;
grid6ans[7][4] = 6;
grid6ans[7][5] = 8;
grid6ans[7][6] = 5;
grid6ans[7][7] = 2;
grid6ans[7][8] = 4;
grid6ans[8][0] = 6;
grid6ans[8][1] = 2;
grid6ans[8][2] = 7;
grid6ans[8][3] = 4;
grid6ans[8][4] = 3;
grid6ans[8][5] = 5;
grid6ans[8][6] = 1;
grid6ans[8][7] = 9;
grid6ans[8][8] = 8;


//HARD GAMES--------------------------------------------------------------------
//grid7 values~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid7 = new Array(9);
for(var x = 0; x < grid7.length; x++){
    grid7[x] = new Array(9);
}
grid7[0][0] = 8;
grid7[0][1] = 9;
grid7[0][3] = 5;
grid7[0][6] = 4;
grid7[1][0] = 1;
grid7[1][4] = 6;
grid7[1][7] = 5;
grid7[2][2] = 4;
grid7[2][5] = 7;
grid7[3][1] = 3;
grid7[4][0] = 2;
grid7[4][3] = 7;
grid7[4][4] = 8;
grid7[4][5] = 9;
grid7[4][8] = 1;
grid7[5][7] = 2;
grid7[6][3] = 6;
grid7[6][6] = 3;
grid7[7][1] = 8;
grid7[7][4] = 5;
grid7[7][8] = 2;
grid7[8][2] = 7;
grid7[8][5] = 4;
grid7[8][7] = 8;
grid7[8][8] = 9;
for(var y = 0; y < grid7.length; y++){
    for(var z = 0; z < grid7[y].length; z++){
        if(grid7[y][z] == null){
            grid7[y][z] = " ";
        }
    }
}
//grid7 answers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid7ans = new Array(9);
for(var aa = 0; aa < grid7ans.length; aa++){
    grid7ans[aa] = new Array(9);
}
grid7ans[0][0] = 8;
grid7ans[0][1] = 9;
grid7ans[0][2] = 6;
grid7ans[0][3] = 5;
grid7ans[0][4] = 1;
grid7ans[0][5] = 2;
grid7ans[0][6] = 4;
grid7ans[0][7] = 7;
grid7ans[0][8] = 3;
grid7ans[1][0] = 1;
grid7ans[1][1] = 7;
grid7ans[1][2] = 2;
grid7ans[1][3] = 4;
grid7ans[1][4] = 6;
grid7ans[1][5] = 3;
grid7ans[1][6] = 9;
grid7ans[1][7] = 5;
grid7ans[1][8] = 8;
grid7ans[2][0] = 3;
grid7ans[2][1] = 5;
grid7ans[2][2] = 4;
grid7ans[2][3] = 8;
grid7ans[2][4] = 9;
grid7ans[2][5] = 7;
grid7ans[2][6] = 2;
grid7ans[2][7] = 1;
grid7ans[2][8] = 6;
grid7ans[3][0] = 7;
grid7ans[3][1] = 3;
grid7ans[3][2] = 8;
grid7ans[3][3] = 1;
grid7ans[3][4] = 2;
grid7ans[3][5] = 6;
grid7ans[3][6] = 5;
grid7ans[3][7] = 9;
grid7ans[3][8] = 4;
grid7ans[4][0] = 2;
grid7ans[4][1] = 4;
grid7ans[4][2] = 5;
grid7ans[4][3] = 7;
grid7ans[4][4] = 8;
grid7ans[4][5] = 9;
grid7ans[4][6] = 6;
grid7ans[4][7] = 3;
grid7ans[4][8] = 1;
grid7ans[5][0] = 6;
grid7ans[5][1] = 1;
grid7ans[5][2] = 9;
grid7ans[5][3] = 3;
grid7ans[5][4] = 4;
grid7ans[5][5] = 5;
grid7ans[5][6] = 8;
grid7ans[5][7] = 2;
grid7ans[5][8] = 7;
grid7ans[6][0] = 9;
grid7ans[6][1] = 2;
grid7ans[6][2] = 1;
grid7ans[6][3] = 6;
grid7ans[6][4] = 7;
grid7ans[6][5] = 8;
grid7ans[6][6] = 3;
grid7ans[6][7] = 4;
grid7ans[6][8] = 5;
grid7ans[7][0] = 4;
grid7ans[7][1] = 8;
grid7ans[7][2] = 3;
grid7ans[7][3] = 9;
grid7ans[7][4] = 5;
grid7ans[7][5] = 1;
grid7ans[7][6] = 7;
grid7ans[7][7] = 6;
grid7ans[7][8] = 2;
grid7ans[8][0] = 5;
grid7ans[8][1] = 6;
grid7ans[8][2] = 7;
grid7ans[8][3] = 2;
grid7ans[8][4] = 3;
grid7ans[8][5] = 4;
grid7ans[8][6] = 1;
grid7ans[8][7] = 8;
grid7ans[8][8] = 9;

//grid8 values~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid8 = new Array(9);
for(var bb = 0; bb < grid8.length; bb++){
    grid8[bb] = new Array(9);
}
grid8[0][0] = 2;
grid8[0][3] = 3;
grid8[1][0] = 8;
grid8[1][2] = 4;
grid8[1][4] = 6;
grid8[1][5] = 2;
grid8[1][8] = 3;
grid8[2][1] = 1;
grid8[2][2] = 3;
grid8[2][3] = 8;
grid8[2][6] = 2;
grid8[3][4] = 2;
grid8[3][6] = 3;
grid8[3][7] = 9;
grid8[4][0] = 5;
grid8[4][2] = 7;
grid8[4][6] = 6;
grid8[4][7] = 2;
grid8[4][8] = 1;
grid8[5][1] = 3;
grid8[5][2] = 2;
grid8[5][5] = 6;
grid8[6][1] = 2;
grid8[6][5] = 9;
grid8[6][6] = 1;
grid8[6][7] = 4;
grid8[7][0] = 6;
grid8[7][2] = 1;
grid8[7][3] = 2;
grid8[7][4] = 5;
grid8[7][6] = 8;
grid8[7][8] = 9;
grid8[8][5] = 1;
grid8[8][8] = 2;
for(var cc = 0; cc < grid8.length; cc++){
    for(var dd = 0; dd < grid8[cc].length; dd++){
        if(grid8[cc][dd] == null){
            grid8[cc][dd] = " ";
        }
    }
}

//grid8 answers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid8ans = new Array(9);
for(var ee = 0; ee < grid8ans.length; ee++){
    grid8ans[ee] = new Array(9);
}
grid8ans[0][0] = 2;
grid8ans[0][1] = 7;
grid8ans[0][2] = 6;
grid8ans[0][3] = 3;
grid8ans[0][4] = 1;
grid8ans[0][5] = 4;
grid8ans[0][6] = 9;
grid8ans[0][7] = 5;
grid8ans[0][8] = 8;
grid8ans[1][0] = 8;
grid8ans[1][1] = 5;
grid8ans[1][2] = 4;
grid8ans[1][3] = 9;
grid8ans[1][4] = 6;
grid8ans[1][5] = 2;
grid8ans[1][6] = 7;
grid8ans[1][7] = 1;
grid8ans[1][8] = 3;
grid8ans[2][0] = 9;
grid8ans[2][1] = 1;
grid8ans[2][2] = 3;
grid8ans[2][3] = 8;
grid8ans[2][4] = 7;
grid8ans[2][5] = 5;
grid8ans[2][6] = 2;
grid8ans[2][7] = 6;
grid8ans[2][8] = 4;
grid8ans[3][0] = 4;
grid8ans[3][1] = 6;
grid8ans[3][2] = 8;
grid8ans[3][3] = 1;
grid8ans[3][4] = 2;
grid8ans[3][5] = 7;
grid8ans[3][6] = 3;
grid8ans[3][7] = 9;
grid8ans[3][8] = 5;
grid8ans[4][0] = 5;
grid8ans[4][1] = 9;
grid8ans[4][2] = 7;
grid8ans[4][3] = 4;
grid8ans[4][4] = 3;
grid8ans[4][5] = 8;
grid8ans[4][6] = 6;
grid8ans[4][7] = 2;
grid8ans[4][8] = 1;
grid8ans[5][0] = 1;
grid8ans[5][1] = 3;
grid8ans[5][2] = 2;
grid8ans[5][3] = 5;
grid8ans[5][4] = 9;
grid8ans[5][5] = 6;
grid8ans[5][6] = 4;
grid8ans[5][7] = 8;
grid8ans[5][8] = 7;
grid8ans[6][0] = 3;
grid8ans[6][1] = 2;
grid8ans[6][2] = 5;
grid8ans[6][3] = 7;
grid8ans[6][4] = 8;
grid8ans[6][5] = 9;
grid8ans[6][6] = 1;
grid8ans[6][7] = 4;
grid8ans[6][8] = 6;
grid8ans[7][0] = 6;
grid8ans[7][1] = 4;
grid8ans[7][2] = 1;
grid8ans[7][3] = 2;
grid8ans[7][4] = 5;
grid8ans[7][5] = 3;
grid8ans[7][6] = 8;
grid8ans[7][7] = 7;
grid8ans[7][8] = 9;
grid8ans[8][0] = 7;
grid8ans[8][1] = 8;
grid8ans[8][2] = 9;
grid8ans[8][3] = 6;
grid8ans[8][4] = 4;
grid8ans[8][5] = 1;
grid8ans[8][6] = 5;
grid8ans[8][7] = 3;
grid8ans[8][8] = 2;

//grid9 values~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid9 = new Array(9);
for(var ff = 0; ff < grid9.length; ff++){
    grid9[ff] = new Array(9);
}
grid9[0][1] = 2;
grid9[1][3] = 6;
grid9[1][8] = 3;
grid9[2][1] = 7;
grid9[2][2] = 4;
grid9[2][4] = 8;
grid9[3][5] = 3;
grid9[3][8] = 2;
grid9[4][1] = 8;
grid9[4][4] = 4;
grid9[4][7] = 1;
grid9[5][0] = 6;
grid9[5][3] = 5;
grid9[6][4] = 1;
grid9[6][6] = 7;
grid9[6][7] = 8;
grid9[7][0] = 5;
grid9[7][5] = 9;
grid9[8][7] = 4;
for(var gg = 0; gg < grid9.length; gg++){
    for(var hh = 0; hh < grid9[gg].length; hh++){
        if(grid9[gg][hh] == null){
            grid9[gg][hh] = " ";
        }
    }
}
//grid9 answers~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var grid9ans = new Array(9);
for(var kk = 0; kk < grid9ans.length; kk++){
    grid9ans[kk] = new Array(9);
}
grid9ans[0][0] = 1;
grid9ans[0][1] = 2;
grid9ans[0][2] = 6;
grid9ans[0][3] = 4;
grid9ans[0][4] = 3;
grid9ans[0][5] = 7;
grid9ans[0][6] = 9;
grid9ans[0][7] = 5;
grid9ans[0][8] = 8;
grid9ans[1][0] = 8;
grid9ans[1][1] = 9;
grid9ans[1][2] = 5;
grid9ans[1][3] = 6;
grid9ans[1][4] = 2;
grid9ans[1][5] = 1;
grid9ans[1][6] = 4;
grid9ans[1][7] = 7;
grid9ans[1][8] = 3;
grid9ans[2][0] = 3;
grid9ans[2][1] = 7;
grid9ans[2][2] = 4;
grid9ans[2][3] = 9;
grid9ans[2][4] = 8;
grid9ans[2][5] = 5;
grid9ans[2][6] = 1;
grid9ans[2][7] = 2;
grid9ans[2][8] = 6;
grid9ans[3][0] = 4;
grid9ans[3][1] = 5;
grid9ans[3][2] = 7;
grid9ans[3][3] = 1;
grid9ans[3][4] = 9;
grid9ans[3][5] = 3;
grid9ans[3][6] = 8;
grid9ans[3][7] = 6;
grid9ans[3][8] = 2;
grid9ans[4][0] = 9;
grid9ans[4][1] = 8;
grid9ans[4][2] = 3;
grid9ans[4][3] = 2;
grid9ans[4][4] = 4;
grid9ans[4][5] = 6;
grid9ans[4][6] = 5;
grid9ans[4][7] = 1;
grid9ans[4][8] = 7;
grid9ans[5][0] = 6;
grid9ans[5][1] = 1;
grid9ans[5][2] = 2;
grid9ans[5][3] = 5;
grid9ans[5][4] = 7;
grid9ans[5][5] = 8;
grid9ans[5][6] = 3;
grid9ans[5][7] = 9;
grid9ans[5][8] = 4;
grid9ans[6][0] = 2;
grid9ans[6][1] = 6;
grid9ans[6][2] = 9;
grid9ans[6][3] = 3;
grid9ans[6][4] = 1;
grid9ans[6][5] = 4;
grid9ans[6][6] = 7;
grid9ans[6][7] = 8;
grid9ans[6][8] = 5;
grid9ans[7][0] = 5;
grid9ans[7][1] = 4;
grid9ans[7][2] = 8;
grid9ans[7][3] = 7;
grid9ans[7][4] = 6;
grid9ans[7][5] = 9;
grid9ans[7][6] = 2;
grid9ans[7][7] = 3;
grid9ans[7][8] = 1;
grid9ans[8][0] = 7;
grid9ans[8][1] = 3;
grid9ans[8][2] = 1;
grid9ans[8][3] = 8;
grid9ans[8][4] = 5;
grid9ans[8][5] = 2;
grid9ans[8][6] = 6;
grid9ans[8][7] = 4;
grid9ans[8][8] = 9;


//DEBUGGING GRID - All values and answers are 1's------------------------
var grid10 = new Array(9);
for(var oo = 0; oo < grid10.length; oo++){
    grid10[oo] = new Array(9);
}
grid10[0][0] = 1;
grid10[0][1] = 1;
grid10[0][2] = 1;
grid10[0][3] = 1;
grid10[0][4] = 1;
grid10[0][5] = 1;
grid10[0][6] = 1;
grid10[0][7] = 1;
grid10[0][8] = 1;
grid10[1][0] = 1;
grid10[1][1] = 1;
grid10[1][2] = 1;
grid10[1][3] = 1;
grid10[1][4] = 1;
grid10[1][5] = 1;
grid10[1][6] = 1;
grid10[1][7] = 1;
grid10[1][8] = 1;
grid10[2][0] = 1;
grid10[2][1] = 1;
grid10[2][2] = 1;
grid10[2][3] = 1;
grid10[2][4] = 1;
grid10[2][5] = 1;
grid10[2][6] = 1;
grid10[2][7] = 1;
grid10[2][8] = 1;
grid10[3][0] = 1;
grid10[3][1] = 1;
grid10[3][2] = 1;
grid10[3][3] = 1;
grid10[3][4] = 1;
grid10[3][5] = 1;
grid10[3][6] = 1;
grid10[3][7] = 1;
grid10[3][8] = 1;
grid10[4][0] = 1;
grid10[4][1] = 1;
grid10[4][2] = 1;
grid10[4][3] = 1;
grid10[4][4] = 1;
grid10[4][5] = 1;
grid10[4][6] = 1;
grid10[4][7] = 1;
grid10[4][8] = 1;
grid10[5][0] = 1;
grid10[5][1] = 1;
grid10[5][2] = 1;
grid10[5][3] = 1;
grid10[5][4] = 1;
grid10[5][5] = 1;
grid10[5][6] = 1;
grid10[5][7] = 1;
grid10[5][8] = 1;
grid10[6][0] = 1;
grid10[6][1] = 1;
grid10[6][2] = 1;
grid10[6][3] = 1;
grid10[6][4] = 1;
grid10[6][5] = 1;
grid10[6][6] = 1;
grid10[6][7] = 1;
grid10[6][8] = 1;
grid10[7][0] = 1;
grid10[7][1] = 1;
grid10[7][2] = 1;
grid10[7][3] = 1;
grid10[7][4] = 1;
grid10[7][5] = 1;
grid10[7][6] = 1;
grid10[7][7] = 1;
grid10[7][8] = 1;
grid10[8][0] = 1;
grid10[8][1] = 1;
grid10[8][2] = 1;
grid10[8][3] = 1;
grid10[8][4] = 1;
grid10[8][5] = 1;
grid10[8][6] = 1;
for(var jj = 0; jj < grid10.length; jj++){
    for(var ll = 0; ll < grid10[jj].length; ll++){
        if(grid10[jj][ll] == null){
            grid10[jj][ll] = " ";
        }
    }
}

var grid10ans = new Array(9);
for(var mm = 0; mm < grid10ans.length; mm++){
    grid10ans[mm] = new Array(9);
}
grid10ans[0][0] = 1;
grid10ans[0][1] = 1;
grid10ans[0][2] = 1;
grid10ans[0][3] = 1;
grid10ans[0][4] = 1;
grid10ans[0][5] = 1;
grid10ans[0][6] = 1;
grid10ans[0][7] = 1;
grid10ans[0][8] = 1;
grid10ans[1][0] = 1;
grid10ans[1][1] = 1;
grid10ans[1][2] = 1;
grid10ans[1][3] = 1;
grid10ans[1][4] = 1;
grid10ans[1][5] = 1;
grid10ans[1][6] = 1;
grid10ans[1][7] = 1;
grid10ans[1][8] = 1;
grid10ans[2][0] = 1;
grid10ans[2][1] = 1;
grid10ans[2][2] = 1;
grid10ans[2][3] = 1;
grid10ans[2][4] = 1;
grid10ans[2][5] = 1;
grid10ans[2][6] = 1;
grid10ans[2][7] = 1;
grid10ans[2][8] = 1;
grid10ans[3][0] = 1;
grid10ans[3][1] = 1;
grid10ans[3][2] = 1;
grid10ans[3][3] = 1;
grid10ans[3][4] = 1;
grid10ans[3][5] = 1;
grid10ans[3][6] = 1;
grid10ans[3][7] = 1;
grid10ans[3][8] = 1;
grid10ans[4][0] = 1;
grid10ans[4][1] = 1;
grid10ans[4][2] = 1;
grid10ans[4][3] = 1;
grid10ans[4][4] = 1;
grid10ans[4][5] = 1;
grid10ans[4][6] = 1;
grid10ans[4][7] = 1;
grid10ans[4][8] = 1;
grid10ans[5][0] = 1;
grid10ans[5][1] = 1;
grid10ans[5][2] = 1;
grid10ans[5][3] = 1;
grid10ans[5][4] = 1;
grid10ans[5][5] = 1;
grid10ans[5][6] = 1;
grid10ans[5][7] = 1;
grid10ans[5][8] = 1;
grid10ans[6][0] = 1;
grid10ans[6][1] = 1;
grid10ans[6][2] = 1;
grid10ans[6][3] = 1;
grid10ans[6][4] = 1;
grid10ans[6][5] = 1;
grid10ans[6][6] = 1;
grid10ans[6][7] = 1;
grid10ans[6][8] = 1;
grid10ans[7][0] = 1;
grid10ans[7][1] = 1;
grid10ans[7][2] = 1;
grid10ans[7][3] = 1;
grid10ans[7][4] = 1;
grid10ans[7][5] = 1;
grid10ans[7][6] = 1;
grid10ans[7][7] = 1;
grid10ans[7][8] = 1;
grid10ans[8][0] = 1;
grid10ans[8][1] = 1;
grid10ans[8][2] = 1;
grid10ans[8][3] = 1;
grid10ans[8][4] = 1;
grid10ans[8][5] = 1;
grid10ans[8][6] = 1;
grid10ans[8][7] = 1;
grid10ans[8][8] = 1;