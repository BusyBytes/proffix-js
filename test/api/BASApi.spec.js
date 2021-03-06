/**
 * PROFFIX REST API Request Sammlung
 * Dies ist eine Request-Sammlung der PROFFIX REST API, welche das PROFFIX REST API Entwicklerhandbuch unter [https://www.proffix.net/entwickler/restapi/handbuch](https://www.proffix.net/entwickler/restapi/handbuch) ergänzt.
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.7
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProffixRestApiRequestSammlung);
  }
}(this, function(expect, ProffixRestApiRequestSammlung) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProffixRestApiRequestSammlung.BASApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('BASApi', function() {
    describe('bASAnlageAnlageNr', function() {
      it('should call bASAnlageAnlageNr successfully', function(done) {
        //uncomment below and update the code to test bASAnlageAnlageNr
        //instance.bASAnlageAnlageNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bASGarantiezusatzGarantiezusatzNr', function() {
      it('should call bASGarantiezusatzGarantiezusatzNr successfully', function(done) {
        //uncomment below and update the code to test bASGarantiezusatzGarantiezusatzNr
        //instance.bASGarantiezusatzGarantiezusatzNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bASInstallationInstallationNr', function() {
      it('should call bASInstallationInstallationNr successfully', function(done) {
        //uncomment below and update the code to test bASInstallationInstallationNr
        //instance.bASInstallationInstallationNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bASKundeKundeNr', function() {
      it('should call bASKundeKundeNr successfully', function(done) {
        //uncomment below and update the code to test bASKundeKundeNr
        //instance.bASKundeKundeNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bASPrioritaetPrioritaetNr', function() {
      it('should call bASPrioritaetPrioritaetNr successfully', function(done) {
        //uncomment below and update the code to test bASPrioritaetPrioritaetNr
        //instance.bASPrioritaetPrioritaetNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bASStandortStandortNr', function() {
      it('should call bASStandortStandortNr successfully', function(done) {
        //uncomment below and update the code to test bASStandortStandortNr
        //instance.bASStandortStandortNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bASVertragstypVertragstypNr', function() {
      it('should call bASVertragstypVertragstypNr successfully', function(done) {
        //uncomment below and update the code to test bASVertragstypVertragstypNr
        //instance.bASVertragstypVertragstypNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
