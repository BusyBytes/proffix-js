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
    instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
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

  describe('STUPositionsartPositionsartNr', function() {
    it('should create an instance of STUPositionsartPositionsartNr', function() {
      // uncomment below and update the code to test STUPositionsartPositionsartNr
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr);
    });

    it('should have the property positionsartNr (base name: "PositionsartNr")', function() {
      // uncomment below and update the code to test the property positionsartNr
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung (base name: "Bezeichnung")', function() {
      // uncomment below and update the code to test the property bezeichnung
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property vorgabezeit (base name: "Vorgabezeit")', function() {
      // uncomment below and update the code to test the property vorgabezeit
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property lohnperiodePlus (base name: "LohnperiodePlus")', function() {
      // uncomment below and update the code to test the property lohnperiodePlus
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property waehrung (base name: "Waehrung")', function() {
      // uncomment below and update the code to test the property waehrung
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property stdPreis (base name: "StdPreis")', function() {
      // uncomment below and update the code to test the property stdPreis
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property steuercode (base name: "Steuercode")', function() {
      // uncomment below and update the code to test the property steuercode
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property ertragskonto (base name: "Ertragskonto")', function() {
      // uncomment below and update the code to test the property ertragskonto
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property kostenstelle (base name: "Kostenstelle")', function() {
      // uncomment below and update the code to test the property kostenstelle
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property kostenart (base name: "Kostenart")', function() {
      // uncomment below and update the code to test the property kostenart
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property keinRabatt (base name: "KeinRabatt")', function() {
      // uncomment below and update the code to test the property keinRabatt
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property ferien (base name: "Ferien")', function() {
      // uncomment below and update the code to test the property ferien
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.STUPositionsartPositionsartNr();
      //expect(instance).to.be();
    });

  });

}));