import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { StringcalculatorService } from './stringcalculator.service';

describe('Stringcalculator Service', () => {
  beforeEachProviders(() => [StringcalculatorService]);

  it('should ...',
      inject([StringcalculatorService], (service: StringcalculatorService) => {
    expect(service).toBeTruthy();
  }));

  describe('Add', () => {
    it('should return 0 for an empty string',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('');

          // assert
          expect(result).toBe(0);
    }));

    it('should return 0 for "0"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('0');

          // assert
          expect(result).toBe(0);
    }));

    it('should return 1 for "1"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('1');

          // assert
          expect(result).toBe(1);
    }));

    it('should return 2 for "2"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('2');

          // assert
          expect(result).toBe(2);
    }));

    it('should return 3 for "1,2"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('1,2');

          // assert
          expect(result).toBe(3);
    }));

    it('should return 3 for "1\n2"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('1\n2');

          // assert
          expect(result).toBe(3);
    }));

    it('should return 3 for "//;\n1;2"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('//;\n1;2');

          // assert
          expect(result).toBe(3);
    }));

    it('should throw an Exception for "-1"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          // assert
          expect( function(){ service.add('-1'); } )
          .toThrow(new Error('negatives not allowed : -1'));
    }));

    it('should throw an Exception for "-1,-2"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          // assert
          expect( function(){ service.add('-1,-2'); } )
          .toThrow(new Error('negatives not allowed : -1,-2'));
    }));

    it('should ignore numbers bigger than 1000',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange
          // act
          const result: number = service.add('2,1001');

          // assert
          expect(result).toBe(2);
    }));

    it('should return 3 for "//[***]\n1***2"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('//[***]\n1***2');

          // assert
          expect(result).toBe(3);
    }));

    it('should return 6 for "//[*][%]\n1*2%3"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('//[*][%]\n1*2%3');

          // assert
          expect(result).toBe(6);
    }));

    it('should return 6 for "//[***][%]\n1***2%3"',
        inject([StringcalculatorService], (service: StringcalculatorService) => {

          // arrange

          // act
          const result: number = service.add('//[***][%]\n1***2%3');

          // assert
          expect(result).toBe(6);
    }));
  });
});
