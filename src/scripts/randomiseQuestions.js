import goodnessQuestions from "../resources/goodness-question-prompts.json";
import freedomQuestions from "../resources/freedom-question-prompts.json";
import generosityQuestions from "../resources/generosity-question-prompts.json";
import trustQuestions from "../resources/trust-question-prompts.json";

function randomiseQuestions() {
  const goodnessQuestion = goodnessQuestions["codelist-items"][0];
  const freedomQuestion = freedomQuestions["codelist-items"][0];
  const generosityQuestion = generosityQuestions["codelist-items"][0];
  const trustQuestion = trustQuestions["codelist-items"][0];

  return [goodnessQuestion, freedomQuestion, generosityQuestion, trustQuestion];
}

export default randomiseQuestions;
