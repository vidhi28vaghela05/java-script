console.log("map example")
console.log(" ")

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



console.log(" ")
// ---------------------------------------------------------------------------
console.log("filter example")
console.log(" ")

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



console.log(" ")
// ---------------------------------------------------------------------------
console.log("reduce example")
console.log(" ")


// 1. Total money in wallet
const money = [100, 200, 50];
const totalMoney = money.reduce((sum, amount) => sum + amount, 0);
console.log(totalMoney);


// 2. Total steps walked in a week
const step = [3000, 5000, 4000, 6000];
const weeklySteps = step.reduce((total, step) => total + step, 0);
console.log(weeklySteps);


// 3. Find total cart price
const price = [499, 299, 199];
const totalPrice = price.reduce((total, price) => total + price, 0);
console.log(totalPrice);


// 4. Find maximum score
const marks1 = [45, 88, 67, 92];
const highest = marks1.reduce((max, mark) => {
  return mark > max ? mark : max;
}, marks1[0]);
console.log(highest);


// 5. Count total characters
const words1 = ['Hi', 'Hello', 'JS'];
const totalChars = words1.reduce(
  (count, word) => count + word.length,
  0
);
console.log(totalChars);


// 6. Combine words into a sentence
const words2 = ['Learning', 'JavaScript', 'is', 'fun'];
const sentence = words2.reduce(
  (text, word) => text + ' ' + word
);
console.log(sentence);


// 7. Count passed students
const marks2 = [35, 72, 88, 40, 25];
const passCount = marks2.reduce((count, mark) => {
  return mark >= 40 ? count + 1 : count;
}, 0);
console.log(passCount);

  
// 8. Calculate final balance
const transaction = [1000, -200, -300, 500];
const finalBalance = transaction.reduce(
  (balance, amount) => balance + amount,
  0
);
console.log(finalBalance);


// 9. Sum of even numbers
const numbers1 = [1, 2, 3, 4, 5, 6];
const evenSum = numbers1.reduce((sum, num) => {
  return num % 2 === 0 ? sum + num : sum;
}, 0);
console.log(evenSum);


// 10. Build comma-separated string
const items = ['Pen', 'Book', 'Pencil'];
const result = items.reduce(
  (text, item) => text + ', ' + item
);
console.log(result);



console.log(" ")
// ---------------------------------------------------------------------------

console.log("FILTER + MAP + REDUCE EXAMPLES");
console.log(" ")

// Q1. Shopping App – Discounted Total
const prices12 = [200, 800, 1200, 450, 700];
const total = prices12
  .filter(price => price > 500)
  .map(price => price * 0.9)
  .reduce((sum, price) => sum + price, 0);
console.log("Q1 Total:", total);


// Q2. Fitness App – Total Active Minutes
const minutes1 = [20, 45, 60, 15, 90];
const totalCalories = minutes1
  .filter(min => min > 30)
  .map(min => min * 5)
  .reduce((total, cal) => total + cal, 0);
console.log("Q2 Total Calories:", totalCalories);


// Q3. Exam System – Average of Passed Marks
const marks12 = [35, 72, 88, 40, 25, 90];
const passed = marks12.filter(mark => mark >= 40);
const average =
  passed.reduce((sum, mark) => sum + mark, 0) / passed.length;
console.log("Q3 Average Marks:", average);


// Q4. Salary System – Monthly Payout
const wages = [300, 800, 450, 1000, 600];
const totalPayout = wages
  .filter(wage => wage > 500)
  .map(wage => wage + 100)
  .reduce((total, wage) => total + wage, 0);
console.log("Q4 Total Payout:", totalPayout);


// Q5. Online Course – Completion Points
const progress = [20, 50, 75, 40, 100];
const totalPoints1 = progress
  .filter(p => p >= 50)
  .map(p => p * 2)
  .reduce((sum, p) => sum + p, 0);
console.log("Q5 Total Points:", totalPoints1);


// Q6. Bank Transactions – Final Balance
const transactions1 = [1000, -500, 2000, -300, 1500];
const creditedAmount = transactions1
  .filter(amount => amount > 0)
  .map(amount => amount * 1.02)
  .reduce((total, amount) => total + amount, 0);
console.log("Q6 Credited Amount:", creditedAmount);


// Q7. Game App – Final Score
const scores1 = [30, 60, 90, 45, 80];
const finalScore = scores1
  .filter(score => score > 50)
  .map(score => score + 10)
  .reduce((sum, score) => sum + score, 0);
console.log("Q7 Final Score:", finalScore);


// Q8. E-commerce – Total Taxed Amount
const prices21 = [500, 1200, 3000, 800, 1500];
const finalAmount = prices21
  .filter(price => price > 1000)
  .map(price => price * 1.18)
  .reduce((sum, price) => sum + price, 0);
console.log("Q8 Final Amount:", finalAmount);


// Q9. Attendance System – Reward Points
const hours = [6, 8, 9, 7, 10];
const totalPoints2 = hours
  .filter(hour => hour >= 8)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);
console.log("Q9 Total Points:", totalPoints2);


// Q10. Interview Brain Teaser – Sum of Squares
const numbers12 = [1, 2, 3, 4, 5, 6];
const sumOfSquares = numbers12
  .filter(num => num % 2 === 0)
  .map(num => num * num)
  .reduce((sum, num) => sum + num, 0);
console.log("Q10 Sum of Squares:", sumOfSquares);




console.log(" ")
// ---------------------------------------------------------------------------
console.log("FILTER + MAP + REDUCE PRACTICE SET");
console.log(" ")

// Q1. Grocery Store – Total Cost
const prices123 = [50, 120, 300, 80, 200];
const totalCost = prices123
  .filter(p => p > 100)
  .map(p => p * 1.05)
  .reduce((s, p) => s + p, 0);
console.log("Q1:", totalCost);


// Q2. Fitness App – Weekly Calories
const minutes12 = [10, 25, 40, 15, 60];
const totalCalories1 = minutes12
  .filter(m => m >= 20)
  .map(m => m * 4)
  .reduce((s, c) => s + c, 0);
console.log("Q2:", totalCalories1);


// Q3. Exam Results – Total Passed Marks
const marks123 = [35, 55, 80, 20, 45];
const totalPassedMarks = marks123
  .filter(m => m >= 40)
  .reduce((s, m) => s + m, 0);
console.log("Q3:", totalPassedMarks);


// Q4. Bank App – Total Credits
const transactions12 = [500, -200, 1000, -300, 700];
const totalCredits = transactions12
  .filter(t => t > 0)
  .reduce((s, t) => s + t, 0);
console.log("Q4:", totalCredits);


// Q5. Online Sale – Discounted Bill
const prices22 = [800, 1500, 3000, 600, 1200];
const discountedBill = prices22
  .filter(p => p > 1000)
  .map(p => p * 0.85)
  .reduce((s, p) => s + p, 0);
console.log("Q5:", discountedBill);


// Q6. Attendance – Reward Points
const hours1 = [5, 7, 8, 6, 9];
const rewardPoints = hours1
  .filter(h => h >= 7)
  .map(h => h * 10)
  .reduce((s, p) => s + p, 0);
console.log("Q6:", rewardPoints);


// Q7. Delivery App – Total Distance
const distances = [3, 6, 10, 4, 8];
const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((s, d) => s + d, 0);
console.log("Q7:", totalDistance);


// Q8. Salary System – Final Salary
const salaries = [18000, 25000, 30000, 15000];
const totalSalary = salaries
  .filter(s => s > 20000)
  .map(s => s + 2000)
  .reduce((t, s) => t + s, 0);
console.log("Q8:", totalSalary);


// Q9. Study App – Total Study Time
const hours2 = [0.5, 1.5, 2, 0.75, 3];
const totalStudyMinutes = hours2
  .filter(h => h > 1)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);
console.log("Q9:", totalStudyMinutes);


// Q10. Electricity Usage – Monthly Bill
const units = [80, 120, 200, 90, 150];
const electricityBill = units
  .filter(u => u > 100)
  .map(u => u * 6)
  .reduce((s, u) => s + u, 0);
console.log("Q10:", electricityBill);


// Q11. Game Scores – Final Power Score
const scores123 = [30, 50, 90, 20, 70];
const powerScore = scores123
  .filter(s => s > 40)
  .map(s => s * 2)
  .reduce((t, s) => t + s, 0);
console.log("Q11:", powerScore);


// Q12. Travel App – Total Fare
const rides = [5, 12, 20, 8, 15];
const totalFare = rides
  .filter(r => r > 10)
  .map(r => r + 50)
  .reduce((s, r) => s + r, 0);
console.log("Q12:", totalFare);


// Q13. Office Work – Productive Hours
const hours3 = [4, 6, 8, 5, 9];
const productiveMinutes = hours3
  .filter(h => h >= 6)
  .map(h => h * 60)
  .reduce((s, m) => s + m, 0);
console.log("Q13:", productiveMinutes);


// Q14. Shopping Cart – Reward Coins
const purchases = [300, 800, 1200, 400];
const rewardCoins = purchases
  .filter(p => p > 500)
  .map(() => 10)
  .reduce((s, c) => s + c, 0);
console.log("Q14:", rewardCoins);


// Q15. Fuel App – Total Fuel Cost
const liters = [3, 6, 10, 4, 8];
const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((s, c) => s + c, 0);
console.log("Q15:", fuelCost);


// Q16. Interview Classic – Sum of Cubes
const numbers123 = [1, 2, 3, 4, 5];
const sumOfCubes = numbers123
  .filter(n => n % 2 !== 0)
  .map(n => n ** 3)
  .reduce((s, n) => s + n, 0);
console.log("Q16:", sumOfCubes);


// Q17. Performance Tracking – Bonus Points
const scores2 = [10, 20, 30, 40, 50];
const avg =
  scores2.reduce((s, n) => s + n, 0) / scores2.length;
const bonusTotal = scores2
  .filter(s => s > avg)
  .map(s => s + 5)
  .reduce((t, s) => t + s, 0);
console.log("Q17:", bonusTotal);


// Q18. Subscription App – Final Bill
const plans = [199, 399, 599, 299];
const finalBill = plans
  .filter(p => p > 300)
  .map(p => p * 1.18)
  .reduce((s, p) => s + p, 0);
console.log("Q18:", finalBill);


// Q19. Learning App – Achievement Score
const scores3 = [45, 60, 70, 30, 80];
const achievementScore = scores3
  .filter(s => s >= 60)
  .map(s => s * s)
  .reduce((t, s) => t + s, 0);
console.log("Q19:", achievementScore);


// Q20. Interview Finisher – Final Sum
const numbers2 = [3, 6, 9, 10, 12];
const finalSum = numbers2
  .filter(n => n % 3 === 0)
  .map(n => n * 10)
  .reduce((s, n) => s + n, 0);
console.log("Q20:", finalSum);



