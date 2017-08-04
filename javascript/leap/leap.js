var Year = function(input) {
  this.year = input;
}

Year.prototype.isLeap = function() {
  if (this.year % 400 == 0){
    return true
  } else if (this.year % 4 == 0 && this.year % 100 != 0) {
    return true
  } else {
    return false
  }
};

module.exports = Year;
