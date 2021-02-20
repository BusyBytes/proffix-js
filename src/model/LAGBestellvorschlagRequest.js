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
    define(['ApiClient', 'model/Artikel', 'model/Lagerort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Artikel'), require('./Lagerort'));
  } else {
    // Browser globals (root is window)
    if (!root.ProffixRestApiRequestSammlung) {
      root.ProffixRestApiRequestSammlung = {};
    }
    root.ProffixRestApiRequestSammlung.LAGBestellvorschlagRequest = factory(root.ProffixRestApiRequestSammlung.ApiClient, root.ProffixRestApiRequestSammlung.Artikel, root.ProffixRestApiRequestSammlung.Lagerort);
  }
}(this, function(ApiClient, Artikel, Lagerort) {
  'use strict';




  /**
   * The LAGBestellvorschlagRequest model module.
   * @module model/LAGBestellvorschlagRequest
   * @version 1.0
   */

  /**
   * Constructs a new <code>LAGBestellvorschlagRequest</code>.
   * @alias module:model/LAGBestellvorschlagRequest
   * @class
   * @param artikel {module:model/Artikel} 
   * @param bestellpunkt {Number} 
   * @param bestellrhythmus {Number} 
   * @param bestellvorschlag {Number} 
   * @param artikelgruppe {String} 
   * @param artikelklasse {String} 
   * @param lagerort {module:model/Lagerort} 
   * @param lieferadresse {String} 
   * @param lieferantadresse {String} 
   * @param maximum {Number} 
   * @param mindestbestellmenge {Number} 
   * @param minimum {Number} 
   * @param optimalbestellmenge {Number} 
   * @param sicherheitstage {Number} 
   * @param wiederbeschaffung {Number} 
   */
  var exports = function(artikel, bestellpunkt, bestellrhythmus, bestellvorschlag, artikelgruppe, artikelklasse, lagerort, lieferadresse, lieferantadresse, maximum, mindestbestellmenge, minimum, optimalbestellmenge, sicherheitstage, wiederbeschaffung) {
    var _this = this;

    _this['Artikel'] = artikel;
    _this['Bestellpunkt'] = bestellpunkt;
    _this['Bestellrhythmus'] = bestellrhythmus;
    _this['Bestellvorschlag'] = bestellvorschlag;
    _this['Artikelgruppe'] = artikelgruppe;
    _this['Artikelklasse'] = artikelklasse;
    _this['Lagerort'] = lagerort;
    _this['Lieferadresse'] = lieferadresse;
    _this['Lieferantadresse'] = lieferantadresse;
    _this['Maximum'] = maximum;
    _this['Mindestbestellmenge'] = mindestbestellmenge;
    _this['Minimum'] = minimum;
    _this['Optimalbestellmenge'] = optimalbestellmenge;
    _this['Sicherheitstage'] = sicherheitstage;
    _this['Wiederbeschaffung'] = wiederbeschaffung;
  };

  /**
   * Constructs a <code>LAGBestellvorschlagRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LAGBestellvorschlagRequest} obj Optional instance to populate.
   * @return {module:model/LAGBestellvorschlagRequest} The populated <code>LAGBestellvorschlagRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Artikel')) {
        obj['Artikel'] = Artikel.constructFromObject(data['Artikel']);
      }
      if (data.hasOwnProperty('Bestellpunkt')) {
        obj['Bestellpunkt'] = ApiClient.convertToType(data['Bestellpunkt'], 'Number');
      }
      if (data.hasOwnProperty('Bestellrhythmus')) {
        obj['Bestellrhythmus'] = ApiClient.convertToType(data['Bestellrhythmus'], 'Number');
      }
      if (data.hasOwnProperty('Bestellvorschlag')) {
        obj['Bestellvorschlag'] = ApiClient.convertToType(data['Bestellvorschlag'], 'Number');
      }
      if (data.hasOwnProperty('Artikelgruppe')) {
        obj['Artikelgruppe'] = ApiClient.convertToType(data['Artikelgruppe'], 'String');
      }
      if (data.hasOwnProperty('Artikelklasse')) {
        obj['Artikelklasse'] = ApiClient.convertToType(data['Artikelklasse'], 'String');
      }
      if (data.hasOwnProperty('Lagerort')) {
        obj['Lagerort'] = Lagerort.constructFromObject(data['Lagerort']);
      }
      if (data.hasOwnProperty('Lieferadresse')) {
        obj['Lieferadresse'] = ApiClient.convertToType(data['Lieferadresse'], 'String');
      }
      if (data.hasOwnProperty('Lieferantadresse')) {
        obj['Lieferantadresse'] = ApiClient.convertToType(data['Lieferantadresse'], 'String');
      }
      if (data.hasOwnProperty('Maximum')) {
        obj['Maximum'] = ApiClient.convertToType(data['Maximum'], 'Number');
      }
      if (data.hasOwnProperty('Mindestbestellmenge')) {
        obj['Mindestbestellmenge'] = ApiClient.convertToType(data['Mindestbestellmenge'], 'Number');
      }
      if (data.hasOwnProperty('Minimum')) {
        obj['Minimum'] = ApiClient.convertToType(data['Minimum'], 'Number');
      }
      if (data.hasOwnProperty('Optimalbestellmenge')) {
        obj['Optimalbestellmenge'] = ApiClient.convertToType(data['Optimalbestellmenge'], 'Number');
      }
      if (data.hasOwnProperty('Sicherheitstage')) {
        obj['Sicherheitstage'] = ApiClient.convertToType(data['Sicherheitstage'], 'Number');
      }
      if (data.hasOwnProperty('Wiederbeschaffung')) {
        obj['Wiederbeschaffung'] = ApiClient.convertToType(data['Wiederbeschaffung'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Artikel} Artikel
   */
  exports.prototype['Artikel'] = undefined;
  /**
   * @member {Number} Bestellpunkt
   */
  exports.prototype['Bestellpunkt'] = undefined;
  /**
   * @member {Number} Bestellrhythmus
   */
  exports.prototype['Bestellrhythmus'] = undefined;
  /**
   * @member {Number} Bestellvorschlag
   */
  exports.prototype['Bestellvorschlag'] = undefined;
  /**
   * @member {String} Artikelgruppe
   */
  exports.prototype['Artikelgruppe'] = undefined;
  /**
   * @member {String} Artikelklasse
   */
  exports.prototype['Artikelklasse'] = undefined;
  /**
   * @member {module:model/Lagerort} Lagerort
   */
  exports.prototype['Lagerort'] = undefined;
  /**
   * @member {String} Lieferadresse
   */
  exports.prototype['Lieferadresse'] = undefined;
  /**
   * @member {String} Lieferantadresse
   */
  exports.prototype['Lieferantadresse'] = undefined;
  /**
   * @member {Number} Maximum
   */
  exports.prototype['Maximum'] = undefined;
  /**
   * @member {Number} Mindestbestellmenge
   */
  exports.prototype['Mindestbestellmenge'] = undefined;
  /**
   * @member {Number} Minimum
   */
  exports.prototype['Minimum'] = undefined;
  /**
   * @member {Number} Optimalbestellmenge
   */
  exports.prototype['Optimalbestellmenge'] = undefined;
  /**
   * @member {Number} Sicherheitstage
   */
  exports.prototype['Sicherheitstage'] = undefined;
  /**
   * @member {Number} Wiederbeschaffung
   */
  exports.prototype['Wiederbeschaffung'] = undefined;



  return exports;
}));

