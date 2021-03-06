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
    instance = new ProffixRestApiRequestSammlung.ADRApi();
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

  describe('ADRApi', function() {
    describe('aDRAdressdokument', function() {
      it('should call aDRAdressdokument successfully', function(done) {
        //uncomment below and update the code to test aDRAdressdokument
        //instance.aDRAdressdokument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRAdressdokumentAdressDokumentNr', function() {
      it('should call aDRAdressdokumentAdressDokumentNr successfully', function(done) {
        //uncomment below and update the code to test aDRAdressdokumentAdressDokumentNr
        //instance.aDRAdressdokumentAdressDokumentNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRAdresse', function() {
      it('should call aDRAdresse successfully', function(done) {
        //uncomment below and update the code to test aDRAdresse
        //instance.aDRAdresse(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRAdresseAdressNr', function() {
      it('should call aDRAdresseAdressNr successfully', function(done) {
        //uncomment below and update the code to test aDRAdresseAdressNr
        //instance.aDRAdresseAdressNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRAdressgruppe', function() {
      it('should call aDRAdressgruppe successfully', function(done) {
        //uncomment below and update the code to test aDRAdressgruppe
        //instance.aDRAdressgruppe(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRAdressgruppeAdressgruppeNr', function() {
      it('should call aDRAdressgruppeAdressgruppeNr successfully', function(done) {
        //uncomment below and update the code to test aDRAdressgruppeAdressgruppeNr
        //instance.aDRAdressgruppeAdressgruppeNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRKommunikation', function() {
      it('should call aDRKommunikation successfully', function(done) {
        //uncomment below and update the code to test aDRKommunikation
        //instance.aDRKommunikation(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRKommunikationKommunikationNr', function() {
      it('should call aDRKommunikationKommunikationNr successfully', function(done) {
        //uncomment below and update the code to test aDRKommunikationKommunikationNr
        //instance.aDRKommunikationKommunikationNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRKontakt', function() {
      it('should call aDRKontakt successfully', function(done) {
        //uncomment below and update the code to test aDRKontakt
        //instance.aDRKontakt(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRKontaktKontaktNr', function() {
      it('should call aDRKontaktKontaktNr successfully', function(done) {
        //uncomment below and update the code to test aDRKontaktKontaktNr
        //instance.aDRKontaktKontaktNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRKontakttypKontakttypNr', function() {
      it('should call aDRKontakttypKontakttypNr successfully', function(done) {
        //uncomment below and update the code to test aDRKontakttypKontakttypNr
        //instance.aDRKontakttypKontakttypNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRNotiz', function() {
      it('should call aDRNotiz successfully', function(done) {
        //uncomment below and update the code to test aDRNotiz
        //instance.aDRNotiz(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRNotizNotizNr', function() {
      it('should call aDRNotizNotizNr successfully', function(done) {
        //uncomment below and update the code to test aDRNotizNotizNr
        //instance.aDRNotizNotizNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRNotizartNotizartNr', function() {
      it('should call aDRNotizartNotizartNr successfully', function(done) {
        //uncomment below and update the code to test aDRNotizartNotizartNr
        //instance.aDRNotizartNotizartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRZahlungsart', function() {
      it('should call aDRZahlungsart successfully', function(done) {
        //uncomment below and update the code to test aDRZahlungsart
        //instance.aDRZahlungsart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('aDRZahlungsartZahlungsartNr', function() {
      it('should call aDRZahlungsartZahlungsartNr successfully', function(done) {
        //uncomment below and update the code to test aDRZahlungsartZahlungsartNr
        //instance.aDRZahlungsartZahlungsartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
