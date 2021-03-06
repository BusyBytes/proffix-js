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
    define(['ApiClient', 'model/Auftrag', 'model/Mitarbeiter', 'model/Positionsart1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Auftrag'), require('./Mitarbeiter'), require('./Positionsart1'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.STURapportRapportNr = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Auftrag, root.ProffixRestApiRequestSammlung.Mitarbeiter, root.ProffixRestApiRequestSammlung.Positionsart1);
  }
}(this, function(ApiClient, Auftrag, Mitarbeiter, Positionsart1) {
  'use strict';




  /**
   * The STURapportRapportNr model module.
   * @module model/STURapportRapportNr
   * @version 1.0
   */

  /**
   * Constructs a new <code>STURapportRapportNr</code>.
   * @alias module:model/STURapportRapportNr
   * @class
   * @param rapportNr {Number} 
   * @param mitarbeiter {module:model/Mitarbeiter} 
   * @param auftrag {module:model/Auftrag} 
   * @param projekt {String} 
   * @param artikel {String} 
   * @param bezeichnung1 {String} 
   * @param bezeichnung2 {String} 
   * @param bezeichnung3 {String} 
   * @param bezeichnung4 {String} 
   * @param bezeichnung5 {String} 
   * @param einheitLager {String} 
   * @param einheitRechnung {String} 
   * @param menge {Number} 
   * @param mengeVerr {Number} 
   * @param dim1 {Number} 
   * @param dim2 {Number} 
   * @param dim3 {Number} 
   * @param lagerpreis {Number} 
   * @param datum {String} 
   * @param positionsart {module:model/Positionsart1} 
   * @param kaWo {String} 
   * @param startZeit {String} 
   * @param endZeit {String} 
   * @param stunden {Number} 
   * @param stundenVerr {Number} 
   * @param pause {Number} 
   * @param bemerkungen {String} 
   * @param bemerkungenRTF {String} 
   * @param selbstkosten {Number} 
   * @param ueberzeit {Number} 
   * @param stdPreis {Number} 
   * @param km {Number} 
   * @param spesen {String} 
   * @param periodeLohn {String} 
   * @param preisFW {Number} 
   * @param totalFW {Number} 
   * @param steuerFW {Number} 
   * @param rabatt {Number} 
   * @param rabattFW {Number} 
   * @param waehrung {String} 
   * @param kurs {Number} 
   * @param ertragskonto {String} 
   * @param vertreter {String} 
   * @param kostenart {String} 
   * @param kostenstelle {String} 
   * @param empfaengerAdr {String} 
   * @param lagerbewegungen {String} 
   * @param verrechnen {Boolean} 
   * @param steuercode {String} 
   * @param verrechnet {Boolean} 
   * @param gesperrt {Boolean} 
   * @param serviceauftrag {String} 
   * @param serviceauftragspositionNr {Number} 
   * @param teilleistung {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(rapportNr, mitarbeiter, auftrag, projekt, artikel, bezeichnung1, bezeichnung2, bezeichnung3, bezeichnung4, bezeichnung5, einheitLager, einheitRechnung, menge, mengeVerr, dim1, dim2, dim3, lagerpreis, datum, positionsart, kaWo, startZeit, endZeit, stunden, stundenVerr, pause, bemerkungen, bemerkungenRTF, selbstkosten, ueberzeit, stdPreis, km, spesen, periodeLohn, preisFW, totalFW, steuerFW, rabatt, rabattFW, waehrung, kurs, ertragskonto, vertreter, kostenart, kostenstelle, empfaengerAdr, lagerbewegungen, verrechnen, steuercode, verrechnet, gesperrt, serviceauftrag, serviceauftragspositionNr, teilleistung, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['RapportNr'] = rapportNr;
    _this['Mitarbeiter'] = mitarbeiter;
    _this['Auftrag'] = auftrag;
    _this['Projekt'] = projekt;
    _this['Artikel'] = artikel;
    _this['Bezeichnung1'] = bezeichnung1;
    _this['Bezeichnung2'] = bezeichnung2;
    _this['Bezeichnung3'] = bezeichnung3;
    _this['Bezeichnung4'] = bezeichnung4;
    _this['Bezeichnung5'] = bezeichnung5;
    _this['EinheitLager'] = einheitLager;
    _this['EinheitRechnung'] = einheitRechnung;
    _this['Menge'] = menge;
    _this['MengeVerr'] = mengeVerr;
    _this['Dim1'] = dim1;
    _this['Dim2'] = dim2;
    _this['Dim3'] = dim3;
    _this['Lagerpreis'] = lagerpreis;
    _this['Datum'] = datum;
    _this['Positionsart'] = positionsart;
    _this['KaWo'] = kaWo;
    _this['StartZeit'] = startZeit;
    _this['EndZeit'] = endZeit;
    _this['Stunden'] = stunden;
    _this['StundenVerr'] = stundenVerr;
    _this['Pause'] = pause;
    _this['Bemerkungen'] = bemerkungen;
    _this['BemerkungenRTF'] = bemerkungenRTF;
    _this['Selbstkosten'] = selbstkosten;
    _this['Ueberzeit'] = ueberzeit;
    _this['StdPreis'] = stdPreis;
    _this['Km'] = km;
    _this['Spesen'] = spesen;
    _this['PeriodeLohn'] = periodeLohn;
    _this['PreisFW'] = preisFW;
    _this['TotalFW'] = totalFW;
    _this['SteuerFW'] = steuerFW;
    _this['Rabatt'] = rabatt;
    _this['RabattFW'] = rabattFW;
    _this['Waehrung'] = waehrung;
    _this['Kurs'] = kurs;
    _this['Ertragskonto'] = ertragskonto;
    _this['Vertreter'] = vertreter;
    _this['Kostenart'] = kostenart;
    _this['Kostenstelle'] = kostenstelle;
    _this['EmpfaengerAdr'] = empfaengerAdr;
    _this['Lagerbewegungen'] = lagerbewegungen;
    _this['Verrechnen'] = verrechnen;
    _this['Steuercode'] = steuercode;
    _this['Verrechnet'] = verrechnet;
    _this['Gesperrt'] = gesperrt;
    _this['Serviceauftrag'] = serviceauftrag;
    _this['ServiceauftragspositionNr'] = serviceauftragspositionNr;
    _this['Teilleistung'] = teilleistung;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>STURapportRapportNr</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/STURapportRapportNr} obj Optional instance to populate.
   * @return {module:model/STURapportRapportNr} The populated <code>STURapportRapportNr</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('RapportNr')) {
        obj['RapportNr'] = ApiClient.convertToType(data['RapportNr'], 'Number');
      }
      if (data.hasOwnProperty('Mitarbeiter')) {
        obj['Mitarbeiter'] = Mitarbeiter.constructFromObject(data['Mitarbeiter']);
      }
      if (data.hasOwnProperty('Auftrag')) {
        obj['Auftrag'] = Auftrag.constructFromObject(data['Auftrag']);
      }
      if (data.hasOwnProperty('Projekt')) {
        obj['Projekt'] = ApiClient.convertToType(data['Projekt'], 'String');
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
      if (data.hasOwnProperty('EinheitLager')) {
        obj['EinheitLager'] = ApiClient.convertToType(data['EinheitLager'], 'String');
      }
      if (data.hasOwnProperty('EinheitRechnung')) {
        obj['EinheitRechnung'] = ApiClient.convertToType(data['EinheitRechnung'], 'String');
      }
      if (data.hasOwnProperty('Menge')) {
        obj['Menge'] = ApiClient.convertToType(data['Menge'], 'Number');
      }
      if (data.hasOwnProperty('MengeVerr')) {
        obj['MengeVerr'] = ApiClient.convertToType(data['MengeVerr'], 'Number');
      }
      if (data.hasOwnProperty('Dim1')) {
        obj['Dim1'] = ApiClient.convertToType(data['Dim1'], 'Number');
      }
      if (data.hasOwnProperty('Dim2')) {
        obj['Dim2'] = ApiClient.convertToType(data['Dim2'], 'Number');
      }
      if (data.hasOwnProperty('Dim3')) {
        obj['Dim3'] = ApiClient.convertToType(data['Dim3'], 'Number');
      }
      if (data.hasOwnProperty('Lagerpreis')) {
        obj['Lagerpreis'] = ApiClient.convertToType(data['Lagerpreis'], 'Number');
      }
      if (data.hasOwnProperty('Datum')) {
        obj['Datum'] = ApiClient.convertToType(data['Datum'], 'String');
      }
      if (data.hasOwnProperty('Positionsart')) {
        obj['Positionsart'] = Positionsart1.constructFromObject(data['Positionsart']);
      }
      if (data.hasOwnProperty('KaWo')) {
        obj['KaWo'] = ApiClient.convertToType(data['KaWo'], 'String');
      }
      if (data.hasOwnProperty('StartZeit')) {
        obj['StartZeit'] = ApiClient.convertToType(data['StartZeit'], 'String');
      }
      if (data.hasOwnProperty('EndZeit')) {
        obj['EndZeit'] = ApiClient.convertToType(data['EndZeit'], 'String');
      }
      if (data.hasOwnProperty('Stunden')) {
        obj['Stunden'] = ApiClient.convertToType(data['Stunden'], 'Number');
      }
      if (data.hasOwnProperty('StundenVerr')) {
        obj['StundenVerr'] = ApiClient.convertToType(data['StundenVerr'], 'Number');
      }
      if (data.hasOwnProperty('Pause')) {
        obj['Pause'] = ApiClient.convertToType(data['Pause'], 'Number');
      }
      if (data.hasOwnProperty('Bemerkungen')) {
        obj['Bemerkungen'] = ApiClient.convertToType(data['Bemerkungen'], 'String');
      }
      if (data.hasOwnProperty('BemerkungenRTF')) {
        obj['BemerkungenRTF'] = ApiClient.convertToType(data['BemerkungenRTF'], 'String');
      }
      if (data.hasOwnProperty('Selbstkosten')) {
        obj['Selbstkosten'] = ApiClient.convertToType(data['Selbstkosten'], 'Number');
      }
      if (data.hasOwnProperty('Ueberzeit')) {
        obj['Ueberzeit'] = ApiClient.convertToType(data['Ueberzeit'], 'Number');
      }
      if (data.hasOwnProperty('StdPreis')) {
        obj['StdPreis'] = ApiClient.convertToType(data['StdPreis'], 'Number');
      }
      if (data.hasOwnProperty('Km')) {
        obj['Km'] = ApiClient.convertToType(data['Km'], 'Number');
      }
      if (data.hasOwnProperty('Spesen')) {
        obj['Spesen'] = ApiClient.convertToType(data['Spesen'], 'String');
      }
      if (data.hasOwnProperty('PeriodeLohn')) {
        obj['PeriodeLohn'] = ApiClient.convertToType(data['PeriodeLohn'], 'String');
      }
      if (data.hasOwnProperty('PreisFW')) {
        obj['PreisFW'] = ApiClient.convertToType(data['PreisFW'], 'Number');
      }
      if (data.hasOwnProperty('TotalFW')) {
        obj['TotalFW'] = ApiClient.convertToType(data['TotalFW'], 'Number');
      }
      if (data.hasOwnProperty('SteuerFW')) {
        obj['SteuerFW'] = ApiClient.convertToType(data['SteuerFW'], 'Number');
      }
      if (data.hasOwnProperty('Rabatt')) {
        obj['Rabatt'] = ApiClient.convertToType(data['Rabatt'], 'Number');
      }
      if (data.hasOwnProperty('RabattFW')) {
        obj['RabattFW'] = ApiClient.convertToType(data['RabattFW'], 'Number');
      }
      if (data.hasOwnProperty('Waehrung')) {
        obj['Waehrung'] = ApiClient.convertToType(data['Waehrung'], 'String');
      }
      if (data.hasOwnProperty('Kurs')) {
        obj['Kurs'] = ApiClient.convertToType(data['Kurs'], 'Number');
      }
      if (data.hasOwnProperty('Ertragskonto')) {
        obj['Ertragskonto'] = ApiClient.convertToType(data['Ertragskonto'], 'String');
      }
      if (data.hasOwnProperty('Vertreter')) {
        obj['Vertreter'] = ApiClient.convertToType(data['Vertreter'], 'String');
      }
      if (data.hasOwnProperty('Kostenart')) {
        obj['Kostenart'] = ApiClient.convertToType(data['Kostenart'], 'String');
      }
      if (data.hasOwnProperty('Kostenstelle')) {
        obj['Kostenstelle'] = ApiClient.convertToType(data['Kostenstelle'], 'String');
      }
      if (data.hasOwnProperty('EmpfaengerAdr')) {
        obj['EmpfaengerAdr'] = ApiClient.convertToType(data['EmpfaengerAdr'], 'String');
      }
      if (data.hasOwnProperty('Lagerbewegungen')) {
        obj['Lagerbewegungen'] = ApiClient.convertToType(data['Lagerbewegungen'], 'String');
      }
      if (data.hasOwnProperty('Verrechnen')) {
        obj['Verrechnen'] = ApiClient.convertToType(data['Verrechnen'], 'Boolean');
      }
      if (data.hasOwnProperty('Steuercode')) {
        obj['Steuercode'] = ApiClient.convertToType(data['Steuercode'], 'String');
      }
      if (data.hasOwnProperty('Verrechnet')) {
        obj['Verrechnet'] = ApiClient.convertToType(data['Verrechnet'], 'Boolean');
      }
      if (data.hasOwnProperty('Gesperrt')) {
        obj['Gesperrt'] = ApiClient.convertToType(data['Gesperrt'], 'Boolean');
      }
      if (data.hasOwnProperty('Serviceauftrag')) {
        obj['Serviceauftrag'] = ApiClient.convertToType(data['Serviceauftrag'], 'String');
      }
      if (data.hasOwnProperty('ServiceauftragspositionNr')) {
        obj['ServiceauftragspositionNr'] = ApiClient.convertToType(data['ServiceauftragspositionNr'], 'Number');
      }
      if (data.hasOwnProperty('Teilleistung')) {
        obj['Teilleistung'] = ApiClient.convertToType(data['Teilleistung'], 'String');
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
   * @member {Number} RapportNr
   */
  exports.prototype['RapportNr'] = undefined;
  /**
   * @member {module:model/Mitarbeiter} Mitarbeiter
   */
  exports.prototype['Mitarbeiter'] = undefined;
  /**
   * @member {module:model/Auftrag} Auftrag
   */
  exports.prototype['Auftrag'] = undefined;
  /**
   * @member {String} Projekt
   */
  exports.prototype['Projekt'] = undefined;
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
   * @member {String} EinheitLager
   */
  exports.prototype['EinheitLager'] = undefined;
  /**
   * @member {String} EinheitRechnung
   */
  exports.prototype['EinheitRechnung'] = undefined;
  /**
   * @member {Number} Menge
   */
  exports.prototype['Menge'] = undefined;
  /**
   * @member {Number} MengeVerr
   */
  exports.prototype['MengeVerr'] = undefined;
  /**
   * @member {Number} Dim1
   */
  exports.prototype['Dim1'] = undefined;
  /**
   * @member {Number} Dim2
   */
  exports.prototype['Dim2'] = undefined;
  /**
   * @member {Number} Dim3
   */
  exports.prototype['Dim3'] = undefined;
  /**
   * @member {Number} Lagerpreis
   */
  exports.prototype['Lagerpreis'] = undefined;
  /**
   * @member {String} Datum
   */
  exports.prototype['Datum'] = undefined;
  /**
   * @member {module:model/Positionsart1} Positionsart
   */
  exports.prototype['Positionsart'] = undefined;
  /**
   * @member {String} KaWo
   */
  exports.prototype['KaWo'] = undefined;
  /**
   * @member {String} StartZeit
   */
  exports.prototype['StartZeit'] = undefined;
  /**
   * @member {String} EndZeit
   */
  exports.prototype['EndZeit'] = undefined;
  /**
   * @member {Number} Stunden
   */
  exports.prototype['Stunden'] = undefined;
  /**
   * @member {Number} StundenVerr
   */
  exports.prototype['StundenVerr'] = undefined;
  /**
   * @member {Number} Pause
   */
  exports.prototype['Pause'] = undefined;
  /**
   * @member {String} Bemerkungen
   */
  exports.prototype['Bemerkungen'] = undefined;
  /**
   * @member {String} BemerkungenRTF
   */
  exports.prototype['BemerkungenRTF'] = undefined;
  /**
   * @member {Number} Selbstkosten
   */
  exports.prototype['Selbstkosten'] = undefined;
  /**
   * @member {Number} Ueberzeit
   */
  exports.prototype['Ueberzeit'] = undefined;
  /**
   * @member {Number} StdPreis
   */
  exports.prototype['StdPreis'] = undefined;
  /**
   * @member {Number} Km
   */
  exports.prototype['Km'] = undefined;
  /**
   * @member {String} Spesen
   */
  exports.prototype['Spesen'] = undefined;
  /**
   * @member {String} PeriodeLohn
   */
  exports.prototype['PeriodeLohn'] = undefined;
  /**
   * @member {Number} PreisFW
   */
  exports.prototype['PreisFW'] = undefined;
  /**
   * @member {Number} TotalFW
   */
  exports.prototype['TotalFW'] = undefined;
  /**
   * @member {Number} SteuerFW
   */
  exports.prototype['SteuerFW'] = undefined;
  /**
   * @member {Number} Rabatt
   */
  exports.prototype['Rabatt'] = undefined;
  /**
   * @member {Number} RabattFW
   */
  exports.prototype['RabattFW'] = undefined;
  /**
   * @member {String} Waehrung
   */
  exports.prototype['Waehrung'] = undefined;
  /**
   * @member {Number} Kurs
   */
  exports.prototype['Kurs'] = undefined;
  /**
   * @member {String} Ertragskonto
   */
  exports.prototype['Ertragskonto'] = undefined;
  /**
   * @member {String} Vertreter
   */
  exports.prototype['Vertreter'] = undefined;
  /**
   * @member {String} Kostenart
   */
  exports.prototype['Kostenart'] = undefined;
  /**
   * @member {String} Kostenstelle
   */
  exports.prototype['Kostenstelle'] = undefined;
  /**
   * @member {String} EmpfaengerAdr
   */
  exports.prototype['EmpfaengerAdr'] = undefined;
  /**
   * @member {String} Lagerbewegungen
   */
  exports.prototype['Lagerbewegungen'] = undefined;
  /**
   * @member {Boolean} Verrechnen
   */
  exports.prototype['Verrechnen'] = undefined;
  /**
   * @member {String} Steuercode
   */
  exports.prototype['Steuercode'] = undefined;
  /**
   * @member {Boolean} Verrechnet
   */
  exports.prototype['Verrechnet'] = undefined;
  /**
   * @member {Boolean} Gesperrt
   */
  exports.prototype['Gesperrt'] = undefined;
  /**
   * @member {String} Serviceauftrag
   */
  exports.prototype['Serviceauftrag'] = undefined;
  /**
   * @member {Number} ServiceauftragspositionNr
   */
  exports.prototype['ServiceauftragspositionNr'] = undefined;
  /**
   * @member {String} Teilleistung
   */
  exports.prototype['Teilleistung'] = undefined;
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


