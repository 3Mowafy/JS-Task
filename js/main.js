const programsFunctionNames = [
    printNumber,
    numberDivideBy3,
    maxTwoNumbers,
    printNegativeNumber,
    maxMinNumber,
    evenOddNumber,
    vowelOrConsonantCharacter,
    printNumberBetweenOneToNumber,
    multipyTableForNum,
    printEvenNumbers,
    powerForNumber,
    calcTotalAveragePercentage,
    numberOfDaysForMonth,
    percentageAndGrade,
    totalNumberOfDaysInMonth,
    checkAlphabet,
    maximumBetweenTwoNumbers,
    checkEvenAndOddNumber,
    checkNumbersType,
    simpleCalculator,
];

let aside = document.querySelector("aside");

for (let i = 0; i < 20; i++) {
    let Btn = document.createElement("button");
    Btn.innerHTML = String(programsFunctionNames[i]).split(" ", 2)[1];
    Btn.classList = "view-button";
    aside.append(Btn);
}

let section = document.querySelector("section");
const BtnForRunFunction = document.querySelectorAll(".view-button");
let result = "مفيش نتايج عشان ترتاح";

function showResultsOnBrowser(funcName) {
    funcName();
    section.innerHTML = `<h1>Result is : <span>${result}</span></h1>
    <pre>${funcName}</pre>`;
}

BtnForRunFunction.forEach((el, i) => {
    el.addEventListener("click", () => {
        showResultsOnBrowser(programsFunctionNames[i]);
    });
});

//1- Write a program that allow to user enter number then print it

function printNumber() {
    let num = +prompt("Enter Number To Print iT");

    !isNaN(num) ? (result = num) : alert("بتهزر صح؟");
}

//2-Write a program that take number from user then print yes if that number can divide by 3

function numberDivideBy3() {
    let num = +prompt("Enter Number To Show if Can divide by 3");
    if (isNaN(num)) alert("🌝ميصحش كده بقولك رقم🌝");
    else {
        if (num % 3 == 0) result = `${num} 👌, The divide Result is ${num / 3}`;
        else alert("🌝لا ميقبلش لا🌝");
    }
}

//3- Write a program that allows the user to insert 2 integers then print the max

function maxTwoNumbers() {
    let num_1 = +prompt(`To show the summation result
Enter the first number`),
        num_2 = +prompt("Enter the second number");

    !isNaN(num_1) && !isNaN(num_2)
        ? (result = num_1 + num_2)
        : alert("بتهزر صح؟");
}

//4-Write a program that allows the user to insert an integer then print negative if it is

function printNegativeNumber() {
    let num = +prompt("Enter the Negative Number");
    isNaN(num) || num >= 0 ? alert("لا مهواش رقم سالب لا") : (result = num);
}

//5- Write a program that take 3 integers from user then print the max element and the min element.

function maxMinNumber() {
    let num_1 = +prompt(`To show Max & Min Number
Enter the first number`),
        num_2 = +prompt("Enter the second number"),
        num_3 = +prompt("Enter the third number");

    !isNaN(num_1) && !isNaN(num_2) && !isNaN(num_3)
        ? (result = `The Max Number is:(${Math.max(
              num_1,
              num_2,
              num_3
          )}) && The Min Number is: (${Math.min(num_1, num_2, num_3)})`)
        : alert("بتهزر صح؟");
}

//6- Write a program that allows the user to insert integer number then check If a number is oven or odd

function evenOddNumber() {
    let num = +prompt("Enter Number To Show if it Even Or Odd");

    !isNaN(num)
        ? (result = num % 2 == 0 ? "Even Number" : "Odd Number")
        : alert("بتهزر صح؟");
}

//7- Write a program that take character from user then if it is vowel chars (a,e,I,o,u)
//then print vowel otherwise print consonant

function vowelOrConsonantCharacter() {
    let char = prompt("Enter One Character To Show if it vowel Or Consonant");
    isNaN(char) && char.length == 1
        ? (result = /[aeiouAEIOU]/.test(char)
              ? "The Character is Vowel"
              : "The Character is Consonant")
        : alert("بتهزر صح؟");
}

//8- Write a program that allows user to insert integer then print all numbers between1to that’s number

function printNumberBetweenOneToNumber() {
    let num = +prompt("Enter Number To Print From 1 To Your Number");
    let count = 2;
    result = "";
    if (!isNaN(num) && num > 2)
        while (count < num) {
            result += count + " | ";
            count++;
        }
    else {
        alert("بتهزر صح؟");
        result = "مفيش نتايج عشان ترتاح";
    }
}

//9 - Write a program that allows user to insert integer then print a multiplication table up to 12

function multipyTableForNum() {
    let num = +prompt("Enter Number To Show Multipy Table For This Number");
    let count = 0;
    result = "";
    if (!isNaN(num) && num >= 0)
        while (count <= num) {
            result += `<br> ${count} * ${num} = ${count * num}`;
            count++;
        }
    else {
        alert("بتهزر صح؟");
        result = "مفيش نتايج عشان ترتاح";
    }
}

//10- Writeaprogram thatallows to user to insert number then printallevennumbers between 1 to this number

function printEvenNumbers() {
    let num = +prompt("Enter Number To Print From 1 To Your Number");
    let count = 0;
    result = "";
    if (!isNaN(num) && num >= 0)
        while (count <= num) {
            result += count + " | ";
            console.log(count);
            count += 2;
        }
    else {
        alert("بتهزر صح؟");
        result = "مفيش نتايج عشان ترتاح";
    }
}

//11 -Write a program that take two integers then print the power

function powerForNumber() {
    let num_1 = +prompt(`To show the Power For Number
Enter the Base Number`),
        num_2 = +prompt("Enter the Exponent Number");

    !isNaN(num_1) && !isNaN(num_2)
        ? (result = Math.pow(num_1, num_2))
        : alert("بتهزر صح؟");
}

//12 -Write a program to enter marks of five subjects and calculate total, average and percentage.

function calcTotalAveragePercentage() {
    let num_1 = +prompt(`To show the Calculate Total,
             Average and percentag For Numbers

Enter the Mark For First Subject`),
        num_2 = +prompt("Enter the Mark For Second Subject"),
        num_3 = +prompt("Enter the Mark For Third Subject"),
        num_4 = +prompt("Enter the Mark For Fourth Subject"),
        num_5 = +prompt("Enter the Mark For Fifth Subject");

    let nums = [num_1, num_2, num_3, num_4, num_5];

    let total = nums.reduce((a, b) => a + b),
        average = total / nums.length;

    !isNaN(...nums) && /^(\d{1,2}|100)$/.test(...nums)
        ? (result = `Total Marks For Subjects = ${total} <br>
                     Average For Marks = ${average} <br>
                     Percentage For Marks = ${average} % <br>
                     <br>Full Marks is: ${nums.length * 100}`)
        : alert("بتهزر صح؟");
}

// 13- Write a program to input month number and print number of days in that month.

function numberOfDaysForMonth() {
    let month = +prompt("Enter Number Of Month To See Number Of days"),
        year = +prompt("Enter The Year");

    let date = new Date(year, month, 0),
        daysOfMonth = date.getDate(),
        monthName = date.toLocaleString("default", {
            month: "long",
        });
    console.log(monthName);

    !isNaN(month) &&
    !isNaN(year) &&
    /^([1-9]|12)$/.test(month) &&
    /^\d{4}$/.test(year)
        ? (result = `The Month is <span style="color: red">(${monthName})</span> 
         And days is : <span style="color: red">(${daysOfMonth})</span>`)
        : alert("بتهزر صح؟");
}

//14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

function percentageAndGrade() {
    let PhysicsMark = +prompt(`To show the Calculate Total,
             Average and percentag For Numbers

Enter the Mark For First Physics Subject`),
        ChemistryMark = +prompt("Enter the Mark For Chemistry Subject"),
        BiologyMark = +prompt("Enter the Mark For Biology Subject"),
        MathematicsMark = +prompt("Enter the Mark For Mathematics Subject"),
        ComputerMark = +prompt("Enter the Mark For Computer Subject");

    let subjects = [
            PhysicsMark,
            ChemistryMark,
            BiologyMark,
            MathematicsMark,
            ComputerMark,
        ],
        grade = subjects.reduce((a, b) => a + b),
        percentage = (grade / (subjects.length * 100)) * 100;

    !isNaN(...subjects) && /^(\d{1,2}|100)$/.test(...subjects)
        ? (result = `Total Marks For Subjects = ${grade} <br>
                     Percentage For Marks = ${percentage} %`)
        : alert("بتهزر صح؟");
}

//15 -Write a program to print total number of days in month

function totalNumberOfDaysInMonth() {
    let month = +prompt("Enter Number Of Month To See Number Of days"),
        year = +prompt("Enter The Year");

    let date = new Date(year, month, 0),
        daysOfMonth = date.getDate();

    !isNaN(month) &&
    !isNaN(year) &&
    /^([1-9]|12)$/.test(month) &&
    /^\d{4}$/.test(year)
        ? (result = `The Number of days is : <span style="color: red">(${daysOfMonth})</span>`)
        : alert("بتهزر صح؟");
}

//16-Write a program to check whether an alphabet is vowel or consonant

function checkAlphabet() {
    let chars = prompt("Enter Characters To Show if it vowel Or Consonant");
    result = "";
    if (isNaN(chars)) {
        chars.split("").forEach((e) => {
            result += /[aeiouAEIOU]/.test(e)
                ? `<span style="color:red">${e} </span> The Character is
                <span style="color:blue">Vowel </span><br>`
                : `<span style="color:red">${e} </span> The Character is 
                <span style="color:black">Consonant </span><br>`;
        });
    } else {
        alert("بتهزر صح؟");
    }
}

//17-Write a program to find maximum between two numbers

function maximumBetweenTwoNumbers() {
    let num_1 = +prompt(
            "Enter First Number To Print Maximum Between Two numbers"
        ),
        num_2 = +prompt("Enter Second Number");

    !isNaN(num_1) && !isNaN(num_2)
        ? (result = `Max Number is (${Math.max(num_1, num_2)})`)
        : alert("بتهزر صح؟");
}

//18-Write a program to check whether a number is even or odd

function checkEvenAndOddNumber() {
    let num = +prompt("Enter Number To Show if it Even Or Odd");

    !isNaN(num)
        ? (result = num % 2 == 0 ? "Even Number" : "Odd Number")
        : alert("بتهزر صح؟");
}
//19-Write a program to check whether a number is positive or negative or zero

function checkNumbersType() {
    let num = +prompt(
        "Enter Number To Show if it positive Or negative Or Zero"
    );

    !isNaN(num)
        ? (result =
              num > 0
                  ? "Positive Number"
                  : num < 0
                  ? "Negative Number"
                  : "Zero")
        : alert("بتهزر صح؟");
}

//20- Write a program to create Simple Calculator

function simpleCalculator() {
    let num_1 = +prompt("Enter Number Your First Number"),
        num_2 = +prompt("Enter Number Your Second Number"),
        operator = prompt(`Enter Your Operator To Calculate Your Numbers
        Like (* | + | - | / | %)`);

    if (!isNaN(num_1) && !isNaN(num_2) && /[+-/%\*]/.test(operator)) {
        switch (operator) {
            case "+":
                result = `The Result For Addition is = ${num_1 + num_2}`;
                break;
            case "-":
                result = `The Result For Subtraction is = ${num_1 - num_2}`;
                break;
            case "/":
                result = `The Result For Divid is = ${num_1 / num_2}`;
                break;
            case "*":
                result = `The Result For Multiply is = ${num_1 * num_2}`;
                break;
            case "%":
                result = `The Result For Modulus is = ${num_1 % num_2}`;
                break;
            default:
                "بتهزر صح؟";
        }
    } else {
        alert("بتهزر صح؟");
    }
}

let hideShowBtn = document.querySelector(".hide-show");

hideShowBtn.onclick = function () {
    aside.classList.toggle("aside-view");
};
