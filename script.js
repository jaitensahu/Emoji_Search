let srch = document.querySelector("input");
let button = document.querySelector("button");
let tableBody = document.querySelector("tbody");
let ans = [];
let finalArr = [];
srch.addEventListener("input", () => {
  finalArr.splice(0);
  let newArrr = emojiList.map((val) => {
    let ans = val["tags"].filter((element) => {
      if (element.search(srch.value) > -1) {
        return val;
      }
    });
    if (ans.length > 0) {
    //   return ans;
// console.log(ans);
    }
  });
  newArrr.forEach((ele) => {
    if (ele != undefined) {
      finalArr.push(ele);
    }
  });

  replacedata(finalArr);
});
function replacedata(newArray) {
  newArray.forEach((val) => {
    console.log(val);
    // let tr = document.createElement("tr");
    // tr.innerHTML = `<td>${val["emoji"]}</td>
    //                   <td>${val["description"]}</td>
    //                   <td>${val["ios_version"]}</td>`;
    // tableBody.appendChild(tr);
  });

  //  console.log(tableBody.find(tr));
}
