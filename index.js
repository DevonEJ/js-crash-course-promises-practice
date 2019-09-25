const fs = require("fs");
const { promisify } = require("util");

const step1 = () => {
    printStuff = promisify(fs.readFile);
    return printStuff("./step1.txt", "utf8");
  };

const step2 = () => console.log("step2");

const step3 = () => {
  printStuff = promisify(fs.readFile)
  return printStuff("./step3.txt", "utf8")
  };

const step4 = () => console.log("step4");

const step5 = () => {
  fs.readFile("./step5.txt", "utf8", (err, data) => {
    console.log(data);
  });
};

const promiseExample = () => {
  constreadFile = promisify(fs.readFile);
  return readFile("./step1.txt", "utf8");
};


const step1AndStep2 = () => {
    printStuff = promisify(fs.readFile);
    printStuff("./step1.txt", "utf8").then(console.log('step2'));
};


// Print steps 1-4 in order using promises and async await
const step3ToStep4 = async () => {
    const Step1 = await step1();
    console.log(Step1);
    step2();
    const Step3 = await step3();
    console.log(Step3);
    step4();
}

step3ToStep4();