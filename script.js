let srch = document.querySelector("input");
let button = document.querySelector("button");
let tableBody = document.querySelector("tbody");
let ans = [];
let finalArr = [];
let trArray = [];
srch.addEventListener("input", () => {
  finalArr.splice(0);
  trArray.splice(0);
  emojiList.forEach((val) => {
    val["aliases"].filter((element) => {
      if (element.search(srch.value) > -1) {
        replacedata(val);
      }
    });
  });
  console.log(...trArray);
  tableBody.replaceChildren(...trArray);
});

function replacedata(obj) {
  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${obj["emoji"]}</td>
                      <td>${obj["aliases"]}</td>
                      <td>${obj["description"]}</td>`;
  trArray.push(tr);
}

emojiList.forEach((val) => {
  let tr = document.createElement("tr");
  tr.innerHTML = `<td>${val["emoji"]}</td>
                    <td>${val["aliases"]}</td>
                    <td>${val["description"]}</td>`;
  tableBody.appendChild(tr);
});
