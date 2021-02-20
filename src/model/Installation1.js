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
    define(['ApiClient', 'model/Auftrag4', 'model/Prioritaet7', 'model/Standort2', 'model/Vertragstyp2'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Auftrag4'), require('./Prioritaet7'), require('./Standort2'), require('./Vertragstyp2'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.Installation1 = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Auftrag4, root.ProffixRestApiRequestSammlung.Prioritaet7, root.ProffixRestApiRequestSammlung.Standort2, root.ProffixRestApiRequestSammlung.Vertragstyp2);
  }
}(this, function(ApiClient, Auftrag4, Prioritaet7, Standort2, Vertragstyp2) {
  'use strict';




  /**
   * The Installation1 model module.
   * @module model/Installation1
   * @version 1.0
   */

  /**
   * Constructs a new <code>Installation1</code>.
   * @alias module:model/Installation1
   * @class
   * @param installationNr {Number} 
   */
  var exports = function(installationNr) {
    var _this = this;

    _this['InstallationNr'] = installationNr;





































  };

  /**
   * Constructs a <code>Installation1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Installation1} obj Optional instance to populate.
   * @return {module:model/Installation1} The populated <code>Installation1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InstallationNr')) {
        obj['InstallationNr'] = ApiClient.convertToType(data['InstallationNr'], 'Number');
      }
      if (data.hasOwnProperty('Standort')) {
        obj['Standort'] = Standort2.constructFromObject(data['Standort']);
      }
      if (data.hasOwnProperty('Betreueradresse')) {
        obj['Betreueradresse'] = ApiClient.convertToType(data['Betreueradresse'], 'String');
      }
      if (data.hasOwnProperty('Externadresse')) {
        obj['Externadresse'] = ApiClient.convertToType(data['Externadresse'], 'String');
      }
      if (data.hasOwnProperty('Prioritaet')) {
        obj['Prioritaet'] = Prioritaet7.constructFromObject(data['Prioritaet']);
      }
      if (data.hasOwnProperty('Artikel')) {
        obj['Artikel'] = ApiClient.convertToType(data['Artikel'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung1')) {
        obj['Bezeichnung1'] = ApiClient.convertToType(data['Bezeichnung1'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung2')) {
        obj['Bezeichnung2'] = ApiClient.convertToType(data['Bezeichnung2'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung3')) {
        obj['Bezeichnung3'] = ApiClient.convertToType(data['Bezeichnung3'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung4')) {
        obj['Bezeichnung4'] = ApiClient.convertToType(data['Bezeichnung4'], 'String');
      }
      if (data.hasOwnProperty('Bezeichnung5')) {
        obj['Bezeichnung5'] = ApiClient.convertToType(data['Bezeichnung5'], 'String');
      }
      if (data.hasOwnProperty('Gewicht')) {
        obj['Gewicht'] = ApiClient.convertToType(data['Gewicht'], 'Number');
      }
      if (data.hasOwnProperty('Seriennummer')) {
        obj['Seriennummer'] = ApiClient.convertToType(data['Seriennummer'], 'String');
      }
      if (data.hasOwnProperty('KonfigurationsID')) {
        obj['KonfigurationsID'] = ApiClient.convertToType(data['KonfigurationsID'], 'String');
      }
      if (data.hasOwnProperty('ProduktNr')) {
        obj['ProduktNr'] = ApiClient.convertToType(data['ProduktNr'], 'String');
      }
      if (data.hasOwnProperty('Installationstermin')) {
        obj['Installationstermin'] = ApiClient.convertToType(data['Installationstermin'], 'String');
      }
      if (data.hasOwnProperty('Garantieende')) {
        obj['Garantieende'] = ApiClient.convertToType(data['Garantieende'], 'String');
      }
      if (data.hasOwnProperty('Garantiezusatz')) {
        obj['Garantiezusatz'] = ApiClient.convertToType(data['Garantiezusatz'], 'String');
      }
      if (data.hasOwnProperty('DokumentNr')) {
        obj['DokumentNr'] = ApiClient.convertToType(data['DokumentNr'], 'Number');
      }
      if (data.hasOwnProperty('Auftrag')) {
        obj['Auftrag'] = Auftrag4.constructFromObject(data['Auftrag']);
      }
      if (data.hasOwnProperty('Vertragstyp')) {
        obj['Vertragstyp'] = Vertragstyp2.constructFromObject(data['Vertragstyp']);
      }
      if (data.hasOwnProperty('Herstellervertrag')) {
        obj['Herstellervertrag'] = ApiClient.convertToType(data['Herstellervertrag'], 'String');
      }
      if (data.hasOwnProperty('Suchfeld')) {
        obj['Suchfeld'] = ApiClient.convertToType(data['Suchfeld'], 'String');
      }
      if (data.hasOwnProperty('Artikelklasse')) {
        obj['Artikelklasse'] = ApiClient.convertToType(data['Artikelklasse'], 'String');
      }
      if (data.hasOwnProperty('Artikelgruppe')) {
        obj['Artikelgruppe'] = ApiClient.convertToType(data['Artikelgruppe'], 'String');
      }
      if (data.hasOwnProperty('Artikeluntergruppe')) {
        obj['Artikeluntergruppe'] = ApiClient.convertToType(data['Artikeluntergruppe'], 'String');
      }
      if (data.hasOwnProperty('Menge')) {
        obj['Menge'] = ApiClient.convertToType(data['Menge'], 'Number');
      }
      if (data.hasOwnProperty('Anlage')) {
        obj['Anlage'] = ApiClient.convertToType(data['Anlage'], 'String');
      }
      if (data.hasOwnProperty('Inhaber')) {
        obj['Inhaber'] = ApiClient.convertToType(data['Inhaber'], 'String');
      }
      if (data.hasOwnProperty('IstLagerinstallation')) {
        obj['IstLagerinstallation'] = ApiClient.convertToType(data['IstLagerinstallation'], 'Boolean');
      }
      if (data.hasOwnProperty('Geloescht')) {
        obj['Geloescht'] = ApiClient.convertToType(data['Geloescht'], 'Boolean');
      }
      if (data.hasOwnProperty('Global')) {
        obj['Global'] = ApiClient.convertToType(data['Global'], 'Boolean');
      }
      if (data.hasOwnProperty('Standard')) {
        obj['Standard'] = ApiClient.convertToType(data['Standard'], 'Boolean');
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
   * @member {Number} InstallationNr
   */
  exports.prototype['InstallationNr'] = undefined;
  /**
   * @member {module:model/Standort2} Standort
   */
  exports.prototype['Standort'] = undefined;
  /**
   * @member {String} Betreueradresse
   */
  exports.prototype['Betreueradresse'] = undefined;
  /**
   * @member {String} Externadresse
   */
  exports.prototype['Externadresse'] = undefined;
  /**
   * @member {module:model/Prioritaet7} Prioritaet
   */
  exports.prototype['Prioritaet'] = undefined;
  /**
   * @member {String} Artikel
   */
  exports.prototype['Artikel'] = undefined;
  /**
   * @member {String} Bezeichnung1
   */
  exports.prototype['Bezeichnung1'] = undefined;
  /**
   * @member {String} Bezeichnung2
   */
  exports.prototype['Bezeichnung2'] = undefined;
  /**
   * @member {String} Bezeichnung3
   */
  exports.prototype['Bezeichnung3'] = undefined;
  /**
   * @member {String} Bezeichnung4
   */
  exports.prototype['Bezeichnung4'] = undefined;
  /**
   * @member {String} Bezeichnung5
   */
  exports.prototype['Bezeichnung5'] = undefined;
  /**
   * @member {Number} Gewicht
   */
  exports.prototype['Gewicht'] = undefined;
  /**
   * @member {String} Seriennummer
   */
  exports.prototype['Seriennummer'] = undefined;
  /**
   * @member {String} KonfigurationsID
   */
  exports.prototype['KonfigurationsID'] = undefined;
  /**
   * @member {String} ProduktNr
   */
  exports.prototype['ProduktNr'] = undefined;
  /**
   * @member {String} Installationstermin
   */
  exports.prototype['Installationstermin'] = undefined;
  /**
   * @member {String} Garantieende
   */
  exports.prototype['Garantieende'] = undefined;
  /**
   * @member {String} Garantiezusatz
   */
  exports.prototype['Garantiezusatz'] = undefined;
  /**
   * @member {Number} DokumentNr
   */
  exports.prototype['DokumentNr'] = undefined;
  /**
   * @member {module:model/Auftrag4} Auftrag
   */
  exports.prototype['Auftrag'] = undefined;
  /**
   * @member {module:model/Vertragstyp2} Vertragstyp
   */
  exports.prototype['Vertragstyp'] = undefined;
  /**
   * @member {String} Herstellervertrag
   */
  exports.prototype['Herstellervertrag'] = undefined;
  /**
   * @member {String} Suchfeld
   */
  exports.prototype['Suchfeld'] = undefined;
  /**
   * @member {String} Artikelklasse
   */
  exports.prototype['Artikelklasse'] = undefined;
  /**
   * @member {String} Artikelgruppe
   */
  exports.prototype['Artikelgruppe'] = undefined;
  /**
   * @member {String} Artikeluntergruppe
   */
  exports.prototype['Artikeluntergruppe'] = undefined;
  /**
   * @member {Number} Menge
   */
  exports.prototype['Menge'] = undefined;
  /**
   * @member {String} Anlage
   */
  exports.prototype['Anlage'] = undefined;
  /**
   * @member {String} Inhaber
   */
  exports.prototype['Inhaber'] = undefined;
  /**
   * @member {Boolean} IstLagerinstallation
   */
  exports.prototype['IstLagerinstallation'] = undefined;
  /**
   * @member {Boolean} Geloescht
   */
  exports.prototype['Geloescht'] = undefined;
  /**
   * @member {Boolean} Global
   */
  exports.prototype['Global'] = undefined;
  /**
   * @member {Boolean} Standard
   */
  exports.prototype['Standard'] = undefined;
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

