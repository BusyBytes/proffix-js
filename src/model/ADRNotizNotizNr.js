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
    define(['ApiClient', 'model/Adresse', 'model/Kontakt', 'model/Notizart'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Adresse'), require('./Kontakt'), require('./Notizart'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.ADRNotizNotizNr = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Adresse, root.ProffixRestApiRequestSammlung.Kontakt, root.ProffixRestApiRequestSammlung.Notizart);
  }
}(this, function(ApiClient, Adresse, Kontakt, Notizart) {
  'use strict';




  /**
   * The ADRNotizNotizNr model module.
   * @module model/ADRNotizNotizNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>ADRNotizNotizNr</code>.
   * @alias module:model/ADRNotizNotizNr
   * @class
   * @param notizNr {Number} 
   * @param adresse {module:model/Adresse} 
   * @param kontakt {module:model/Kontakt} 
   * @param mitarbeiter {String} 
   * @param notizart {module:model/Notizart} 
   * @param datum {String} 
   * @param termin {String} 
   * @param notiz {String} 
   * @param notizRTF {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(notizNr, adresse, kontakt, mitarbeiter, notizart, datum, termin, notiz, notizRTF, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['NotizNr'] = notizNr;
    _this['Adresse'] = adresse;
    _this['Kontakt'] = kontakt;
    _this['Mitarbeiter'] = mitarbeiter;
    _this['Notizart'] = notizart;
    _this['Datum'] = datum;
    _this['Termin'] = termin;
    _this['Notiz'] = notiz;
    _this['NotizRTF'] = notizRTF;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>ADRNotizNotizNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ADRNotizNotizNr} obj Optional instance to populate.
   * @return {module:model/ADRNotizNotizNr} The populated <code>ADRNotizNotizNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('NotizNr')) {
        obj['NotizNr'] = ApiClient.convertToType(data['NotizNr'], 'Number');
      }
      if (data.hasOwnProperty('Adresse')) {
        obj['Adresse'] = Adresse.constructFromObject(data['Adresse']);
      }
      if (data.hasOwnProperty('Kontakt')) {
        obj['Kontakt'] = Kontakt.constructFromObject(data['Kontakt']);
      }
      if (data.hasOwnProperty('Mitarbeiter')) {
        obj['Mitarbeiter'] = ApiClient.convertToType(data['Mitarbeiter'], 'String');
      }
      if (data.hasOwnProperty('Notizart')) {
        obj['Notizart'] = Notizart.constructFromObject(data['Notizart']);
      }
      if (data.hasOwnProperty('Datum')) {
        obj['Datum'] = ApiClient.convertToType(data['Datum'], 'String');
      }
      if (data.hasOwnProperty('Termin')) {
        obj['Termin'] = ApiClient.convertToType(data['Termin'], 'String');
      }
      if (data.hasOwnProperty('Notiz')) {
        obj['Notiz'] = ApiClient.convertToType(data['Notiz'], 'String');
      }
      if (data.hasOwnProperty('NotizRTF')) {
        obj['NotizRTF'] = ApiClient.convertToType(data['NotizRTF'], 'String');
      }
      if (data.hasOwnProperty('ErstelltAm')) {
        obj['ErstelltAm'] = ApiClient.convertToType(data['ErstelltAm'], 'String');
      }
      if (data.hasOwnProperty('ErstelltVon')) {
        obj['ErstelltVon'] = ApiClient.convertToType(data['ErstelltVon'], 'String');
      }
      if (data.hasOwnProperty('GeaendertAm')) {
        obj['GeaendertAm'] = ApiClient.convertToType(data['GeaendertAm'], 'String');
      }
      if (data.hasOwnProperty('GeaendertVon')) {
        obj['GeaendertVon'] = ApiClient.convertToType(data['GeaendertVon'], 'String');
      }
      if (data.hasOwnProperty('Zusatzfelder')) {
        obj['Zusatzfelder'] = ApiClient.convertToType(data['Zusatzfelder'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Number} NotizNr
   */
  exports.prototype['NotizNr'] = undefined;
  /**
   * @member {module:model/Adresse} Adresse
   */
  exports.prototype['Adresse'] = undefined;
  /**
   * @member {module:model/Kontakt} Kontakt
   */
  exports.prototype['Kontakt'] = undefined;
  /**
   * @member {String} Mitarbeiter
   */
  exports.prototype['Mitarbeiter'] = undefined;
  /**
   * @member {module:model/Notizart} Notizart
   */
  exports.prototype['Notizart'] = undefined;
  /**
   * @member {String} Datum
   */
  exports.prototype['Datum'] = undefined;
  /**
   * @member {String} Termin
   */
  exports.prototype['Termin'] = undefined;
  /**
   * @member {String} Notiz
   */
  exports.prototype['Notiz'] = undefined;
  /**
   * @member {String} NotizRTF
   */
  exports.prototype['NotizRTF'] = undefined;
  /**
   * @member {String} ErstelltAm
   */
  exports.prototype['ErstelltAm'] = undefined;
  /**
   * @member {String} ErstelltVon
   */
  exports.prototype['ErstelltVon'] = undefined;
  /**
   * @member {String} GeaendertAm
   */
  exports.prototype['GeaendertAm'] = undefined;
  /**
   * @member {String} GeaendertVon
   */
  exports.prototype['GeaendertVon'] = undefined;
  /**
   * @member {Object} Zusatzfelder
   */
  exports.prototype['Zusatzfelder'] = undefined;



  return exports;
}));

