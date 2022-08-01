const container = document.querySelector(".container");

fetch("../json/azkar.json")
  .then(res => res.json())
  .then(result => {
    for (let i = 0; i < result.morning_azkar.length; i++) {
      let cardDiv = document.createElement("div");
      let countDiv = document.createElement("div");
      let countText = document.createTextNode(result.morning_azkar[i].count);
      let contentDiv = document.createElement("div");
      let contentText = document.createTextNode(result.morning_azkar[i].content);
      cardDiv.setAttribute("class", "card");
      cardDiv.setAttribute("dir", "rtl");
      countDiv.setAttribute("class", "count")
      contentDiv.setAttribute("class", "content");
      countDiv.appendChild(countText);
      contentDiv.appendChild(contentText);
      cardDiv.appendChild(countDiv);
      cardDiv.appendChild(contentDiv);
      container.appendChild(cardDiv);
      cardDiv.addEventListener("click", () => {
        if (countDiv.innerHTML > 1) {
          countDiv.innerHTML = parseInt(countDiv.innerHTML) - 1;
        }
        else {
          countDiv.innerHTML = "✓";
          countDiv.style.color = "gray";
          countDiv.style.fontSize = "26px";
          cardDiv.classList.add("card-disabled");
          contentDiv.classList.add("content-disabled");
          window.navigator.vibrate(100);
        }
      });
    }
  });
