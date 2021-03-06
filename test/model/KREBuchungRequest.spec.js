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
    instance = new ProffixRestApiRequestSammlung.KREBuchungRequest();
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

  describe('KREBuchungRequest', function() {
    it('should create an instance of KREBuchungRequest', function() {
      // uncomment below and update the code to test KREBuchungRequest
      //var instance = new ProffixRestApiRequestSammlung.KREBuchungRequest();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.KREBuchungRequest);
    });

    it('should have the property buchungsdatum (base name: "Buchungsdatum")', function() {
      // uncomment below and update the code to test the property buchungsdatum
      //var instance = new ProffixRestApiRequestSammlung.KREBuchungRequest();
      //expect(instance).to.be();
    });

    it('should have the property belegnummer (base name: "Belegnummer")', function() {
      // uncomment below and update the code to test the property belegnummer
      //var instance = new ProffixRestApiRequestSammlung.KREBuchungRequest();
      //expect(instance).to.be();
    });

    it('should have the property kondition (base name: "Kondition")', function() {
      // uncomment below and update the code to test the property kondition
      //var instance = new ProffixRestApiRequestSammlung.KREBuchungRequest();
      //expect(instance).to.be();
    });

    it('should have the property adresse (base name: "Adresse")', function() {
      // uncomment below and update the code to test the property adresse
      //var instance = new ProffixRestApiRequestSammlung.KREBuchungRequest();
      //expect(instance).to.be();
    });

    it('should have the property zahlungsart (base name: "Zahlungsart")', function() {
      // uncomment below and update the code to test the property zahlungsart
      //var instance = new ProffixRestApiRequestSammlung.KREBuchungRequest();
      //expect(instance).to.be();
    });

    it('should have the property buchungen (base name: "Buchungen")', function() {
      // uncomment below and update the code to test the property buchungen
      //var instance = new ProffixRestApiRequestSammlung.KREBuchungRequest();
      //expect(instance).to.be();
    });

  });

}));
