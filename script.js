function calculateCurrentGrade(){
    var hwPoints = document.getElementById("hwp").value;
    var cwPoints = document.getElementById("cwp").value;
    var assessPoints = document.getElementById("ap").value;
    var parPoints = document.getElementById("pp").value;

    var hwPointsArray = convertArrayStringToNumber(hwPoints);
    var cwPointsArray = convertArrayStringToNumber(cwPoints);
    var assessPointsArray = convertArrayStringToNumber(assessPoints);
    var parPointsArray = convertArrayStringToNumber(parPoints);
//number
    var hwAvg = averageArray(hwPointsArray);
    var cwAvg = averageArray(cwPointsArray);
    var assessAvg = averageArray(assessPointsArray);
    var parAvg = averageArray(parPointsArray);
    console.log(parAvg);
// //average
    var hwWeight = parseInt(document.getElementById("hww").value);
    var cwWeight = parseInt(document.getElementById("cww").value);
    var assessWeight = parseInt(document.getElementById("aw").value);
    var parWeight = parseInt(document.getElementById("pw").value);


    var currentWeight = (hwWeight+cwWeight+assessWeight+parWeight)/100;
    var currentHw = (hwAvg*(hwWeight/100));
    var currentCw = (cwAvg*(cwWeight/100));
    var currentAssess = (assessAvg*(assessWeight/100));
    var currentPar = (parAvg*(parWeight/100));
    var currentGrade = (currentHw + currentCw + currentAssess + currentPar)/currentWeight;
    document.getElementById("currentGrade").innerHTML=currentGrade;

}


function convertArrayStringToNumber(str){
    console.log(str);
    var array = str.split(",");
    for(var i= 0; i<array.length; i++){
        array[i] = parseInt(array[i]);
    }
    return array;
}

function averageArray(array){
    var total = 0;
    for(var i= 0; i<array.length; i++){
        total += array[i];
    }
    var sum= total / array.length;
    console.log(sum);
    return sum;
}


function finalGradeCalculator (){
    var gradeDesired = parseInt(document.getElementById("gradeDesired").value)/100;
    var weight = parseInt(document.getElementById("finalWeight").value)/100;
    var currentGrade = parseInt(document.getElementById("currentGrade").innerHTML)/100;
    var gradeNeeded = ((gradeDesired-currentGrade*(1-weight))/weight) *100;
    document.getElementById("gradeNeeded").innerHTML= "you need a " + Math.round(gradeNeeded) + "% to get a " + gradeDesired *100 + "% in the class";



}

