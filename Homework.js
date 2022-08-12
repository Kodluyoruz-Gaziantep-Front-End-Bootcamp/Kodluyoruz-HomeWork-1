let arr1 = ['2', 'a', '3', 3, 4, 3, 5, 5]
let arr2 = ['c', 'c', 'h', 1, 1, 1, 4]
let arr3 = [
    { name: 'ali', id: 221 },
    { name: 'veli', id: 343 },
    { name: 'konya', id: 333 },
    { name: 'ali', id: 664 },
    { name: 'selim', id: 112 }
]
let arr4 = [1, 1, 1, 4, 5, 5, 3, 2]
/* 
ÖDEVV
1- arr1 başına 'a' elemanını ekleyiniz
2- arr1 sonuna 6 elemanını ekleyiniz
3- arr1 sonundaki elemanı siliniz
4- arr1 başındaki elemanı siliniz
5- arr1 ile arr2 arraylerini iki farklı yöntemle birleştiriniz
6- kendisine gönderilen arrayde verilen elemanın olup olmadığını bulan array ve 
    aranan eleman olmak üzere iki parametre alan ve geriye boolean değer döndüren bir fonksiyon yazınız
    ve bu fonkisiyona arr2 ve 'h' parametresini verip çağırınız
7- arr2 içindeki 'h' elemanın indexsini bulunuz
8- arr2 nin eleman sayısını 3 adete 2 faklı yöntemle düşrünüz
9- kendisine verilecek array elemanlarını döngü ile dönüp, array içindeki number
    değerlerinin toplamını geriye dönen bir fonkiyon yazınız ve arr1 değeri ile çağırınız   
10- arr1 elemanlarını string değere çeviren bir map fonksiyonu yazınız    
11- arr3 içindeki id değeri 221 olan elemanı bulunuz
12- arr3 içindeki user değerleri ali olan elemanları bulunuz
13- arr3 içindeki elemanlarının id değerlerinin toplamlarını bulan bir reduce fonsiyonu yazınız
her sorunun cevabını console.log ile yazıdırın
*/

// 1
arr1.unshift("a")
console.log(arr1)

// 2
arr1.push(6)
console.log(arr1)

// 3
arr1.pop()
console.log(arr1)

// 4
arr1.shift()
console.log(arr1)

// 5
const newArray1 = arr1.concat(arr2)
const newArray2 = [...arr1, ...arr2]

console.log(newArray1)
console.log(newArray2)

// 6
function searchWorkman(arr,val) {
    if(arr.includes(val)) {
        return true
    } else {
        return false
    }
}
console.log(searchWorkman(arr2,"h"))


// 7
console.log(arr2.indexOf('h'))

// 8
arr2.splice(0,4)
console.log(arr2)
let newArrays = arr2.slice(3, arr2.length - 1)
console.log(newArrays)


// 9
function numArrays(arr) {
    arr.map((item) => {
        if((typeof item) === "string") {
           let index = arr.indexOf(item)
           return arr[index] = 0
        }
    })
    console.log(arr)

    return arr.reduce((a,b) => a + b, 0)

}

console.log(numArrays(arr1))

// 10

function numToString(arr) {
    arr.map(item => {
        let itemString = item.toString()
        console.log(typeof itemString)
    })
}
numToString(arr1)


// 11
let findId = arr3.filter(x => x.id === 221)
console.log(findId)

// 12
let usersAli = arr3.filter(user => user.name === 'ali')
console.log(usersAli)

// 13
function sumId(arr) {
    let arrs = [];

    for( let i = 0 ; i < arr.length ; i++) {
        arrs.push(arr[i].id)
    }

   return arrs.reduce((a,b) => a + b,0)
}

console.log(sumId(arr3))