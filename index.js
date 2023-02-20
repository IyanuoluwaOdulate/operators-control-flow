//Question 3
let Science = 'Physics, Chemistry, Biology, Technical Drawing'
let SocialScience = 'Accounting, Commerce, Marketing, Geography'
let Arts = 'Government, Economics, Literature, History'
let GeneralSubjects = 'English, Mathematics'

let Dept = Arts
if (Dept == Science) {
    console.log("These are the science subjects: " + Science + " " + GeneralSubjects);
}  else if (Dept == SocialScience) {
    console.log("These are the social science subjects: " + SocialScience + " " + GeneralSubjects);
}  else if (Dept == Arts) {
    console.log("These are the arts subjects: " + Arts + " " + GeneralSubjects);
}  else {
    console.log(GeneralSubjects);
}

//Question 5

let Num = 18;
2 ** 3;
2 ** 4;
2 ** 5;

let Pwr = 2 ** 4;
console.log("The number " + Pwr + " is the power of 2 nearest to " + Num )