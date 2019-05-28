// Code your solution here:

function driversWithRevenueOver(drivers, revenue2){
	return drivers.filter(driver => driver.revenue > revenue2);
};

function driverNamesWithRevenueOver (drivers, revenue) {
  return driversWithRevenueOver(drivers, revenue)
    .map(driver => driver.name);
};
function exactMatch(drivers, attr){
	return drivers.filter(function(driver) {
		let attrs = false;
		for (const key in attr){
			attrs = driver[key] === attr[key];
			}
					return attrs;
				});
			};



function exactMatchToList(drivers, attr){
	return exactMatch(drivers, attr)
		.map(driver => driver.name);
	};
    


// function exactMatchToList (drivers, matcher) {
//   return exactMatch(drivers, matcher)
//     .map(function (driver) {
//       return driver.name;
//     });
// }