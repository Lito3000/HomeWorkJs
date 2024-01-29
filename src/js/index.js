const skillsRequirements = ['HTML', 'CSS', 'JS', 'React', 'Vue', 'NodeJS'];
const skillsList1 = ['HTML', 'CSS', 'JS'];
const skillsList2 = ['HTML', 'CSS', 'JS', 'React', 'Vue', 'NodeJS', 'Angular'];
const skillsList3 = ['HTML', 'CSS', 'JS'];
const createCandidate = function (name = 'Name not provided', skills = []) {
  return {
    name,
    skills,
  };
};

// console.log(createCandidate('Jon Doe', skillsList));

const addRequirement = function (skill, listOfRequirements) {
  listOfRequirements.push(skill);
  return listOfRequirements;
};

addRequirement('Angular', skillsRequirements);

// console.log(skillsRequirements)

const interview = function (candidate, requirements) {
  let result = null;

  for (let i = 0; i < candidate.skills.length; i++) {
    // console.log(candidate.skills[i]);

    for (let r = 0; r < requirements.length; r++) {
      if (candidate.skills[i] === requirements[r]) {
        result = 100;
      } else {
        result = 0;
      }
    }
  }

  return result;
};

// console.log(interview)

const planInterviews = function (candidates, req, scoreFunc) {
  const result = [];
  for (let i = 0; i < candidates.length; i++) {
    // 1 Погано
    // candidates[i].score = scoreFunc(candidates[i], req)
    // result.push(candidates[i])

    // 2 добре
    result.push({
      score: scoreFunc(candidates[i], req),
      candidate: candidates[i],
      pads: req,
    });
  }

  return result;
};

const candidate1 = createCandidate('Dog', skillsList1);
const candidate2 = createCandidate('Cat', skillsList2);
const candidate3 = createCandidate('Vlad', skillsList3);
const candidates = [candidate1, candidate2, candidate3];

const r = interview(candidate2, skillsRequirements);
console.log(r);
const k = planInterviews(candidates, skillsRequirements, interview);
console.log(k);
