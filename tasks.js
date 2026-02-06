console.log("map example")


// 1. Double daily steps count
const steps = [1000, 2000, 3000];
const newSteps = steps.map(step => step * 2);
console.log(newSteps);


// 2. Convert minutes to seconds
const minutes = [1, 5, 10];
const seconds = minutes.map(min => min * 60);
console.log(seconds);


// 3. Add ₹50 delivery charge to prices
const prices1 = [200, 350, 500];
const finalPrices = prices1.map(price => price + 50);
console.log(finalPrices);


// 4. Convert exam marks to grades
const marks = [35, 72, 88, 40];
const grades = marks.map(mark => mark >= 40 ? 'Pass' : 'Fail');
console.log(grades);


// 5. Capitalize names
const names = ['rahul', 'neha', 'amit'];
const formattedNames = names.map(
  name => name[0].toUpperCase() + name.slice(1)
);
console.log(formattedNames);


// 6. Apply 10% discount
const prices2 = [500, 1000, 1500];
const discounted = prices2.map(price => price - price * 0.10);
console.log(discounted);


// 7. Add bonus points based on condition
const scores = [45, 60, 85];
const finalScores = scores.map(score => {
  if (score >= 80) return score + 20;
  if (score >= 50) return score + 10;
  return score;
});
console.log(finalScores);


// 8. Convert Celsius to Fahrenheit
const celsius = [0, 20, 30];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);
console.log(fahrenheit);


// 9. Generate table of 2
const numbers = [1, 2, 3, 4];
const tableOfTwo = numbers.map(num => num * 2);
console.log(tableOfTwo);


// 10. Map with string formatting
const balances = [500, 1200, 300];
const messages = balances.map(
  balance => `Your balance is ₹${balance}`
);
console.log(messages);




// ---------------------------------------------------------------------------
console.log("filter example")

// 1. Get even numbers
const number = [1, 2, 3, 4, 5, 6];
const evenNumbers = number.filter(num => num % 2 === 0);
console.log(evenNumbers);


// 2. Filter adults
const ages = [2, 1, 10, 16, 5, 18, 21];
const adults = ages.filter(age => age >= 18);
console.log(adults);


// 3. Remove empty items
const inputs = ['Hello', '', 'World', '', 'JS'];
const validInputs = inputs.filter(text => text !== '');
console.log(validInputs);


// 4. Filter passing marks
const mark = [35, 72, 88, 40, 25];
const passedStudents = mark.filter(mark => mark >= 40);
console.log(passedStudents);


// 5. Get affordable prices
const prices = [199, 499, 999, 1499, 299];
const affordable = prices.filter(price => price <= 500);
console.log(affordable);


// 6. Filter long words
const words = ['hi', 'hello', 'javascript', 'ok'];
const longWords = words.filter(word => word.length > 3);
console.log(longWords);


// 7. Filter positive numbers
const transactions = [200, -100, 500, -50, 300];
const credits = transactions.filter(amount => amount > 0);
console.log(credits);


// 8. Filter numbers within a range
const score = [45, 60, 85, 30, 90];
const selectedScores = score.filter(
  score => score >= 50 && score <= 90
);
console.log(selectedScores);





