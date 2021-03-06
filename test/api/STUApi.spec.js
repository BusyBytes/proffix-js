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
    instance = new ProffixRestApiRequestSammlung.STUApi();
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

  describe('STUApi', function() {
    describe('sTUAbrechnungsartAbrechnungsartNr', function() {
      it('should call sTUAbrechnungsartAbrechnungsartNr successfully', function(done) {
        //uncomment below and update the code to test sTUAbrechnungsartAbrechnungsartNr
        //instance.sTUAbrechnungsartAbrechnungsartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUGebaeudeartGebaeudeartNr', function() {
      it('should call sTUGebaeudeartGebaeudeartNr successfully', function(done) {
        //uncomment below and update the code to test sTUGebaeudeartGebaeudeartNr
        //instance.sTUGebaeudeartGebaeudeartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUOffenerRapport', function() {
      it('should call sTUOffenerRapport successfully', function(done) {
        //uncomment below and update the code to test sTUOffenerRapport
        //instance.sTUOffenerRapport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUOffenerRapportRapportNr', function() {
      it('should call sTUOffenerRapportRapportNr successfully', function(done) {
        //uncomment below and update the code to test sTUOffenerRapportRapportNr
        //instance.sTUOffenerRapportRapportNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUOffenerRapportRapportNrabschliessen', function() {
      it('should call sTUOffenerRapportRapportNrabschliessen successfully', function(done) {
        //uncomment below and update the code to test sTUOffenerRapportRapportNrabschliessen
        //instance.sTUOffenerRapportRapportNrabschliessen(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUOffenerRapportRapportNrstarten', function() {
      it('should call sTUOffenerRapportRapportNrstarten successfully', function(done) {
        //uncomment below and update the code to test sTUOffenerRapportRapportNrstarten
        //instance.sTUOffenerRapportRapportNrstarten(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUOffenerRapportRapportNrstoppen', function() {
      it('should call sTUOffenerRapportRapportNrstoppen successfully', function(done) {
        //uncomment below and update the code to test sTUOffenerRapportRapportNrstoppen
        //instance.sTUOffenerRapportRapportNrstoppen(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUPositionsartPositionsartNr', function() {
      it('should call sTUPositionsartPositionsartNr successfully', function(done) {
        //uncomment below and update the code to test sTUPositionsartPositionsartNr
        //instance.sTUPositionsartPositionsartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUProjektProjektNr', function() {
      it('should call sTUProjektProjektNr successfully', function(done) {
        //uncomment below and update the code to test sTUProjektProjektNr
        //instance.sTUProjektProjektNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTURapport', function() {
      it('should call sTURapport successfully', function(done) {
        //uncomment below and update the code to test sTURapport
        //instance.sTURapport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTURapportRapportNr', function() {
      it('should call sTURapportRapportNr successfully', function(done) {
        //uncomment below and update the code to test sTURapportRapportNr
        //instance.sTURapportRapportNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTURapportabschliessen', function() {
      it('should call sTURapportabschliessen successfully', function(done) {
        //uncomment below and update the code to test sTURapportabschliessen
        //instance.sTURapportabschliessen(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTURapportdokument', function() {
      it('should call sTURapportdokument successfully', function(done) {
        //uncomment below and update the code to test sTURapportdokument
        //instance.sTURapportdokument(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTURapportdokumentRapportdokumentNr', function() {
      it('should call sTURapportdokumentRapportdokumentNr successfully', function(done) {
        //uncomment below and update the code to test sTURapportdokumentRapportdokumentNr
        //instance.sTURapportdokumentRapportdokumentNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTURapportfreigeben', function() {
      it('should call sTURapportfreigeben successfully', function(done) {
        //uncomment below and update the code to test sTURapportfreigeben
        //instance.sTURapportfreigeben(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUSpesenartSpesenartNr', function() {
      it('should call sTUSpesenartSpesenartNr successfully', function(done) {
        //uncomment below and update the code to test sTUSpesenartSpesenartNr
        //instance.sTUSpesenartSpesenartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUStatusartStatusartNr', function() {
      it('should call sTUStatusartStatusartNr successfully', function(done) {
        //uncomment below and update the code to test sTUStatusartStatusartNr
        //instance.sTUStatusartStatusartNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUTeilleistungTeilleistungNr', function() {
      it('should call sTUTeilleistungTeilleistungNr successfully', function(done) {
        //uncomment below and update the code to test sTUTeilleistungTeilleistungNr
        //instance.sTUTeilleistungTeilleistungNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUTeilleistungsgruppeTeilleistungsgruppeNr', function() {
      it('should call sTUTeilleistungsgruppeTeilleistungsgruppeNr successfully', function(done) {
        //uncomment below and update the code to test sTUTeilleistungsgruppeTeilleistungsgruppeNr
        //instance.sTUTeilleistungsgruppeTeilleistungsgruppeNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUTeilleistungstypTeilleistungstypNr', function() {
      it('should call sTUTeilleistungstypTeilleistungstypNr successfully', function(done) {
        //uncomment below and update the code to test sTUTeilleistungstypTeilleistungstypNr
        //instance.sTUTeilleistungstypTeilleistungstypNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr', function() {
      it('should call sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr successfully', function(done) {
        //uncomment below and update the code to test sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr
        //instance.sTUTeilleistungsuntergruppeTeilleistungsuntergruppeNr(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
