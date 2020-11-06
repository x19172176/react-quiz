const qBank = [ 
{ 
	question: 
	"What is the capital of Canada ?", 
	answers: ["Toronto", "Vancouver", "Monteal", "Ottawa"], 
	correct: "Ottawa", 
	questionId: "099099"
}, 
{ 
	question: 
	"What year did the Battle of Hastings take place ?", 
	answers: ["1065", "1066", "1067", "1068"], 
	correct: "1066", 
	questionId: "093909"
}, 
{ 
	question: 
	"What is the biggest county in Ireland ?", 
	answers: ["Kerry", "Cork", "Galway", "Mayo"], 
	correct: "Cork", 
	questionId: "009039"
}, 
{ 
	question: 
	"Which pop duo was the first western band to play in The Peoples Republic of China  ?", 
	answers: ["Wham", "Simon and Garfunkel", "Duran Duran", "U2"], 
	correct: "Wham", 
	questionId: "090089"
}, 
{ 
	question: 
	"Speed skating originated in which country ?", 
	answers: ["Russia", "Netherlands", "Canada", "Norway"], 
	correct: "Netherlands", 
	questionId: "01010101"
}, 
{ 
	question: 
	"Julius Caesar said 'The die is cast' after crossing which river ?", 
	answers: ["Danube", "Rubicon", "Thames", "Tiber"], 
	correct: "Rubicon", 
	questionId: "092299"
}, 
{ 
	question: 
	"What are Lanthanides ?", 
	answers: ["Elements in the periodic table", "Mountains on Earth", "Mountains on the Moon", "Bacterium"], 
	correct: "Elements in the periodic table", 
	questionId: "099099"
}, 
{ 
	question: 
	"What part of the body does a turtle use to breathe ?", 
	answers: ["Belly", "Shell", "Mouth", "Anus"], 
	correct: "Anus", 
	questionId: "222099"
}, 
{ 
	question: 
	"In which year did Louis Reard invent the bikini ?", 
	answers: ["1906", "1926", "1946", "1966"], 
	correct: "1946", 
	questionId: "2222099"
}, 
{ 
	question: 
	"hHypermetropic people are what ?", 
	answers: ["obese", "underfed", "moody", "far sighted"], 
	correct: "far sighted", 
	questionId: "09922099"
}, 
{ 
	question: 
	"Herodotus is known as the father of what ?", 
	answers: ["History", "Medicine", "Theatre", "Music"], 
	correct: "History", 
	questionId: "222292099"
}, 
{ 
	question: 
	"What is the more usual name for Roentgen Rays ?", 
	answers: ["X Rays", "Gamma Rays", "Ultraviolet Rays", "Magnetic Resonance"], 
	correct: "X Rays", 
	questionId: "0998999099"
}, 
{ 
	question: 
	"Which kind of animal did Florence Nightingale often carry around in her pocket ?", 
	answers: ["Kitten", "Puppy", "Owl", "Snake"], 
	correct: "Owl", 
	questionId: "099099"
}, 
{ 
	question: 
	"What is the name of the man servant in 'Around the world in 80 days' ?", 
	answers: ["Pas Partout", "Cato", "Giles", "Machu Picchu"], 
	correct: "Pas Partout", 
	questionId: "099099"
}, 
{ 
	question: 
	"What is the old name for Sri Lanka ?", 
	answers: ["Spice Islands", "Mandalay", "Ceylon", "East Pakistan"], 
	correct: "Ceylon", 
	questionId: "099099"
}, 
{ 
	question: 
	"The Agony and the Ecstasy was a book and film about which man ?", 
	answers: ["Churchill", "Jesus", "Michaelangelo", "Marquis de Sade"], 
	correct: "Michaelangelo", 
	questionId: "09459099"
}, 
{ 
	question: 
	"What was the number of the last Apollo mission ?", 
	answers: ["13", "14", "17", "22"], 
	correct: "17", 
	questionId: "0912219099"
}, 

]; 

// n = 5 to export 5 question 
export default (n = 5) => 
Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n)); 
