const div = document.createElement('p');
div.style.color = "black";
div.style.fontSize = "58px"
div.textContent = "TEST";
const h = document.querySelector('h1');
h.style.color = "purple";
document.querySelector('body').appendChild(div);
const button = document.createElement('button');
button.textContent = "testtesttetests";
button.addEventListener('click', () => {
    div.style.color = "red";
    button.remove();
})
document.body.appendChild(button);

function h2o(arr){
    const [c,h,o] = arr;
    if(Math.ceil(h / 2) > o){
    return [c, (h - (o * 2)), 0, o];
  }else{
    return [c, 0, Math.ceil(o - (h / 2) + 1), Math.floor(h / 2)]
  }
}

function co2(arr){
    const [c,h,o] = arr;
    if(c > o / 2){
        return [c - (o / 2), h, 0, c - (o / 2)];
    }else{
        return [0, h, o - (c * 2), o - (c * 2)];
    }
}
const values = [[5,6,3],[2,5,7],[9,10,11]];
console.log(values.reduce((a,b) =>
    {
        const[v,n,m] = a;
        return [
              b.filter(x => x % 1 == 0).length
         + v, b.filter(x => x % 2 == 0).length
         + n, b.filter(x => x % 3 == 0).length + m
        ];
    }, [0,0,0]));
