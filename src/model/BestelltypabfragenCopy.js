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
    define(['ApiClient', 'model/Belegart'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Belegart'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.BestelltypabfragenCopy = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Belegart);
  }
}(this, function(ApiClient, Belegart) {
  'use strict';




  /**
   * The BestelltypabfragenCopy model module.
   * @module model/BestelltypabfragenCopy
   * @version 1.0
   */

  /**
   * Constructs a new <code>BestelltypabfragenCopy</code>.
   * @alias module:model/BestelltypabfragenCopy
   * @class
   * @param bestelltypNr {String} 
   * @param artikelDokumenteDrucken {Boolean} 
   * @param aufgabe {String} 
   * @param belegart {module:model/Belegart} 
   * @param bestellofferte {Boolean} 
   * @param bezeichnung {String} 
   * @param hauptBestellung {Boolean} 
   * @param bestellformular1 {String} 
   * @param bestellformular2 {String} 
   * @param bestellformular3 {String} 
   * @param reihenfolge {Number} 
   * @param statusLagereingang {Boolean} 
   * @param statusOffen {Boolean} 
   * @param statusPreiskorrektur {Boolean} 
   * @param titel {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(bestelltypNr, artikelDokumenteDrucken, aufgabe, belegart, bestellofferte, bezeichnung, hauptBestellung, bestellformular1, bestellformular2, bestellformular3, reihenfolge, statusLagereingang, statusOffen, statusPreiskorrektur, titel, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['BestelltypNr'] = bestelltypNr;
    _this['ArtikelDokumenteDrucken'] = artikelDokumenteDrucken;
    _this['Aufgabe'] = aufgabe;
    _this['Belegart'] = belegart;
    _this['Bestellofferte'] = bestellofferte;
    _this['Bezeichnung'] = bezeichnung;
    _this['HauptBestellung'] = hauptBestellung;
    _this['Bestellformular1'] = bestellformular1;
    _this['Bestellformular2'] = bestellformular2;
    _this['Bestellformular3'] = bestellformular3;
    _this['Reihenfolge'] = reihenfolge;
    _this['StatusLagereingang'] = statusLagereingang;
    _this['StatusOffen'] = statusOffen;
    _this['StatusPreiskorrektur'] = statusPreiskorrektur;
    _this['Titel'] = titel;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>BestelltypabfragenCopy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BestelltypabfragenCopy} obj Optional instance to populate.
   * @return {module:model/BestelltypabfragenCopy} The populated <code>BestelltypabfragenCopy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BestelltypNr')) {
        obj['BestelltypNr'] = ApiClient.convertToType(data['BestelltypNr'], 'String');
      }
      if (data.hasOwnProperty('ArtikelDokumenteDrucken')) {
        obj['ArtikelDokumenteDrucken'] = ApiClient.convertToType(data['ArtikelDokumenteDrucken'], 'Boolean');
      }
      if (data.hasOwnProperty('Aufgabe')) {
        obj['Aufgabe'] = ApiClient.convertToType(data['Aufgabe'], 'String');
      }
      if (data.hasOwnProperty('Belegart')) {
        obj['Belegart'] = Belegart.constructFromObject(data['Belegart']);
      }
      if (data.hasOwnProperty('Bestellofferte')) {
        obj['Bestellofferte'] = ApiClient.convertToType(data['Bestellofferte'], 'Boolean');
      }
      if (data.hasOwnProperty('Bezeichnung')) {
        obj['Bezeichnung'] = ApiClient.convertToType(data['Bezeichnung'], 'String');
      }
      if (data.hasOwnProperty('HauptBestellung')) {
        obj['HauptBestellung'] = ApiClient.convertToType(data['HauptBestellung'], 'Boolean');
      }
      if (data.hasOwnProperty('Bestellformular1')) {
        obj['Bestellformular1'] = ApiClient.convertToType(data['Bestellformular1'], 'String');
      }
      if (data.hasOwnProperty('Bestellformular2')) {
        obj['Bestellformular2'] = ApiClient.convertToType(data['Bestellformular2'], 'String');
      }
      if (data.hasOwnProperty('Bestellformular3')) {
        obj['Bestellformular3'] = ApiClient.convertToType(data['Bestellformular3'], 'String');
      }
      if (data.hasOwnProperty('Reihenfolge')) {
        obj['Reihenfolge'] = ApiClient.convertToType(data['Reihenfolge'], 'Number');
      }
      if (data.hasOwnProperty('StatusLagereingang')) {
        obj['StatusLagereingang'] = ApiClient.convertToType(data['StatusLagereingang'], 'Boolean');
      }
      if (data.hasOwnProperty('StatusOffen')) {
        obj['StatusOffen'] = ApiClient.convertToType(data['StatusOffen'], 'Boolean');
      }
      if (data.hasOwnProperty('StatusPreiskorrektur')) {
        obj['StatusPreiskorrektur'] = ApiClient.convertToType(data['StatusPreiskorrektur'], 'Boolean');
      }
      if (data.hasOwnProperty('Titel')) {
        obj['Titel'] = ApiClient.convertToType(data['Titel'], 'String');
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
   * @member {String} BestelltypNr
   */
  exports.prototype['BestelltypNr'] = undefined;
  /**
   * @member {Boolean} ArtikelDokumenteDrucken
   */
  exports.prototype['ArtikelDokumenteDrucken'] = undefined;
  /**
   * @member {String} Aufgabe
   */
  exports.prototype['Aufgabe'] = undefined;
  /**
   * @member {module:model/Belegart} Belegart
   */
  exports.prototype['Belegart'] = undefined;
  /**
   * @member {Boolean} Bestellofferte
   */
  exports.prototype['Bestellofferte'] = undefined;
  /**
   * @member {String} Bezeichnung
   */
  exports.prototype['Bezeichnung'] = undefined;
  /**
   * @member {Boolean} HauptBestellung
   */
  exports.prototype['HauptBestellung'] = undefined;
  /**
   * @member {String} Bestellformular1
   */
  exports.prototype['Bestellformular1'] = undefined;
  /**
   * @member {String} Bestellformular2
   */
  exports.prototype['Bestellformular2'] = undefined;
  /**
   * @member {String} Bestellformular3
   */
  exports.prototype['Bestellformular3'] = undefined;
  /**
   * @member {Number} Reihenfolge
   */
  exports.prototype['Reihenfolge'] = undefined;
  /**
   * @member {Boolean} StatusLagereingang
   */
  exports.prototype['StatusLagereingang'] = undefined;
  /**
   * @member {Boolean} StatusOffen
   */
  exports.prototype['StatusOffen'] = undefined;
  /**
   * @member {Boolean} StatusPreiskorrektur
   */
  exports.prototype['StatusPreiskorrektur'] = undefined;
  /**
   * @member {String} Titel
   */
  exports.prototype['Titel'] = undefined;
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

