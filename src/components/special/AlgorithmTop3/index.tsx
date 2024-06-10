import instancesData from "../../../data/instances/instances.json";
import { IInstanceProfile } from "./interfaces";

export const AlgorithmTop3 = (respondentAnswers: number[]) => {

  const instancesScores = instancesData.map(data => {

    const coords: [number, number] = [
      data.general.coordinates[0],
      data.general.coordinates[1]
    ]

    const matchTarget: IInstanceProfile = {
      id: data.id,
      name: data.general.name,
      gender: data.general.gender,
      description: data.description,
      biography: data.biography,
      score: matchAnswers(respondentAnswers, data.questions),
      profilePicture: data.general.profile_picture,
      coordinates: coords
    };

    return matchTarget
  })

  let sortedDataByScores = instancesScores.sort(
    (a, b) => {
      let s1 = a?.score || 0
      let s2 = b.score || 0
      return s2 - s1
    });

  /**
 * @summary Scoring is as followed:
 * - Same answer          = 2 points
 * - Neutral answer       = 1 point (agree/disagree <-> neutral)
 * - Opposite answer      = 0 points (agree <-> disagree)
 * - Skip questions       = 0 points
 * 
 * Percentual match formula:
 * @return total_score * (100 / ( amount_of_answers * 2 ))
 */

  function matchAnswers(respondentAnswers: number[], instanceAnswers: number[]) {

    const amountOfQuestions: number = respondentAnswers.length
    const scores: number[] = [0]
    const sumScore = (arr: number[]) => arr.reduce((acc, curr) => acc + curr)

    for (let idx = 0; idx < respondentAnswers.length; idx++) {
      const currentRespondentAnswer = respondentAnswers[idx];
      const currentInstanceAnswer = instanceAnswers[idx];

      // equal answer (2 points)
      if (currentRespondentAnswer === currentInstanceAnswer) {
        scores.push(2);
      }

      // neutral answer (1 point)
      else if (currentRespondentAnswer === 2) {
        if (currentInstanceAnswer === 0 || currentInstanceAnswer === 1) {
          scores.push(1);
        }
      }

      // opposite (0 points)
      else if (Math.abs(currentRespondentAnswer - currentInstanceAnswer) === 1) {
        scores.push(0);
      }

      // skipped (0 points)
      else if (currentRespondentAnswer === 3) {
        scores.push(0);
      }
    }

    // percentual match
    return sumScore(scores) * (100 / (amountOfQuestions * 2))
  }

  return sortedDataByScores
}
