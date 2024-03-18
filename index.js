const fs = require("fs");
const csv = require("csv-parser");

const PageRemovalMap = [];
const DataExport = [];
const EditorialReport = [];
const Output = [];
const noindex_links = [];
let matchedData = [];

// const writeStream = fs.createWriteStream("removeUrls.js");

fs.createReadStream("remove.csv")
  .pipe(csv())
  .on("data", (data) => Output.push(data))
  .on("end", () => {
    console.log(Output.length);
    Output.map((e) => {
      noindex_links.push(e.Address.slice(15));
    });

    // noindex_links.forEach((url) => {
    //   console.log(url);
    // });
    // console.log(noindex_links.length);
    // //Writing Array to a file
    // console.log("=====>>>>>>Length", noindex_links.length);
    // noindex_links.forEach((value) => {
    //   const link = JSON.stringify(value);
    //   writeStream.write(`${link},\n`);
    // });

    // // the finish event is emitted when all data has been flushed from the stream
    // writeStream.on("finish", () => {
    //   console.log(`wrote all the array data to file...`);
    // });

    // // handle the errors on the write process
    // writeStream.on("error", (err) => {
    //   console.error(`There is an error writing the file`);
    // });

    // // close the stream
    // writeStream.end();
  });

// fs.createReadStream("data-export.csv")
//   .pipe(csv())
//   .on("data", (data) => DataExport.push(data))
//   .on("end", () => {
//     console.log("Data Export", DataExport.length);
//   });

// const CompareFunction = () => {
//   for (let i = 0; i < PageRemovalMap.length; i++) {
//     let matchFound = false;
//     for (let j = 0; j < DataExport.length; j++) {
//       let link = PageRemovalMap[i]["Page"].slice(15);
//       if (link === DataExport[j]["Page path and screen class"]) {
//         let obj = { ...PageRemovalMap[i] };
//         for (let key in DataExport[j]) {
//           if (key !== "Page path and screen class") {
//             obj[key] = DataExport[j][key];
//           }
//         }
//         matchedData.push(obj);
//         matchFound = true;
//         break;
//       }
//     }
//     if (!matchFound) {
//       matchedData.push(PageRemovalMap[i]);
//     }
//   }
//   console.log("Matched Data", matchedData[0], matchedData.length);
// };

// fs.createReadStream("EditorialReport.csv")
//   .pipe(csv())
//   .on("data", (data) => EditorialReport.push(data))
//   .on("end", () => {
//     console.log("Editorial Report", EditorialReport.length, EditorialReport[0]);
//   });
// let matchCount = 0;
// fs.createReadStream("Output.csv")
//   .pipe(csv())
//   .on("data", (data) => Output.push(data))
//   .on("end", () => {
//     console.log("Output", Output.length);
//     for (let i = 0; i < Output.length; i++) {
//       let matchFound = false;
//       for (let j = 0; j < EditorialReport.length; j++) {
//         if (Output[i]["Page"] === EditorialReport[j]["Herb Co Page Url"]) {
//           let obj = { ...Output[i] };
//           for (let key in EditorialReport[j]) {
//             if (key !== "Herb Co Page Url") {
//               obj[key] = EditorialReport[j][key];
//             }
//           }
//           matchedData.push(obj);
//           matchFound = true;
//           matchCount++;
//           break;
//         }
//       }
//       if (!matchFound) {
//         matchedData.push(Output[i]);
//       }
//     }
//     console.log("Matched Data", matchedData[0], matchedData.length);
//     console.log("Match Count", matchCount);
//   });

function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}

setTimeout(() => {
  // CompareFunction();
  // let csvFile = convertToCSV(matchedData);
  // fs.writeFile('output2.csv',csvFile,(err)=>{
  //   if(err){
  //     console.log(err);
  //   }
  //   console.log("File Created")
  // })
}, 5000);
