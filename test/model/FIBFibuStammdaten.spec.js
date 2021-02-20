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
    instance = new ProffixRestApiRequestSammlung.FIBFibuStammdaten();
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

  describe('FIBFibuStammdaten', function() {
    it('should create an instance of FIBFibuStammdaten', function() {
      // uncomment below and update the code to test FIBFibuStammdaten
      //var instance = new ProffixRestApiRequestSammlung.FIBFibuStammdaten();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.FIBFibuStammdaten);
    });

    it('should have the property geschaeftsjahrVon (base name: "GeschaeftsjahrVon")', function() {
      // uncomment below and update the code to test the property geschaeftsjahrVon
      //var instance = new ProffixRestApiRequestSammlung.FIBFibuStammdaten();
      //expect(instance).to.be();
    });

    it('should have the property geschaeftsjahrBis (base name: "GeschaeftsjahrBis")', function() {
      // uncomment below and update the code to test the property geschaeftsjahrBis
      //var instance = new ProffixRestApiRequestSammlung.FIBFibuStammdaten();
      //expect(instance).to.be();
    });

    it('should have the property buchungsperiodeVon (base name: "BuchungsperiodeVon")', function() {
      // uncomment below and update the code to test the property buchungsperiodeVon
      //var instance = new ProffixRestApiRequestSammlung.FIBFibuStammdaten();
      //expect(instance).to.be();
    });

    it('should have the property buchungsperiodeBis (base name: "BuchungsperiodeBis")', function() {
      // uncomment below and update the code to test the property buchungsperiodeBis
      //var instance = new ProffixRestApiRequestSammlung.FIBFibuStammdaten();
      //expect(instance).to.be();
    });

    it('should have the property monatsabschlussPer (base name: "MonatsabschlussPer")', function() {
      // uncomment below and update the code to test the property monatsabschlussPer
      //var instance = new ProffixRestApiRequestSammlung.FIBFibuStammdaten();
      //expect(instance).to.be();
    });

  });

}));