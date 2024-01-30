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

  // console.log(candidate.skills[i]);

  // eslint-disable-next-line no-plusplus
  for (let r = 0; r < requirements.length; r++) {
    if (candidate.skills[r] === requirements[r]) {
      result = 100;
    } else {
      // eslint-disable-next-line no-return-assign
      return result = 0;
    }
  }

  // eslint-disable-next-line consistent-return
  return result;
};

// console.log(interview)

const planInterviews = function (candidates, req, scoreFunc) {
  const result = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < candidates.length; i++) {
    // 1 Погано
    // candidates[i].score = scoreFunc(candidates[i], req)
    // result.push(candidates[i])

    // 2 добре
    result.push({
      score: scoreFunc(candidates[i], req),
      candidate: candidates[i],
    });
  }

  return result;
};

const candidate1 = createCandidate('Dog', skillsList1);
const candidate2 = createCandidate('Cat', skillsList2);
const candidate3 = createCandidate('Vlad', skillsList3);
const candidates = [candidate1, candidate2, candidate3];


const k = planInterviews(candidates, skillsRequirements, interview);
console.log(k);
