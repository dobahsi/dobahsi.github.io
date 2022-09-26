const str1 = document.getElementById('str1')
const finished = document.getElementById('finished')
const paragraph = document.getElementById('paragraph')
const wrong = document.getElementById('wrong')
var strv = '';

window.addEventListener('keypress', function(e){
    // console.log(e)
})

str1.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        e.preventDefault();
        strv = str1.value
        textcompare(strv);
    }
})

function textcompare(t){
    for (var i=0; i<t.length; i++){
        if (t[i] == paragraph.innerHTML[i]){
            console.log('t')
        } else {
            console.log(t[i], paragraph.innerHTML[i])
            wrong.innerHTML += `${paragraph.innerHTML.slice(i,i+1)} `
        }
    }
    console.log(i-paragraph.innerHTML.length)
    finished.innerHTML += paragraph.innerHTML.slice(0,i)
    paragraph.innerHTML.replace = paragraph.innerHTML.slice(i)
    str1.value = ''

}