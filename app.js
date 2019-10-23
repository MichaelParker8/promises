// function strArg(string){
//     console.log(string)
// }
// strArg('test')
// setTimeout( strArg, 3000,'test delayed')

// function getWords(word1,word2,word3, word4){
//     console.log(word1)
//     setTimeout(console.log, 3000, word2)
//     setTimeout(console.log, 5000, word3)
//     setTimeout(console.log, 6000, word4)   
// }
// getWords('hi','bye', 'word3', 'word4')

// function jobsDone(){
//     console.log('Job\'s done!')
// }
// function countdown(num,arg1){
//     if (num > 1){
//     setTimeout(function(){
//     num = num - 1
//     console.log(num)
//     countdown(num,arg1)
//     }, 1000, num)
//     } else {
//         arg1()
//     }
// }

// countdown(5, jobsDone)

let lunchTime = false
const orderMeSomeFood = () => {
    return new Promise((resolve, reject) => {
      if (lunchTime === true){
          favLunch = {
            lunch: "your favorite lunch",
            drink: "your favorite beverage"
        }
          resolve(console.log(favLunch))
      } else {
          reject(Error('It is not lunch time.'))
      }
    }).catch(function(err){
    console.log(err)
})
}
orderMeSomeFood()

