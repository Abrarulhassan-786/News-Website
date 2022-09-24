async function myFunc() {
    const url = "https://newsapi.org/v2/everything?q=apple&from=2022-09-23&to=2022-09-23&sortBy=popularity&apiKey=347ca119524c4a0cba201fd0bcdd7ca0";
    let response = await fetch(url);
    var dataGet = await response.json();
    showData(dataGet);
}
myFunc();

function showData(dataGet) {
    let tab;
    for (let key in dataGet) {
        for (let key1 in dataGet.articles) {
            console.log(dataGet.articles[key1])
            let getDate = new Date(dataGet.articles[key1].publishedAt);
            tab += `
            <div class="card" style="width: 34rem;" id="card${key1}">
                <img class="card-img-top" src="${dataGet.articles[key1].urlToImage}" alt="Card image cap">
                <div class="card-body">
                  <p class="card-text"><span>Title:</span> ${dataGet.articles[key1].title}</p>
                  <p class="card-text"> <span>ID:</span>  ${dataGet.articles[key1].source.id}</p>
                  <p class="card-text"> <span>Name:</span> ${dataGet.articles[key1].source.name}</p>
                  <p class="card-text"><span>Content:</span> ${dataGet.articles[key1].content}<a href="${dataGet.articles[key1].url}" target="_blank">Read More</a></p>
                  <p class="card-text"><span>Author:</span> ${dataGet.articles[key1].author}</p>
                  <p class="card-text"><span>Description:</span> ${dataGet.articles[key1].description}<a href="${dataGet.articles[key1].url}" target="_blank">Read More</a></p>
                  <a href="${dataGet.articles[key1].url}" target="_blank">More about this Article</a>
                  <p class="card-text"><span>Date:</span> ${getDate}</p>
                </div>
            </div>`;
        }
    }
    document.getElementById("f").innerHTML = tab;
}