

function add(a, b){
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject ('a and b should be numbers....')
    }
  })
}

add(1, 4).then(function(sum){
    console.log('sum: ', sum);
  }, (function (error){
    console.log('Error: ', error);
  })
)

add(1, '4').then(function(sum){
    console.log('sum: ', sum);
  }, (function (error){
    console.log('Error: ', error);
  })
)
