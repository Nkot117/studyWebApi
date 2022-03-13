"use strict";

{
    const addNameButton = document.getElementById("addNameBtn");
    const addUserNameButton = document.getElementById("addUserNameBtn");
    const addEmailButton = document.getElementById("addEmailBtn");
    const lists = document.getElementById("lists");

    // イベントを設定
    window.addEventListener("load", () => {
        addNameButton.addEventListener("click", async() => {
            const data = await getApi("https://jsonplaceholder.typicode.com/users");
            drawData(data, "name");
        });

        addUserNameButton.addEventListener("click", async() => {
            const data = await getApi("https://jsonplaceholder.typicode.com/users");
            drawData(data, "username");
        });

        addEmailButton.addEventListener("click", async() => {
            const data = await getApi("https://jsonplaceholder.typicode.com/users");
            drawData(data, "email");
        });
    });

    // データのやり取り
    async function getApi(url) {
        const res = await fetch(url);
        const data = await res.json();
        return data;
    }

    // 描画
    function drawData(data, type) {
        data.forEach((data) => {
            const li = document.createElement("li");
            li.textContent = data[type];
            console.log(li);
            lists.appendChild(li);
        });
    }
}