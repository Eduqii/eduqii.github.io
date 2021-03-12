<!DOCTYPE html>
<html>
<head>
	<title>Quiz</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<link rel="shortcut icon" href="../../../../../../images/favicon.ico">
</head>
<body>
	<div class="home-box custom-box">
		<h3>Instruction: <br /> 
			Read the question instructions carefully before you choose an answer
			</h3>
		<p>Total number of questions: <span class="total-question"></span></p>
		<button type="button" class="btn" onclick="startQuiz()">Start Quiz</button>
		<button type="button" class="btn exit" onclick="exitQuiz(event)">Exit Quiz</button>
	</div>

	<div class="quiz-box custom-box hide">
		<div class="question-number">
			
		</div>
		<div class="question-text">
			
		</div>
		<div class="option-container">
			 
		</div>
		<div class="next-question-btn">
			<button type="button" class="btn" onclick="next()">Next</button>
		</div>
		<div class="answers-indicator">
			
		</div>
		<p>BECE 2017 | <a href="../index.php">Exit</a></p>
	</div>

	<div class="result-box custom-box hide">
			<h1>Quiz Result</h1>
			<table>
				<tr>
					<td>Total Question</td>
					<td><span class="total-question"></span></td>
				</tr>
				<tr>
					<td>Attempt</td>
					<td><span class="total-attempt"></span></td>
				</tr>
				<tr>
					<td>Correct</td>
					<td><span class="total-correct"></span></td>
				</tr>
				<tr>
					<td>Wrong</td>
					<td><span class="total-wrong"></span></td>
				</tr>
				<tr>
					<td>Percentage</td>
					<td><span class="percentage"></span></td>
				</tr>
				<tr>
					<td>Your Total Score</td>
					<td><span class="total-score"></span></td>
				</tr>
			</table>
			<button type="button" class="btn" onclick="tryAgainQuiz()">Try Again</button>
			<button type="button" class="btn" onclick="goToHome()">Go To Home</button>
	</div>
<script src="js/question.js"></script>
<script src="js/game.js"></script>
</body>
</html>