import { Type } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoreModule } from '@core';
import { AddPlayerService } from './addPlayer.service';

describe('AddPlayerService', () => {
  let addPlayerService: AddPlayerService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule, HttpClientTestingModule],
      providers: [AddPlayerService],
    });

    addPlayerService = TestBed.inject(AddPlayerService);
    httpMock = TestBed.inject(HttpTestingController as Type<HttpTestingController>);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test('service should exist', () => {
    expect(addPlayerService).toBeDefined();
  });

  describe('addNewPlayer', () => {
    it('should return a success onnce player added successfully', () => {
      // Arrange
      const mockPlayer = {
        name: 'Abhishek Jaimini',
        first: 1,
        second: 8,
      };

      // Mock response
      const mockResponse = {
        status: 200,
        type: 'Success',
        title: 'Joined Game',
        detail: 'Welcome to the game, player ;)',
      };

      // Act
      const result = addPlayerService.addNewPlayer(mockPlayer);

      // Assert
      result.subscribe((data: any) => {
        expect(data).toEqual(mockResponse);
        expect(data).toBeDefined();
        expect(data.detail).toBeDefined();
        expect(data.type).toBeDefined();
        expect(data.status).toBe(200);
        expect(data.type).toBe('Success');
      });
      httpMock.expectOne({}).flush(mockResponse);
    });

    it('should return an error in case of wrong parameters', () => {
      // Act
      const mockPlayer = {
        name: 'Abhishek Jaimini',
        first: 109,
        second: 8,
      };

      // Mock response
      const mockResponse = {
        status: 400,
        type: 'Error',
        title: 'Invalid Request',
        detail: 'Invalid name: There is already a player here with that name',
      };

      const result = addPlayerService.addNewPlayer(mockPlayer);

      // Assert
      result.subscribe((error: any) => {
        expect(error).toBeDefined();
        expect(error.detail).toBeDefined();
        expect(error.type).toBeDefined();
        expect(error.status).toBe(400);
        expect(error.type).toBe('Error');
      });
      httpMock.expectOne({}).flush(null, {
        status: 400,
        statusText: 'error',
      });
    });
  });
});
