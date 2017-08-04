var Bob = function (){
  isShouting = function isShouting(statement) {
    return (statement === (statement.toUpperCase()) && /[A-Z]/.test(statement))
  }
  function isAsking(statement) {
    return (/\?$/.test(statement.trim()))
  }
  function isGibberish(statement) {
    return (/^\s{1,}$/.test(statement)) || statement.length === 0
  }

  this.hey = function (input){
    if (isShouting(input)) {
      return  'Whoa, chill out!'
    } else if (isAsking(input)) {
      return 'Sure.'
    } else if (isGibberish(input)) {
      return 'Fine. Be that way!'
    } else {
      return 'Whatever.'
    }
  }
}

module.exports = Bob;
