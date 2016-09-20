import { Injectable } from '@angular/core';

@Injectable()
export class StringcalculatorService {

  constructor() {}

  add(numbers: string) {

    if (numbers === '') {
      return 0;
    }

    let numbersLine = numbers;
    let separators = [','];

    if (numbers.indexOf('//') === 0) {
      const numbersLines = numbers.split('\n');

      const separatorLine = numbersLines[0];
      separators = this.getSeparators(separatorLine);

      numbersLine = numbersLines[1];
    }

    const numbersWithNormalisedSeparator = (
      this.getNumbersWithNormalisedSeparator(numbersLine, separators)
    );

    const parsedNumbers: number[] = this.getParsedNumbers(
      numbersWithNormalisedSeparator,
      separators[0]
    );

    this.checkNegativeNumbers(parsedNumbers);

    const relevantNumbers = parsedNumbers.filter(
      (value: number) => value <= 1000
    );

    return relevantNumbers.reduce((previous, current) => previous + current, 0);
  }

  parse(value: string) {
    return parseInt(value, 10);
  }

  getSeparators(separatorLine: string): string[] {
      let separators = [separatorLine.substring(2)];

      if (separatorLine.indexOf('//[') === 0) {
        const relevantPart = separatorLine.substring(3, separatorLine.length - 1);
        separators = relevantPart.split('][');
      }

      return separators;
  }

  getNumbersWithNormalisedSeparator(numbersLine: string, separators: string[]): string {
    const firstSeparator = separators[0];

    let numbersNormalisedSeparator = numbersLine.replace('\n', firstSeparator);

    for (let i = 0; i < separators.length; i++) {
      numbersNormalisedSeparator = (
        numbersNormalisedSeparator.replace(separators[i], firstSeparator)
      );
    }

    return numbersNormalisedSeparator;
  }

  getParsedNumbers(numbersNormalisedSeparator: string, separator: string): number[] {
    let numberParts = [numbersNormalisedSeparator];

    if (numbersNormalisedSeparator.indexOf(separator) > -1) {
      numberParts = numbersNormalisedSeparator.split(separator);
    }

    return numberParts.map((numberPart: string) => this.parse(numberPart));
  }

  checkNegativeNumbers(parsedNumbers: number[]): void {
    const negativeNumbers = parsedNumbers.filter((value: number) => value < 0);

    if (negativeNumbers.length) {
      throw new Error('negatives not allowed : ' + negativeNumbers.join(','));
    }
  }
}
