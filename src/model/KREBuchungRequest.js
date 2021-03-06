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
    define(['ApiClient', 'model/Adresse', 'model/Buchungen1', 'model/Kondition', 'model/Zahlungsart'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Adresse'), require('./Buchungen1'), require('./Kondition'), require('./Zahlungsart'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.KREBuchungRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Adresse, root.ProffixRestApiRequestSammlung.Buchungen1, root.ProffixRestApiRequestSammlung.Kondition, root.ProffixRestApiRequestSammlung.Zahlungsart);
  }
}(this, function(ApiClient, Adresse, Buchungen1, Kondition, Zahlungsart) {
  'use strict';




  /**
   * The KREBuchungRequest model module.
   * @module model/KREBuchungRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>KREBuchungRequest</code>.
   * @alias module:model/KREBuchungRequest
   * @class
   * @param buchungsdatum {String} 
   * @param belegnummer {Number} 
   * @param kondition {module:model/Kondition} 
   * @param adresse {module:model/Adresse} 
   * @param zahlungsart {module:model/Zahlungsart} 
   * @param buchungen {Array.<module:model/Buchungen1>} 
   */
  var exports = function(buchungsdatum, belegnummer, kondition, adresse, zahlungsart, buchungen) {
    var _this = this;

    _this['Buchungsdatum'] = buchungsdatum;
    _this['Belegnummer'] = belegnummer;
    _this['Kondition'] = kondition;
    _this['Adresse'] = adresse;
    _this['Zahlungsart'] = zahlungsart;
    _this['Buchungen'] = buchungen;
  };

  /**
   * Constructs a <code>KREBuchungRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KREBuchungRequest} obj Optional instance to populate.
   * @return {module:model/KREBuchungRequest} The populated <code>KREBuchungRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Buchungsdatum')) {
        obj['Buchungsdatum'] = ApiClient.convertToType(data['Buchungsdatum'], 'String');
      }
      if (data.hasOwnProperty('Belegnummer')) {
        obj['Belegnummer'] = ApiClient.convertToType(data['Belegnummer'], 'Number');
      }
      if (data.hasOwnProperty('Kondition')) {
        obj['Kondition'] = Kondition.constructFromObject(data['Kondition']);
      }
      if (data.hasOwnProperty('Adresse')) {
        obj['Adresse'] = Adresse.constructFromObject(data['Adresse']);
      }
      if (data.hasOwnProperty('Zahlungsart')) {
        obj['Zahlungsart'] = Zahlungsart.constructFromObject(data['Zahlungsart']);
      }
      if (data.hasOwnProperty('Buchungen')) {
        obj['Buchungen'] = ApiClient.convertToType(data['Buchungen'], [Buchungen1]);
      }
    }
    return obj;
  }

  /**
   * @member {String} Buchungsdatum
   */
  exports.prototype['Buchungsdatum'] = undefined;
  /**
   * @member {Number} Belegnummer
   */
  exports.prototype['Belegnummer'] = undefined;
  /**
   * @member {module:model/Kondition} Kondition
   */
  exports.prototype['Kondition'] = undefined;
  /**
   * @member {module:model/Adresse} Adresse
   */
  exports.prototype['Adresse'] = undefined;
  /**
   * @member {module:model/Zahlungsart} Zahlungsart
   */
  exports.prototype['Zahlungsart'] = undefined;
  /**
   * @member {Array.<module:model/Buchungen1>} Buchungen
   */
  exports.prototype['Buchungen'] = undefined;



  return exports;
}));


