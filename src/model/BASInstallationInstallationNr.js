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
    define(['ApiClient', 'model/Artikel', 'model/Artikelgruppe', 'model/Artikelklasse', 'model/Garantiezusatz', 'model/Prioritaet', 'model/Standort', 'model/Vertragstyp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Artikel'), require('./Artikelgruppe'), require('./Artikelklasse'), require('./Garantiezusatz'), require('./Prioritaet'), require('./Standort'), require('./Vertragstyp'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.BASInstallationInstallationNr = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Artikel, root.ProffixRestApiRequestSammlung.Artikelgruppe, root.ProffixRestApiRequestSammlung.Artikelklasse, root.ProffixRestApiRequestSammlung.Garantiezusatz, root.ProffixRestApiRequestSammlung.Prioritaet, root.ProffixRestApiRequestSammlung.Standort, root.ProffixRestApiRequestSammlung.Vertragstyp);
  }
}(this, function(ApiClient, Artikel, Artikelgruppe, Artikelklasse, Garantiezusatz, Prioritaet, Standort, Vertragstyp) {
  'use strict';




  /**
   * The BASInstallationInstallationNr model module.
   * @module model/BASInstallationInstallationNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>BASInstallationInstallationNr</code>.
   * @alias module:model/BASInstallationInstallationNr
   * @class
   * @param installationNr {Number} 
   * @param standort {module:model/Standort} 
   * @param betreueradresse {String} 
   * @param externadresse {String} 
   * @param prioritaet {module:model/Prioritaet} 
   * @param artikel {module:model/Artikel} 
   * @param bezeichnung1 {String} 
   * @param bezeichnung2 {String} 
   * @param bezeichnung3 {String} 
   * @param bezeichnung4 {String} 
   * @param bezeichnung5 {String} 
   * @param gewicht {Number} 
   * @param seriennummer {String} 
   * @param konfigurationsID {String} 
   * @param produktNr {String} 
   * @param installationstermin {String} 
   * @param garantieende {String} 
   * @param garantiezusatz {module:model/Garantiezusatz} 
   * @param auftrag {String} 
   * @param vertragstyp {module:model/Vertragstyp} 
   * @param herstellervertrag {String} 
   * @param suchfeld {String} 
   * @param artikelklasse {module:model/Artikelklasse} 
   * @param artikelgruppe {module:model/Artikelgruppe} 
   * @param artikeluntergruppe {String} 
   * @param menge {Number} 
   * @param anlage {String} 
   * @param inhaber {String} 
   * @param istLagerinstallation {Boolean} 
   * @param geloescht {Boolean} 
   * @param global {Boolean} 
   * @param standard {Boolean} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(installationNr, standort, betreueradresse, externadresse, prioritaet, artikel, bezeichnung1, bezeichnung2, bezeichnung3, bezeichnung4, bezeichnung5, gewicht, seriennummer, konfigurationsID, produktNr, installationstermin, garantieende, garantiezusatz, auftrag, vertragstyp, herstellervertrag, suchfeld, artikelklasse, artikelgruppe, artikeluntergruppe, menge, anlage, inhaber, istLagerinstallation, geloescht, global, standard, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['InstallationNr'] = installationNr;
    _this['Standort'] = standort;
    _this['Betreueradresse'] = betreueradresse;
    _this['Externadresse'] = externadresse;
    _this['Prioritaet'] = prioritaet;
    _this['Artikel'] = artikel;
    _this['Bezeichnung1'] = bezeichnung1;
    _this['Bezeichnung2'] = bezeichnung2;
    _this['Bezeichnung3'] = bezeichnung3;
    _this['Bezeichnung4'] = bezeichnung4;
    _this['Bezeichnung5'] = bezeichnung5;
    _this['Gewicht'] = gewicht;
    _this['Seriennummer'] = seriennummer;
    _this['KonfigurationsID'] = konfigurationsID;
    _this['ProduktNr'] = produktNr;
    _this['Installationstermin'] = installationstermin;
    _this['Garantieende'] = garantieende;
    _this['Garantiezusatz'] = garantiezusatz;
    _this['Auftrag'] = auftrag;
    _this['Vertragstyp'] = vertragstyp;
    _this['Herstellervertrag'] = herstellervertrag;
    _this['Suchfeld'] = suchfeld;
    _this['Artikelklasse'] = artikelklasse;
    _this['Artikelgruppe'] = artikelgruppe;
    _this['Artikeluntergruppe'] = artikeluntergruppe;
    _this['Menge'] = menge;
    _this['Anlage'] = anlage;
    _this['Inhaber'] = inhaber;
    _this['IstLagerinstallation'] = istLagerinstallation;
    _this['Geloescht'] = geloescht;
    _this['Global'] = global;
    _this['Standard'] = standard;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>BASInstallationInstallationNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BASInstallationInstallationNr} obj Optional instance to populate.
   * @return {module:model/BASInstallationInstallationNr} The populated <code>BASInstallationInstallationNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('InstallationNr')) {
        obj['InstallationNr'] = ApiClient.convertToType(data['InstallationNr'], 'Number');
      }
      if (data.hasOwnProperty('Standort')) {
        obj['Standort'] = Standort.constructFromObject(data['Standort']);
      }
      if (data.hasOwnProperty('Betreueradresse')) {
        obj['Betreueradresse'] = ApiClient.convertToType(data['Betreueradresse'], 'String');
      }
      if (data.hasOwnProperty('Externadresse')) {
        obj['Externadresse'] = ApiClient.convertToType(data['Externadresse'], 'String');
      }
      if (data.hasOwnProperty('Prioritaet')) {
        obj['Prioritaet'] = Prioritaet.constructFromObject(data['Prioritaet']);
      }
      if (data.hasOwnProperty('Artikel')) {
        obj['Artikel'] = Artikel.constructFromObject(data['Artikel']);
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
        obj['Garantiezusatz'] = Garantiezusatz.constructFromObject(data['Garantiezusatz']);
      }
      if (data.hasOwnProperty('Auftrag')) {
        obj['Auftrag'] = ApiClient.convertToType(data['Auftrag'], 'String');
      }
      if (data.hasOwnProperty('Vertragstyp')) {
        obj['Vertragstyp'] = Vertragstyp.constructFromObject(data['Vertragstyp']);
      }
      if (data.hasOwnProperty('Herstellervertrag')) {
        obj['Herstellervertrag'] = ApiClient.convertToType(data['Herstellervertrag'], 'String');
      }
      if (data.hasOwnProperty('Suchfeld')) {
        obj['Suchfeld'] = ApiClient.convertToType(data['Suchfeld'], 'String');
      }
      if (data.hasOwnProperty('Artikelklasse')) {
        obj['Artikelklasse'] = Artikelklasse.constructFromObject(data['Artikelklasse']);
      }
      if (data.hasOwnProperty('Artikelgruppe')) {
        obj['Artikelgruppe'] = Artikelgruppe.constructFromObject(data['Artikelgruppe']);
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
   * @member {module:model/Standort} Standort
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
   * @member {module:model/Prioritaet} Prioritaet
   */
  exports.prototype['Prioritaet'] = undefined;
  /**
   * @member {module:model/Artikel} Artikel
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
   * @member {module:model/Garantiezusatz} Garantiezusatz
   */
  exports.prototype['Garantiezusatz'] = undefined;
  /**
   * @member {String} Auftrag
   */
  exports.prototype['Auftrag'] = undefined;
  /**
   * @member {module:model/Vertragstyp} Vertragstyp
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
   * @member {module:model/Artikelklasse} Artikelklasse
   */
  exports.prototype['Artikelklasse'] = undefined;
  /**
   * @member {module:model/Artikelgruppe} Artikelgruppe
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

