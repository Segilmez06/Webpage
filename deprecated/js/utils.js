// Disabling action by returning false
function disabled(){return false;}

// Sometimes, a break is not that bad...
function delay(time) { return new Promise(resolve => setTimeout(resolve, time)); }