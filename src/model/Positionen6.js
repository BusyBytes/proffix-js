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
    define(['ApiClient', 'model/Artikel', 'model/Bestelltyp', 'model/EinheitLager', 'model/EinheitRechnung', 'model/Sprache', 'model/Waehrung'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Artikel'), require('./Bestelltyp'), require('./EinheitLager'), require('./EinheitRechnung'), require('./Sprache'), require('./Waehrung'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.Positionen6 = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Artikel, root.ProffixRestApiRequestSammlung.Bestelltyp, root.ProffixRestApiRequestSammlung.EinheitLager, root.ProffixRestApiRequestSammlung.EinheitRechnung, root.ProffixRestApiRequestSammlung.Sprache, root.ProffixRestApiRequestSammlung.Waehrung);
  }
}(this, function(ApiClient, Artikel, Bestelltyp, EinheitLager, EinheitRechnung, Sprache, Waehrung) {
  'use strict';




  /**
   * The Positionen6 model module.
   * @module model/Positionen6
   * @version 1.0
   */

  /**
   * Constructs a new <code>Positionen6</code>.
   * @alias module:model/Positionen6
   * @class
   * @param bestellpositionNr {Number} 
   * @param positionNr {Number} 
   * @param artikel {module:model/Artikel} 
   * @param artikelLieferant {String} 
   * @param auftrag {String} 
   * @param menge {Number} 
   * @param bestelltyp {module:model/Bestelltyp} 
   * @param bezeichnung1 {String} 
   * @param bezeichnung2 {String} 
   * @param bezeichnung3 {String} 
   * @param bezeichnung4 {String} 
   * @param bezeichnung5 {String} 
   * @param dim2 {Number} 
   * @param dokument {String} 
   * @param einheitLager {module:model/EinheitLager} 
   * @param einheitRechnung {module:model/EinheitRechnung} 
   * @param etikettenDruckmenge {Number} 
   * @param mengeGeliefert {Number} 
   * @param gewicht {Number} 
   * @param gtinStufe {String} 
   * @param kurs {Number} 
   * @param dim1 {Number} 
   * @param mengeVerr {Number} 
   * @param notizenExtern {String} 
   * @param notizenExternRTF {String} 
   * @param notizenIntern {String} 
   * @param notizenInternRTF {String} 
   * @param positionEnde {Boolean} 
   * @param positionstyp {Number} 
   * @param preisdefinition {String} 
   * @param preisFW {Number} 
   * @param preisSW {Number} 
   * @param rabatt1 {Number} 
   * @param rabatt2 {Number} 
   * @param restErledigt {Boolean} 
   * @param rueckstandsNr {Number} 
   * @param vertragsanzahl {Number} 
   * @param rahmenvertrag {String} 
   * @param rahmenvertragPositionNr {Number} 
   * @param sprache {module:model/Sprache} 
   * @param stuecklistenkopf {String} 
   * @param tara {Number} 
   * @param termin {String} 
   * @param terminBestaetigt {String} 
   * @param terminWoche {String} 
   * @param dim3 {Number} 
   * @param totalFW {Number} 
   * @param totalSW {Number} 
   * @param verhaeltnis {Number} 
   * @param verpackungen {Number} 
   * @param waehrung {module:model/Waehrung} 
   * @param wareneingangslisteLieferung {Number} 
   * @param wareneingangsliste {String} 
   * @param wareneingangslisteRestErledigt {Boolean} 
   * @param terminWocheBestaetigt {String} 
   * @param lagerbewegungen {String} 
   * @param erstelltAm {String} 
   * @param erstelltVon {String} 
   * @param geaendertAm {String} 
   * @param geaendertVon {String} 
   * @param zusatzfelder {Object} 
   */
  var exports = function(bestellpositionNr, positionNr, artikel, artikelLieferant, auftrag, menge, bestelltyp, bezeichnung1, bezeichnung2, bezeichnung3, bezeichnung4, bezeichnung5, dim2, dokument, einheitLager, einheitRechnung, etikettenDruckmenge, mengeGeliefert, gewicht, gtinStufe, kurs, dim1, mengeVerr, notizenExtern, notizenExternRTF, notizenIntern, notizenInternRTF, positionEnde, positionstyp, preisdefinition, preisFW, preisSW, rabatt1, rabatt2, restErledigt, rueckstandsNr, vertragsanzahl, rahmenvertrag, rahmenvertragPositionNr, sprache, stuecklistenkopf, tara, termin, terminBestaetigt, terminWoche, dim3, totalFW, totalSW, verhaeltnis, verpackungen, waehrung, wareneingangslisteLieferung, wareneingangsliste, wareneingangslisteRestErledigt, terminWocheBestaetigt, lagerbewegungen, erstelltAm, erstelltVon, geaendertAm, geaendertVon, zusatzfelder) {
    var _this = this;

    _this['BestellpositionNr'] = bestellpositionNr;
    _this['PositionNr'] = positionNr;
    _this['Artikel'] = artikel;
    _this['ArtikelLieferant'] = artikelLieferant;
    _this['Auftrag'] = auftrag;
    _this['Menge'] = menge;
    _this['Bestelltyp'] = bestelltyp;
    _this['Bezeichnung1'] = bezeichnung1;
    _this['Bezeichnung2'] = bezeichnung2;
    _this['Bezeichnung3'] = bezeichnung3;
    _this['Bezeichnung4'] = bezeichnung4;
    _this['Bezeichnung5'] = bezeichnung5;
    _this['Dim2'] = dim2;
    _this['Dokument'] = dokument;
    _this['EinheitLager'] = einheitLager;
    _this['EinheitRechnung'] = einheitRechnung;
    _this['EtikettenDruckmenge'] = etikettenDruckmenge;
    _this['MengeGeliefert'] = mengeGeliefert;
    _this['Gewicht'] = gewicht;
    _this['GtinStufe'] = gtinStufe;
    _this['Kurs'] = kurs;
    _this['Dim1'] = dim1;
    _this['MengeVerr'] = mengeVerr;
    _this['NotizenExtern'] = notizenExtern;
    _this['NotizenExternRTF'] = notizenExternRTF;
    _this['NotizenIntern'] = notizenIntern;
    _this['NotizenInternRTF'] = notizenInternRTF;
    _this['PositionEnde'] = positionEnde;
    _this['Positionstyp'] = positionstyp;
    _this['Preisdefinition'] = preisdefinition;
    _this['PreisFW'] = preisFW;
    _this['PreisSW'] = preisSW;
    _this['Rabatt1'] = rabatt1;
    _this['Rabatt2'] = rabatt2;
    _this['RestErledigt'] = restErledigt;
    _this['RueckstandsNr'] = rueckstandsNr;
    _this['Vertragsanzahl'] = vertragsanzahl;
    _this['Rahmenvertrag'] = rahmenvertrag;
    _this['RahmenvertragPositionNr'] = rahmenvertragPositionNr;
    _this['Sprache'] = sprache;
    _this['Stuecklistenkopf'] = stuecklistenkopf;
    _this['Tara'] = tara;
    _this['Termin'] = termin;
    _this['TerminBestaetigt'] = terminBestaetigt;
    _this['TerminWoche'] = terminWoche;
    _this['Dim3'] = dim3;
    _this['TotalFW'] = totalFW;
    _this['TotalSW'] = totalSW;
    _this['Verhaeltnis'] = verhaeltnis;
    _this['Verpackungen'] = verpackungen;
    _this['Waehrung'] = waehrung;
    _this['WareneingangslisteLieferung'] = wareneingangslisteLieferung;
    _this['Wareneingangsliste'] = wareneingangsliste;
    _this['WareneingangslisteRestErledigt'] = wareneingangslisteRestErledigt;
    _this['TerminWocheBestaetigt'] = terminWocheBestaetigt;
    _this['Lagerbewegungen'] = lagerbewegungen;
    _this['ErstelltAm'] = erstelltAm;
    _this['ErstelltVon'] = erstelltVon;
    _this['GeaendertAm'] = geaendertAm;
    _this['GeaendertVon'] = geaendertVon;
    _this['Zusatzfelder'] = zusatzfelder;
  };

  /**
   * Constructs a <code>Positionen6</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Positionen6} obj Optional instance to populate.
   * @return {module:model/Positionen6} The populated <code>Positionen6</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BestellpositionNr')) {
        obj['BestellpositionNr'] = ApiClient.convertToType(data['BestellpositionNr'], 'Number');
      }
      if (data.hasOwnProperty('PositionNr')) {
        obj['PositionNr'] = ApiClient.convertToType(data['PositionNr'], 'Number');
      }
      if (data.hasOwnProperty('Artikel')) {
        obj['Artikel'] = Artikel.constructFromObject(data['Artikel']);
      }
      if (data.hasOwnProperty('ArtikelLieferant')) {
        obj['ArtikelLieferant'] = ApiClient.convertToType(data['ArtikelLieferant'], 'String');
      }
      if (data.hasOwnProperty('Auftrag')) {
        obj['Auftrag'] = ApiClient.convertToType(data['Auftrag'], 'String');
      }
      if (data.hasOwnProperty('Menge')) {
        obj['Menge'] = ApiClient.convertToType(data['Menge'], 'Number');
      }
      if (data.hasOwnProperty('Bestelltyp')) {
        obj['Bestelltyp'] = Bestelltyp.constructFromObject(data['Bestelltyp']);
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
      if (data.hasOwnProperty('Dim2')) {
        obj['Dim2'] = ApiClient.convertToType(data['Dim2'], 'Number');
      }
      if (data.hasOwnProperty('Dokument')) {
        obj['Dokument'] = ApiClient.convertToType(data['Dokument'], 'String');
      }
      if (data.hasOwnProperty('EinheitLager')) {
        obj['EinheitLager'] = EinheitLager.constructFromObject(data['EinheitLager']);
      }
      if (data.hasOwnProperty('EinheitRechnung')) {
        obj['EinheitRechnung'] = EinheitRechnung.constructFromObject(data['EinheitRechnung']);
      }
      if (data.hasOwnProperty('EtikettenDruckmenge')) {
        obj['EtikettenDruckmenge'] = ApiClient.convertToType(data['EtikettenDruckmenge'], 'Number');
      }
      if (data.hasOwnProperty('MengeGeliefert')) {
        obj['MengeGeliefert'] = ApiClient.convertToType(data['MengeGeliefert'], 'Number');
      }
      if (data.hasOwnProperty('Gewicht')) {
        obj['Gewicht'] = ApiClient.convertToType(data['Gewicht'], 'Number');
      }
      if (data.hasOwnProperty('GtinStufe')) {
        obj['GtinStufe'] = ApiClient.convertToType(data['GtinStufe'], 'String');
      }
      if (data.hasOwnProperty('Kurs')) {
        obj['Kurs'] = ApiClient.convertToType(data['Kurs'], 'Number');
      }
      if (data.hasOwnProperty('Dim1')) {
        obj['Dim1'] = ApiClient.convertToType(data['Dim1'], 'Number');
      }
      if (data.hasOwnProperty('MengeVerr')) {
        obj['MengeVerr'] = ApiClient.convertToType(data['MengeVerr'], 'Number');
      }
      if (data.hasOwnProperty('NotizenExtern')) {
        obj['NotizenExtern'] = ApiClient.convertToType(data['NotizenExtern'], 'String');
      }
      if (data.hasOwnProperty('NotizenExternRTF')) {
        obj['NotizenExternRTF'] = ApiClient.convertToType(data['NotizenExternRTF'], 'String');
      }
      if (data.hasOwnProperty('NotizenIntern')) {
        obj['NotizenIntern'] = ApiClient.convertToType(data['NotizenIntern'], 'String');
      }
      if (data.hasOwnProperty('NotizenInternRTF')) {
        obj['NotizenInternRTF'] = ApiClient.convertToType(data['NotizenInternRTF'], 'String');
      }
      if (data.hasOwnProperty('PositionEnde')) {
        obj['PositionEnde'] = ApiClient.convertToType(data['PositionEnde'], 'Boolean');
      }
      if (data.hasOwnProperty('Positionstyp')) {
        obj['Positionstyp'] = ApiClient.convertToType(data['Positionstyp'], 'Number');
      }
      if (data.hasOwnProperty('Preisdefinition')) {
        obj['Preisdefinition'] = ApiClient.convertToType(data['Preisdefinition'], 'String');
      }
      if (data.hasOwnProperty('PreisFW')) {
        obj['PreisFW'] = ApiClient.convertToType(data['PreisFW'], 'Number');
      }
      if (data.hasOwnProperty('PreisSW')) {
        obj['PreisSW'] = ApiClient.convertToType(data['PreisSW'], 'Number');
      }
      if (data.hasOwnProperty('Rabatt1')) {
        obj['Rabatt1'] = ApiClient.convertToType(data['Rabatt1'], 'Number');
      }
      if (data.hasOwnProperty('Rabatt2')) {
        obj['Rabatt2'] = ApiClient.convertToType(data['Rabatt2'], 'Number');
      }
      if (data.hasOwnProperty('RestErledigt')) {
        obj['RestErledigt'] = ApiClient.convertToType(data['RestErledigt'], 'Boolean');
      }
      if (data.hasOwnProperty('RueckstandsNr')) {
        obj['RueckstandsNr'] = ApiClient.convertToType(data['RueckstandsNr'], 'Number');
      }
      if (data.hasOwnProperty('Vertragsanzahl')) {
        obj['Vertragsanzahl'] = ApiClient.convertToType(data['Vertragsanzahl'], 'Number');
      }
      if (data.hasOwnProperty('Rahmenvertrag')) {
        obj['Rahmenvertrag'] = ApiClient.convertToType(data['Rahmenvertrag'], 'String');
      }
      if (data.hasOwnProperty('RahmenvertragPositionNr')) {
        obj['RahmenvertragPositionNr'] = ApiClient.convertToType(data['RahmenvertragPositionNr'], 'Number');
      }
      if (data.hasOwnProperty('Sprache')) {
        obj['Sprache'] = Sprache.constructFromObject(data['Sprache']);
      }
      if (data.hasOwnProperty('Stuecklistenkopf')) {
        obj['Stuecklistenkopf'] = ApiClient.convertToType(data['Stuecklistenkopf'], 'String');
      }
      if (data.hasOwnProperty('Tara')) {
        obj['Tara'] = ApiClient.convertToType(data['Tara'], 'Number');
      }
      if (data.hasOwnProperty('Termin')) {
        obj['Termin'] = ApiClient.convertToType(data['Termin'], 'String');
      }
      if (data.hasOwnProperty('TerminBestaetigt')) {
        obj['TerminBestaetigt'] = ApiClient.convertToType(data['TerminBestaetigt'], 'String');
      }
      if (data.hasOwnProperty('TerminWoche')) {
        obj['TerminWoche'] = ApiClient.convertToType(data['TerminWoche'], 'String');
      }
      if (data.hasOwnProperty('Dim3')) {
        obj['Dim3'] = ApiClient.convertToType(data['Dim3'], 'Number');
      }
      if (data.hasOwnProperty('TotalFW')) {
        obj['TotalFW'] = ApiClient.convertToType(data['TotalFW'], 'Number');
      }
      if (data.hasOwnProperty('TotalSW')) {
        obj['TotalSW'] = ApiClient.convertToType(data['TotalSW'], 'Number');
      }
      if (data.hasOwnProperty('Verhaeltnis')) {
        obj['Verhaeltnis'] = ApiClient.convertToType(data['Verhaeltnis'], 'Number');
      }
      if (data.hasOwnProperty('Verpackungen')) {
        obj['Verpackungen'] = ApiClient.convertToType(data['Verpackungen'], 'Number');
      }
      if (data.hasOwnProperty('Waehrung')) {
        obj['Waehrung'] = Waehrung.constructFromObject(data['Waehrung']);
      }
      if (data.hasOwnProperty('WareneingangslisteLieferung')) {
        obj['WareneingangslisteLieferung'] = ApiClient.convertToType(data['WareneingangslisteLieferung'], 'Number');
      }
      if (data.hasOwnProperty('Wareneingangsliste')) {
        obj['Wareneingangsliste'] = ApiClient.convertToType(data['Wareneingangsliste'], 'String');
      }
      if (data.hasOwnProperty('WareneingangslisteRestErledigt')) {
        obj['WareneingangslisteRestErledigt'] = ApiClient.convertToType(data['WareneingangslisteRestErledigt'], 'Boolean');
      }
      if (data.hasOwnProperty('TerminWocheBestaetigt')) {
        obj['TerminWocheBestaetigt'] = ApiClient.convertToType(data['TerminWocheBestaetigt'], 'String');
      }
      if (data.hasOwnProperty('Lagerbewegungen')) {
        obj['Lagerbewegungen'] = ApiClient.convertToType(data['Lagerbewegungen'], 'String');
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
   * @member {Number} BestellpositionNr
   */
  exports.prototype['BestellpositionNr'] = undefined;
  /**
   * @member {Number} PositionNr
   */
  exports.prototype['PositionNr'] = undefined;
  /**
   * @member {module:model/Artikel} Artikel
   */
  exports.prototype['Artikel'] = undefined;
  /**
   * @member {String} ArtikelLieferant
   */
  exports.prototype['ArtikelLieferant'] = undefined;
  /**
   * @member {String} Auftrag
   */
  exports.prototype['Auftrag'] = undefined;
  /**
   * @member {Number} Menge
   */
  exports.prototype['Menge'] = undefined;
  /**
   * @member {module:model/Bestelltyp} Bestelltyp
   */
  exports.prototype['Bestelltyp'] = undefined;
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
   * @member {Number} Dim2
   */
  exports.prototype['Dim2'] = undefined;
  /**
   * @member {String} Dokument
   */
  exports.prototype['Dokument'] = undefined;
  /**
   * @member {module:model/EinheitLager} EinheitLager
   */
  exports.prototype['EinheitLager'] = undefined;
  /**
   * @member {module:model/EinheitRechnung} EinheitRechnung
   */
  exports.prototype['EinheitRechnung'] = undefined;
  /**
   * @member {Number} EtikettenDruckmenge
   */
  exports.prototype['EtikettenDruckmenge'] = undefined;
  /**
   * @member {Number} MengeGeliefert
   */
  exports.prototype['MengeGeliefert'] = undefined;
  /**
   * @member {Number} Gewicht
   */
  exports.prototype['Gewicht'] = undefined;
  /**
   * @member {String} GtinStufe
   */
  exports.prototype['GtinStufe'] = undefined;
  /**
   * @member {Number} Kurs
   */
  exports.prototype['Kurs'] = undefined;
  /**
   * @member {Number} Dim1
   */
  exports.prototype['Dim1'] = undefined;
  /**
   * @member {Number} MengeVerr
   */
  exports.prototype['MengeVerr'] = undefined;
  /**
   * @member {String} NotizenExtern
   */
  exports.prototype['NotizenExtern'] = undefined;
  /**
   * @member {String} NotizenExternRTF
   */
  exports.prototype['NotizenExternRTF'] = undefined;
  /**
   * @member {String} NotizenIntern
   */
  exports.prototype['NotizenIntern'] = undefined;
  /**
   * @member {String} NotizenInternRTF
   */
  exports.prototype['NotizenInternRTF'] = undefined;
  /**
   * @member {Boolean} PositionEnde
   */
  exports.prototype['PositionEnde'] = undefined;
  /**
   * @member {Number} Positionstyp
   */
  exports.prototype['Positionstyp'] = undefined;
  /**
   * @member {String} Preisdefinition
   */
  exports.prototype['Preisdefinition'] = undefined;
  /**
   * @member {Number} PreisFW
   */
  exports.prototype['PreisFW'] = undefined;
  /**
   * @member {Number} PreisSW
   */
  exports.prototype['PreisSW'] = undefined;
  /**
   * @member {Number} Rabatt1
   */
  exports.prototype['Rabatt1'] = undefined;
  /**
   * @member {Number} Rabatt2
   */
  exports.prototype['Rabatt2'] = undefined;
  /**
   * @member {Boolean} RestErledigt
   */
  exports.prototype['RestErledigt'] = undefined;
  /**
   * @member {Number} RueckstandsNr
   */
  exports.prototype['RueckstandsNr'] = undefined;
  /**
   * @member {Number} Vertragsanzahl
   */
  exports.prototype['Vertragsanzahl'] = undefined;
  /**
   * @member {String} Rahmenvertrag
   */
  exports.prototype['Rahmenvertrag'] = undefined;
  /**
   * @member {Number} RahmenvertragPositionNr
   */
  exports.prototype['RahmenvertragPositionNr'] = undefined;
  /**
   * @member {module:model/Sprache} Sprache
   */
  exports.prototype['Sprache'] = undefined;
  /**
   * @member {String} Stuecklistenkopf
   */
  exports.prototype['Stuecklistenkopf'] = undefined;
  /**
   * @member {Number} Tara
   */
  exports.prototype['Tara'] = undefined;
  /**
   * @member {String} Termin
   */
  exports.prototype['Termin'] = undefined;
  /**
   * @member {String} TerminBestaetigt
   */
  exports.prototype['TerminBestaetigt'] = undefined;
  /**
   * @member {String} TerminWoche
   */
  exports.prototype['TerminWoche'] = undefined;
  /**
   * @member {Number} Dim3
   */
  exports.prototype['Dim3'] = undefined;
  /**
   * @member {Number} TotalFW
   */
  exports.prototype['TotalFW'] = undefined;
  /**
   * @member {Number} TotalSW
   */
  exports.prototype['TotalSW'] = undefined;
  /**
   * @member {Number} Verhaeltnis
   */
  exports.prototype['Verhaeltnis'] = undefined;
  /**
   * @member {Number} Verpackungen
   */
  exports.prototype['Verpackungen'] = undefined;
  /**
   * @member {module:model/Waehrung} Waehrung
   */
  exports.prototype['Waehrung'] = undefined;
  /**
   * @member {Number} WareneingangslisteLieferung
   */
  exports.prototype['WareneingangslisteLieferung'] = undefined;
  /**
   * @member {String} Wareneingangsliste
   */
  exports.prototype['Wareneingangsliste'] = undefined;
  /**
   * @member {Boolean} WareneingangslisteRestErledigt
   */
  exports.prototype['WareneingangslisteRestErledigt'] = undefined;
  /**
   * @member {String} TerminWocheBestaetigt
   */
  exports.prototype['TerminWocheBestaetigt'] = undefined;
  /**
   * @member {String} Lagerbewegungen
   */
  exports.prototype['Lagerbewegungen'] = undefined;
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


