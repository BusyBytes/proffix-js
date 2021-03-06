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
    instance = new ProffixRestApiRequestSammlung.Standort3();
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

  describe('Standort3', function() {
    it('should create an instance of Standort3', function() {
      // uncomment below and update the code to test Standort3
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.Standort3);
    });

    it('should have the property standortNr (base name: "StandortNr")', function() {
      // uncomment below and update the code to test the property standortNr
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung (base name: "Bezeichnung")', function() {
      // uncomment below and update the code to test the property bezeichnung
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property hauptstandort (base name: "Hauptstandort")', function() {
      // uncomment below and update the code to test the property hauptstandort
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property auftrag (base name: "Auftrag")', function() {
      // uncomment below and update the code to test the property auftrag
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property intern (base name: "Intern")', function() {
      // uncomment below and update the code to test the property intern
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property kunde (base name: "Kunde")', function() {
      // uncomment below and update the code to test the property kunde
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property prioritaet (base name: "Prioritaet")', function() {
      // uncomment below and update the code to test the property prioritaet
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property vertragstyp (base name: "Vertragstyp")', function() {
      // uncomment below and update the code to test the property vertragstyp
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property geloescht (base name: "Geloescht")', function() {
      // uncomment below and update the code to test the property geloescht
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.Standort3();
      //expect(instance).to.be();
    });

  });

}));
