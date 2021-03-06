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
    instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
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

  describe('BASPrioritaetPrioritaetNr', function() {
    it('should create an instance of BASPrioritaetPrioritaetNr', function() {
      // uncomment below and update the code to test BASPrioritaetPrioritaetNr
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr);
    });

    it('should have the property prioritaetNr (base name: "PrioritaetNr")', function() {
      // uncomment below and update the code to test the property prioritaetNr
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung (base name: "Bezeichnung")', function() {
      // uncomment below and update the code to test the property bezeichnung
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property feiertage (base name: "Feiertage")', function() {
      // uncomment below and update the code to test the property feiertage
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property loesungszeit (base name: "Loesungszeit")', function() {
      // uncomment below and update the code to test the property loesungszeit
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property eskalationsmeldungAn (base name: "EskalationsmeldungAn")', function() {
      // uncomment below and update the code to test the property eskalationsmeldungAn
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property nurEineWarnung (base name: "NurEineWarnung")', function() {
      // uncomment below and update the code to test the property nurEineWarnung
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property reaktionszeit (base name: "Reaktionszeit")', function() {
      // uncomment below and update the code to test the property reaktionszeit
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property reihenfolge (base name: "Reihenfolge")', function() {
      // uncomment below and update the code to test the property reihenfolge
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property samstag (base name: "Samstag")', function() {
      // uncomment below and update the code to test the property samstag
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property sonntag (base name: "Sonntag")', function() {
      // uncomment below and update the code to test the property sonntag
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property warnungEskalation (base name: "WarnungEskalation")', function() {
      // uncomment below and update the code to test the property warnungEskalation
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property zeitbereich1Bis (base name: "Zeitbereich1Bis")', function() {
      // uncomment below and update the code to test the property zeitbereich1Bis
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property zeitbereich1Von (base name: "Zeitbereich1Von")', function() {
      // uncomment below and update the code to test the property zeitbereich1Von
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property zeitbereich2Bis (base name: "Zeitbereich2Bis")', function() {
      // uncomment below and update the code to test the property zeitbereich2Bis
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property zeitbereich2Von (base name: "Zeitbereich2Von")', function() {
      // uncomment below and update the code to test the property zeitbereich2Von
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property zeitenRechnen (base name: "ZeitenRechnen")', function() {
      // uncomment below and update the code to test the property zeitenRechnen
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.BASPrioritaetPrioritaetNr();
      //expect(instance).to.be();
    });

  });

}));
