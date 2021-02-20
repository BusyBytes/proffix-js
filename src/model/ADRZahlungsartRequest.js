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
    define(['ApiClient', 'model/Adresse', 'model/Bank'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Adresse'), require('./Bank'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.ADRZahlungsartRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Adresse, root.ProffixRestApiRequestSammlung.Bank);
  }
}(this, function(ApiClient, Adresse, Bank) {
  'use strict';




  /**
   * The ADRZahlungsartRequest model module.
   * @module model/ADRZahlungsartRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>ADRZahlungsartRequest</code>.
   * @alias module:model/ADRZahlungsartRequest
   * @class
   * @param zahlungsartNr {Number} 
   * @param adresse {module:model/Adresse} 
   * @param bankBelegNummer {Number} 
   * @param bank {module:model/Bank} 
   * @param beguenstigter {String} 
   * @param belastenVon {String} 
   * @param eigeneZahlungsart {Boolean} 
   * @param formCode {String} 
   * @param hauptZahlungsart {Boolean} 
   * @param inaktiv {Boolean} 
   * @param kontonummerBank {String} 
   * @param konto {String} 
   * @param postcheckNummer {String} 
   * @param spesenregelung {Number} 
   * @param swiftNummer {String} 
   * @param teilnehmerNummer {String} 
   * @param zahlArt {Number} 
   * @param zahlungsartTyp {String} 
   * @param bemerkungen {String} 
   */
  var exports = function(zahlungsartNr, adresse, bankBelegNummer, bank, beguenstigter, belastenVon, eigeneZahlungsart, formCode, hauptZahlungsart, inaktiv, kontonummerBank, konto, postcheckNummer, spesenregelung, swiftNummer, teilnehmerNummer, zahlArt, zahlungsartTyp, bemerkungen) {
    var _this = this;

    _this['ZahlungsartNr'] = zahlungsartNr;
    _this['Adresse'] = adresse;
    _this['BankBelegNummer'] = bankBelegNummer;
    _this['Bank'] = bank;
    _this['Beguenstigter'] = beguenstigter;
    _this['BelastenVon'] = belastenVon;
    _this['EigeneZahlungsart'] = eigeneZahlungsart;
    _this['FormCode'] = formCode;
    _this['HauptZahlungsart'] = hauptZahlungsart;
    _this['Inaktiv'] = inaktiv;
    _this['KontonummerBank'] = kontonummerBank;
    _this['Konto'] = konto;
    _this['PostcheckNummer'] = postcheckNummer;
    _this['Spesenregelung'] = spesenregelung;
    _this['SwiftNummer'] = swiftNummer;
    _this['TeilnehmerNummer'] = teilnehmerNummer;
    _this['ZahlArt'] = zahlArt;
    _this['ZahlungsartTyp'] = zahlungsartTyp;
    _this['Bemerkungen'] = bemerkungen;
  };

  /**
   * Constructs a <code>ADRZahlungsartRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ADRZahlungsartRequest} obj Optional instance to populate.
   * @return {module:model/ADRZahlungsartRequest} The populated <code>ADRZahlungsartRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ZahlungsartNr')) {
        obj['ZahlungsartNr'] = ApiClient.convertToType(data['ZahlungsartNr'], 'Number');
      }
      if (data.hasOwnProperty('Adresse')) {
        obj['Adresse'] = Adresse.constructFromObject(data['Adresse']);
      }
      if (data.hasOwnProperty('BankBelegNummer')) {
        obj['BankBelegNummer'] = ApiClient.convertToType(data['BankBelegNummer'], 'Number');
      }
      if (data.hasOwnProperty('Bank')) {
        obj['Bank'] = Bank.constructFromObject(data['Bank']);
      }
      if (data.hasOwnProperty('Beguenstigter')) {
        obj['Beguenstigter'] = ApiClient.convertToType(data['Beguenstigter'], 'String');
      }
      if (data.hasOwnProperty('BelastenVon')) {
        obj['BelastenVon'] = ApiClient.convertToType(data['BelastenVon'], 'String');
      }
      if (data.hasOwnProperty('EigeneZahlungsart')) {
        obj['EigeneZahlungsart'] = ApiClient.convertToType(data['EigeneZahlungsart'], 'Boolean');
      }
      if (data.hasOwnProperty('FormCode')) {
        obj['FormCode'] = ApiClient.convertToType(data['FormCode'], 'String');
      }
      if (data.hasOwnProperty('HauptZahlungsart')) {
        obj['HauptZahlungsart'] = ApiClient.convertToType(data['HauptZahlungsart'], 'Boolean');
      }
      if (data.hasOwnProperty('Inaktiv')) {
        obj['Inaktiv'] = ApiClient.convertToType(data['Inaktiv'], 'Boolean');
      }
      if (data.hasOwnProperty('KontonummerBank')) {
        obj['KontonummerBank'] = ApiClient.convertToType(data['KontonummerBank'], 'String');
      }
      if (data.hasOwnProperty('Konto')) {
        obj['Konto'] = ApiClient.convertToType(data['Konto'], 'String');
      }
      if (data.hasOwnProperty('PostcheckNummer')) {
        obj['PostcheckNummer'] = ApiClient.convertToType(data['PostcheckNummer'], 'String');
      }
      if (data.hasOwnProperty('Spesenregelung')) {
        obj['Spesenregelung'] = ApiClient.convertToType(data['Spesenregelung'], 'Number');
      }
      if (data.hasOwnProperty('SwiftNummer')) {
        obj['SwiftNummer'] = ApiClient.convertToType(data['SwiftNummer'], 'String');
      }
      if (data.hasOwnProperty('TeilnehmerNummer')) {
        obj['TeilnehmerNummer'] = ApiClient.convertToType(data['TeilnehmerNummer'], 'String');
      }
      if (data.hasOwnProperty('ZahlArt')) {
        obj['ZahlArt'] = ApiClient.convertToType(data['ZahlArt'], 'Number');
      }
      if (data.hasOwnProperty('ZahlungsartTyp')) {
        obj['ZahlungsartTyp'] = ApiClient.convertToType(data['ZahlungsartTyp'], 'String');
      }
      if (data.hasOwnProperty('Bemerkungen')) {
        obj['Bemerkungen'] = ApiClient.convertToType(data['Bemerkungen'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} ZahlungsartNr
   */
  exports.prototype['ZahlungsartNr'] = undefined;
  /**
   * @member {module:model/Adresse} Adresse
   */
  exports.prototype['Adresse'] = undefined;
  /**
   * @member {Number} BankBelegNummer
   */
  exports.prototype['BankBelegNummer'] = undefined;
  /**
   * @member {module:model/Bank} Bank
   */
  exports.prototype['Bank'] = undefined;
  /**
   * @member {String} Beguenstigter
   */
  exports.prototype['Beguenstigter'] = undefined;
  /**
   * @member {String} BelastenVon
   */
  exports.prototype['BelastenVon'] = undefined;
  /**
   * @member {Boolean} EigeneZahlungsart
   */
  exports.prototype['EigeneZahlungsart'] = undefined;
  /**
   * @member {String} FormCode
   */
  exports.prototype['FormCode'] = undefined;
  /**
   * @member {Boolean} HauptZahlungsart
   */
  exports.prototype['HauptZahlungsart'] = undefined;
  /**
   * @member {Boolean} Inaktiv
   */
  exports.prototype['Inaktiv'] = undefined;
  /**
   * @member {String} KontonummerBank
   */
  exports.prototype['KontonummerBank'] = undefined;
  /**
   * @member {String} Konto
   */
  exports.prototype['Konto'] = undefined;
  /**
   * @member {String} PostcheckNummer
   */
  exports.prototype['PostcheckNummer'] = undefined;
  /**
   * @member {Number} Spesenregelung
   */
  exports.prototype['Spesenregelung'] = undefined;
  /**
   * @member {String} SwiftNummer
   */
  exports.prototype['SwiftNummer'] = undefined;
  /**
   * @member {String} TeilnehmerNummer
   */
  exports.prototype['TeilnehmerNummer'] = undefined;
  /**
   * @member {Number} ZahlArt
   */
  exports.prototype['ZahlArt'] = undefined;
  /**
   * @member {String} ZahlungsartTyp
   */
  exports.prototype['ZahlungsartTyp'] = undefined;
  /**
   * @member {String} Bemerkungen
   */
  exports.prototype['Bemerkungen'] = undefined;



  return exports;
}));

