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
    define(['ApiClient', 'model/Adresse', 'model/Kontakt'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Adresse'), require('./Kontakt'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.ADRAdressdokumentRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Adresse, root.ProffixRestApiRequestSammlung.Kontakt);
  }
}(this, function(ApiClient, Adresse, Kontakt) {
  'use strict';




  /**
   * The ADRAdressdokumentRequest model module.
   * @module model/ADRAdressdokumentRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>ADRAdressdokumentRequest</code>.
   * @alias module:model/ADRAdressdokumentRequest
   * @class
   * @param adressdokumentNr {Number} 
   * @param adresse {module:model/Adresse} 
   * @param bemerkungen {String} 
   * @param bezeichnung {String} 
   * @param dateiNr {String} 
   * @param datum {String} 
   * @param dokumentgruppe {String} 
   * @param kontakt {module:model/Kontakt} 
   * @param modul {String} 
   */
  var exports = function(adressdokumentNr, adresse, bemerkungen, bezeichnung, dateiNr, datum, dokumentgruppe, kontakt, modul) {
    var _this = this;

    _this['AdressdokumentNr'] = adressdokumentNr;
    _this['Adresse'] = adresse;
    _this['Bemerkungen'] = bemerkungen;
    _this['Bezeichnung'] = bezeichnung;
    _this['DateiNr'] = dateiNr;
    _this['Datum'] = datum;
    _this['Dokumentgruppe'] = dokumentgruppe;
    _this['Kontakt'] = kontakt;
    _this['Modul'] = modul;
  };

  /**
   * Constructs a <code>ADRAdressdokumentRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ADRAdressdokumentRequest} obj Optional instance to populate.
   * @return {module:model/ADRAdressdokumentRequest} The populated <code>ADRAdressdokumentRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('AdressdokumentNr')) {
        obj['AdressdokumentNr'] = ApiClient.convertToType(data['AdressdokumentNr'], 'Number');
      }
      if (data.hasOwnProperty('Adresse')) {
        obj['Adresse'] = Adresse.constructFromObject(data['Adresse']);
      }
      if (data.hasOwnProperty('Bemerkungen')) {
        obj['Bemerkungen'] = ApiClient.convertToType(data['Bemerkungen'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('DateiNr')) {
        obj['DateiNr'] = ApiClient.convertToType(data['DateiNr'], 'String');
      }
      if (data.hasOwnProperty('Datum')) {
        obj['Datum'] = ApiClient.convertToType(data['Datum'], 'String');
      }
      if (data.hasOwnProperty('Dokumentgruppe')) {
        obj['Dokumentgruppe'] = ApiClient.convertToType(data['Dokumentgruppe'], 'String');
      }
      if (data.hasOwnProperty('Kontakt')) {
        obj['Kontakt'] = Kontakt.constructFromObject(data['Kontakt']);
      }
      if (data.hasOwnProperty('Modul')) {
        obj['Modul'] = ApiClient.convertToType(data['Modul'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} AdressdokumentNr
   */
  exports.prototype['AdressdokumentNr'] = undefined;
  /**
   * @member {module:model/Adresse} Adresse
   */
  exports.prototype['Adresse'] = undefined;
  /**
   * @member {String} Bemerkungen
   */
  exports.prototype['Bemerkungen'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {String} DateiNr
   */
  exports.prototype['DateiNr'] = undefined;
  /**
   * @member {String} Datum
   */
  exports.prototype['Datum'] = undefined;
  /**
   * @member {String} Dokumentgruppe
   */
  exports.prototype['Dokumentgruppe'] = undefined;
  /**
   * @member {module:model/Kontakt} Kontakt
   */
  exports.prototype['Kontakt'] = undefined;
  /**
   * @member {String} Modul
   */
  exports.prototype['Modul'] = undefined;



  return exports;
}));


