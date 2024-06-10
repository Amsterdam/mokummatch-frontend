import { IInstanceProfile } from './../components/special/AlgorithmTop3/interfaces';

export const sortByScores = (instanceList: IInstanceProfile[]): IInstanceProfile[] =>
  instanceList.sort(
    (a, b) => {
      let s1 = a?.score || 0
      let s2 = b?.score || 0
      return s2 - s1
    });

export const moveElement = <T>(array: T[], from: number, to: number): void => {
  array.splice(to, 0, array.splice(from, 1)[0]);
}
