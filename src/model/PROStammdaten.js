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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.PROStammdaten = factory(root.ProffixRestApiRequestSammlung.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PROStammdaten model module.
   * @module model/PROStammdaten
   * @version 1.0
   */

  /**
   * Constructs a new <code>PROStammdaten</code>.
   * @alias module:model/PROStammdaten
   * @class
   * @param anschrift {String} 
   * @param berechtigung {Number} 
   * @param eMail {String} 
   * @param fax {String} 
   * @param firma {String} 
   * @param homepage {String} 
   * @param noAutoLogin {Boolean} 
   * @param ort {String} 
   * @param PLZ {String} 
   * @param sprache {Number} 
   * @param strasse {String} 
   * @param telefon {String} 
   */
  var exports = function(anschrift, berechtigung, eMail, fax, firma, homepage, noAutoLogin, ort, PLZ, sprache, strasse, telefon) {
    var _this = this;

    _this['Anschrift'] = anschrift;
    _this['Berechtigung'] = berechtigung;
    _this['EMail'] = eMail;
    _this['Fax'] = fax;
    _this['Firma'] = firma;
    _this['Homepage'] = homepage;
    _this['NoAutoLogin'] = noAutoLogin;
    _this['Ort'] = ort;
    _this['PLZ'] = PLZ;
    _this['Sprache'] = sprache;
    _this['Strasse'] = strasse;
    _this['Telefon'] = telefon;
  };

  /**
   * Constructs a <code>PROStammdaten</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PROStammdaten} obj Optional instance to populate.
   * @return {module:model/PROStammdaten} The populated <code>PROStammdaten</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Anschrift')) {
        obj['Anschrift'] = ApiClient.convertToType(data['Anschrift'], 'String');
      }
      if (data.hasOwnProperty('Berechtigung')) {
        obj['Berechtigung'] = ApiClient.convertToType(data['Berechtigung'], 'Number');
      }
      if (data.hasOwnProperty('EMail')) {
        obj['EMail'] = ApiClient.convertToType(data['EMail'], 'String');
      }
      if (data.hasOwnProperty('Fax')) {
        obj['Fax'] = ApiClient.convertToType(data['Fax'], 'String');
      }
      if (data.hasOwnProperty('Firma')) {
        obj['Firma'] = ApiClient.convertToType(data['Firma'], 'String');
      }
      if (data.hasOwnProperty('Homepage')) {
        obj['Homepage'] = ApiClient.convertToType(data['Homepage'], 'String');
      }
      if (data.hasOwnProperty('NoAutoLogin')) {
        obj['NoAutoLogin'] = ApiClient.convertToType(data['NoAutoLogin'], 'Boolean');
      }
      if (data.hasOwnProperty('Ort')) {
        obj['Ort'] = ApiClient.convertToType(data['Ort'], 'String');
      }
      if (data.hasOwnProperty('PLZ')) {
        obj['PLZ'] = ApiClient.convertToType(data['PLZ'], 'String');
      }
      if (data.hasOwnProperty('Sprache')) {
        obj['Sprache'] = ApiClient.convertToType(data['Sprache'], 'Number');
      }
      if (data.hasOwnProperty('Strasse')) {
        obj['Strasse'] = ApiClient.convertToType(data['Strasse'], 'String');
      }
      if (data.hasOwnProperty('Telefon')) {
        obj['Telefon'] = ApiClient.convertToType(data['Telefon'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} Anschrift
   */
  exports.prototype['Anschrift'] = undefined;
  /**
   * @member {Number} Berechtigung
   */
  exports.prototype['Berechtigung'] = undefined;
  /**
   * @member {String} EMail
   */
  exports.prototype['EMail'] = undefined;
  /**
   * @member {String} Fax
   */
  exports.prototype['Fax'] = undefined;
  /**
   * @member {String} Firma
   */
  exports.prototype['Firma'] = undefined;
  /**
   * @member {String} Homepage
   */
  exports.prototype['Homepage'] = undefined;
  /**
   * @member {Boolean} NoAutoLogin
   */
  exports.prototype['NoAutoLogin'] = undefined;
  /**
   * @member {String} Ort
   */
  exports.prototype['Ort'] = undefined;
  /**
   * @member {String} PLZ
   */
  exports.prototype['PLZ'] = undefined;
  /**
   * @member {Number} Sprache
   */
  exports.prototype['Sprache'] = undefined;
  /**
   * @member {String} Strasse
   */
  exports.prototype['Strasse'] = undefined;
  /**
   * @member {String} Telefon
   */
  exports.prototype['Telefon'] = undefined;



  return exports;
}));

