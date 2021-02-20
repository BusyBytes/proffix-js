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
    instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
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

  describe('AUFDokumentRequest', function() {
    it('should create an instance of AUFDokumentRequest', function() {
      // uncomment below and update the code to test AUFDokumentRequest
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.AUFDokumentRequest);
    });

    it('should have the property adresse (base name: "Adresse")', function() {
      // uncomment below and update the code to test the property adresse
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property datum (base name: "Datum")', function() {
      // uncomment below and update the code to test the property datum
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property dokumentstatus (base name: "Dokumentstatus")', function() {
      // uncomment below and update the code to test the property dokumentstatus
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property dokumenttyp (base name: "Dokumenttyp")', function() {
      // uncomment below and update the code to test the property dokumenttyp
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property kondition (base name: "Kondition")', function() {
      // uncomment below and update the code to test the property kondition
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property kurs (base name: "Kurs")', function() {
      // uncomment below and update the code to test the property kurs
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property portoFW (base name: "PortoFW")', function() {
      // uncomment below and update the code to test the property portoFW
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property referenztext (base name: "Referenztext")', function() {
      // uncomment below and update the code to test the property referenztext
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property sammelkonto (base name: "Sammelkonto")', function() {
      // uncomment below and update the code to test the property sammelkonto
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerFW1 (base name: "SteuerFW1")', function() {
      // uncomment below and update the code to test the property steuerFW1
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerFW2 (base name: "SteuerFW2")', function() {
      // uncomment below and update the code to test the property steuerFW2
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerFW3 (base name: "SteuerFW3")', function() {
      // uncomment below and update the code to test the property steuerFW3
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerFW4 (base name: "SteuerFW4")', function() {
      // uncomment below and update the code to test the property steuerFW4
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerFW5 (base name: "SteuerFW5")', function() {
      // uncomment below and update the code to test the property steuerFW5
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerInklusiv1 (base name: "SteuerInklusiv1")', function() {
      // uncomment below and update the code to test the property steuerInklusiv1
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerInklusiv2 (base name: "SteuerInklusiv2")', function() {
      // uncomment below and update the code to test the property steuerInklusiv2
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerInklusiv3 (base name: "SteuerInklusiv3")', function() {
      // uncomment below and update the code to test the property steuerInklusiv3
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerInklusiv4 (base name: "SteuerInklusiv4")', function() {
      // uncomment below and update the code to test the property steuerInklusiv4
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerInklusiv5 (base name: "SteuerInklusiv5")', function() {
      // uncomment below and update the code to test the property steuerInklusiv5
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerMargen1 (base name: "SteuerMargen1")', function() {
      // uncomment below and update the code to test the property steuerMargen1
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerMargen2 (base name: "SteuerMargen2")', function() {
      // uncomment below and update the code to test the property steuerMargen2
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerMargen3 (base name: "SteuerMargen3")', function() {
      // uncomment below and update the code to test the property steuerMargen3
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerMargen4 (base name: "SteuerMargen4")', function() {
      // uncomment below and update the code to test the property steuerMargen4
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuerMargen5 (base name: "SteuerMargen5")', function() {
      // uncomment below and update the code to test the property steuerMargen5
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuertotalFW1 (base name: "SteuertotalFW1")', function() {
      // uncomment below and update the code to test the property steuertotalFW1
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuertotalFW2 (base name: "SteuertotalFW2")', function() {
      // uncomment below and update the code to test the property steuertotalFW2
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuertotalFW3 (base name: "SteuertotalFW3")', function() {
      // uncomment below and update the code to test the property steuertotalFW3
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuertotalFW4 (base name: "SteuertotalFW4")', function() {
      // uncomment below and update the code to test the property steuertotalFW4
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property steuertotalFW5 (base name: "SteuertotalFW5")', function() {
      // uncomment below and update the code to test the property steuertotalFW5
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property totalFW (base name: "TotalFW")', function() {
      // uncomment below and update the code to test the property totalFW
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property totalgewicht (base name: "Totalgewicht")', function() {
      // uncomment below and update the code to test the property totalgewicht
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property totalsteuerFW (base name: "TotalsteuerFW")', function() {
      // uncomment below and update the code to test the property totalsteuerFW
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property totalsteuerSW (base name: "TotalsteuerSW")', function() {
      // uncomment below and update the code to test the property totalsteuerSW
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property zahlungen (base name: "Zahlungen")', function() {
      // uncomment below and update the code to test the property zahlungen
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property waehrung (base name: "Waehrung")', function() {
      // uncomment below and update the code to test the property waehrung
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

    it('should have the property positionen (base name: "Positionen")', function() {
      // uncomment below and update the code to test the property positionen
      //var instance = new ProffixRestApiRequestSammlung.AUFDokumentRequest();
      //expect(instance).to.be();
    });

  });

}));