<script>
let cities = ["New York", "Los Angeles", "Chicago", "Miami", "Houston"];
console.log("Total number of cities: " + cities.length);cities.push("San Francisco");
console.log("Cities after adding a new one: " + cities);
cities.shift();
console.log("Cities after removing the first one: " + cities);
let cityIndex = cities.indexOf("Miami");
console.log("Index of Miami: " + cityIndex);
</script>