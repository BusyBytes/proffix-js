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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Adresse', 'model/Belege', 'model/Buchungen3'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Adresse'), require('./Belege'), require('./Buchungen3'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Adresse, root.ProffixRestApiRequestSammlung.Belege, root.ProffixRestApiRequestSammlung.Buchungen3);
  }
}(this, function(ApiClient, Adresse, Belege, Buchungen3) {
  'use strict';




  /**
   * The DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest model module.
   * @module model/DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest</code>.
   * @alias module:model/DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest
   * @class
   * @param buchungsdatum {String} 
   * @param adresse {module:model/Adresse} 
   * @param buchungen {Array.<module:model/Buchungen3>} 
   * @param belege {Array.<module:model/Belege>} 
   */
  var exports = function(buchungsdatum, adresse, buchungen, belege) {
    var _this = this;

    _this['Buchungsdatum'] = buchungsdatum;
    _this['Adresse'] = adresse;
    _this['Buchungen'] = buchungen;
    _this['Belege'] = belege;
  };

  /**
   * Constructs a <code>DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest} obj Optional instance to populate.
   * @return {module:model/DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest} The populated <code>DEBBuchungzahlungerfassenMittelsGutschriftundRechnungssaldoRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Buchungsdatum')) {
        obj['Buchungsdatum'] = ApiClient.convertToType(data['Buchungsdatum'], 'String');
      }
      if (data.hasOwnProperty('Adresse')) {
        obj['Adresse'] = Adresse.constructFromObject(data['Adresse']);
      }
      if (data.hasOwnProperty('Buchungen')) {
        obj['Buchungen'] = ApiClient.convertToType(data['Buchungen'], [Buchungen3]);
      }
      if (data.hasOwnProperty('Belege')) {
        obj['Belege'] = ApiClient.convertToType(data['Belege'], [Belege]);
      }
    }
    return obj;
  }

  /**
   * @member {String} Buchungsdatum
   */
  exports.prototype['Buchungsdatum'] = undefined;
  /**
   * @member {module:model/Adresse} Adresse
   */
  exports.prototype['Adresse'] = undefined;
  /**
   * @member {Array.<module:model/Buchungen3>} Buchungen
   */
  exports.prototype['Buchungen'] = undefined;
  /**
   * @member {Array.<module:model/Belege>} Belege
   */
  exports.prototype['Belege'] = undefined;



  return exports;
}));

