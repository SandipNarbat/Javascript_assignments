let emptyArr = [];
for(let i  = 0;i<10;i++){
    emptyArr.push(Math.floor(Math.random()*100));
}
let un = document.getElementById("unsorted");
un.innerHTML = "Unsorted Array : "+emptyArr;
let arr = emptyArr.sort((a, b) => a - b);
let sort = document.getElementById("sorted");
sort.innerHTML = "Sorted Array : "+arr;