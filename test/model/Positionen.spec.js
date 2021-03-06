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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ProffixRestApiRequestSammlung);
  }
}(this, function(expect, ProffixRestApiRequestSammlung) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ProffixRestApiRequestSammlung.Positionen();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('Positionen', function() {
    it('should create an instance of Positionen', function() {
      // uncomment below and update the code to test Positionen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be.a(ProffixRestApiRequestSammlung.Positionen);
    });

    it('should have the property positionNr (base name: "PositionNr")', function() {
      // uncomment below and update the code to test the property positionNr
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property artikel (base name: "Artikel")', function() {
      // uncomment below and update the code to test the property artikel
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property auftrag (base name: "Auftrag")', function() {
      // uncomment below and update the code to test the property auftrag
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property serviceauftrag (base name: "Serviceauftrag")', function() {
      // uncomment below and update the code to test the property serviceauftrag
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung1 (base name: "Bezeichnung1")', function() {
      // uncomment below and update the code to test the property bezeichnung1
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung2 (base name: "Bezeichnung2")', function() {
      // uncomment below and update the code to test the property bezeichnung2
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung3 (base name: "Bezeichnung3")', function() {
      // uncomment below and update the code to test the property bezeichnung3
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung4 (base name: "Bezeichnung4")', function() {
      // uncomment below and update the code to test the property bezeichnung4
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property bezeichnung5 (base name: "Bezeichnung5")', function() {
      // uncomment below and update the code to test the property bezeichnung5
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property bild (base name: "Bild")', function() {
      // uncomment below and update the code to test the property bild
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property dim2 (base name: "Dim2")', function() {
      // uncomment below and update the code to test the property dim2
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property lagerbewegungen (base name: "Lagerbewegungen")', function() {
      // uncomment below and update the code to test the property lagerbewegungen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property eingangsstempel (base name: "Eingangsstempel")', function() {
      // uncomment below and update the code to test the property eingangsstempel
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property lagereinheit (base name: "Lagereinheit")', function() {
      // uncomment below and update the code to test the property lagereinheit
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property rechnungseinheit (base name: "Rechnungseinheit")', function() {
      // uncomment below and update the code to test the property rechnungseinheit
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property einkaufspreisFW (base name: "EinkaufspreisFW")', function() {
      // uncomment below and update the code to test the property einkaufspreisFW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property einkaufspreisSW (base name: "EinkaufspreisSW")', function() {
      // uncomment below and update the code to test the property einkaufspreisSW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property ertragskonto (base name: "Ertragskonto")', function() {
      // uncomment below and update the code to test the property ertragskonto
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property gebinde (base name: "Gebinde")', function() {
      // uncomment below and update the code to test the property gebinde
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property gewicht (base name: "Gewicht")', function() {
      // uncomment below and update the code to test the property gewicht
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property gtinStufe (base name: "GtinStufe")', function() {
      // uncomment below and update the code to test the property gtinStufe
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property gutschein (base name: "Gutschein")', function() {
      // uncomment below and update the code to test the property gutschein
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property inhalt (base name: "Inhalt")', function() {
      // uncomment below and update the code to test the property inhalt
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property istOption (base name: "IstOption")', function() {
      // uncomment below and update the code to test the property istOption
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property kundenbestellnummer (base name: "Kundenbestellnummer")', function() {
      // uncomment below and update the code to test the property kundenbestellnummer
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property kundenbestellposition (base name: "Kundenbestellposition")', function() {
      // uncomment below and update the code to test the property kundenbestellposition
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property kostenart (base name: "Kostenart")', function() {
      // uncomment below and update the code to test the property kostenart
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property kostenstelle (base name: "Kostenstelle")', function() {
      // uncomment below and update the code to test the property kostenstelle
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property dim1 (base name: "Dim1")', function() {
      // uncomment below and update the code to test the property dim1
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property lagerpreis (base name: "Lagerpreis")', function() {
      // uncomment below and update the code to test the property lagerpreis
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property lieferant (base name: "Lieferant")', function() {
      // uncomment below and update the code to test the property lieferant
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property liefertermin (base name: "Liefertermin")', function() {
      // uncomment below and update the code to test the property liefertermin
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property marge (base name: "Marge")', function() {
      // uncomment below and update the code to test the property marge
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property menge (base name: "Menge")', function() {
      // uncomment below and update the code to test the property menge
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property mengeOptional (base name: "MengeOptional")', function() {
      // uncomment below and update the code to test the property mengeOptional
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property mengeVerr (base name: "MengeVerr")', function() {
      // uncomment below and update the code to test the property mengeVerr
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property mengeVerrOptional (base name: "MengeVerrOptional")', function() {
      // uncomment below and update the code to test the property mengeVerrOptional
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property occasionsObjektVerkauf (base name: "OccasionsObjektVerkauf")', function() {
      // uncomment below and update the code to test the property occasionsObjektVerkauf
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property occasionsObjektAnkauf (base name: "OccasionsObjektAnkauf")', function() {
      // uncomment below and update the code to test the property occasionsObjektAnkauf
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property occasionsObjektSerienummer (base name: "OccasionsObjektSerienummer")', function() {
      // uncomment below and update the code to test the property occasionsObjektSerienummer
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property nichtAnzeigen (base name: "NichtAnzeigen")', function() {
      // uncomment below and update the code to test the property nichtAnzeigen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property externeNotizen (base name: "ExterneNotizen")', function() {
      // uncomment below and update the code to test the property externeNotizen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property externeNotizenRTF (base name: "ExterneNotizenRTF")', function() {
      // uncomment below and update the code to test the property externeNotizenRTF
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property interneNotizen (base name: "InterneNotizen")', function() {
      // uncomment below and update the code to test the property interneNotizen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property interneNotizenRTF (base name: "InterneNotizenRTF")', function() {
      // uncomment below and update the code to test the property interneNotizenRTF
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property optional (base name: "Optional")', function() {
      // uncomment below and update the code to test the property optional
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property positionsart (base name: "Positionsart")', function() {
      // uncomment below and update the code to test the property positionsart
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property kundeninstallationen (base name: "Kundeninstallationen")', function() {
      // uncomment below and update the code to test the property kundeninstallationen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property serviceauftragspositionNr (base name: "ServiceauftragspositionNr")', function() {
      // uncomment below and update the code to test the property serviceauftragspositionNr
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property positionstyp (base name: "Positionstyp")', function() {
      // uncomment below and update the code to test the property positionstyp
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property preisdefinition (base name: "Preisdefinition")', function() {
      // uncomment below and update the code to test the property preisdefinition
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property preisdefinitionOptional (base name: "PreisdefinitionOptional")', function() {
      // uncomment below and update the code to test the property preisdefinitionOptional
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property preisdefinitionZusatzartikel (base name: "PreisdefinitionZusatzartikel")', function() {
      // uncomment below and update the code to test the property preisdefinitionZusatzartikel
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property preisFW (base name: "PreisFW")', function() {
      // uncomment below and update the code to test the property preisFW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property preisSW (base name: "PreisSW")', function() {
      // uncomment below and update the code to test the property preisSW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property rabattSW (base name: "RabattSW")', function() {
      // uncomment below and update the code to test the property rabattSW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property rabattFW (base name: "RabattFW")', function() {
      // uncomment below and update the code to test the property rabattFW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property rapport (base name: "Rapport")', function() {
      // uncomment below and update the code to test the property rapport
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property automatischRechnenVon (base name: "AutomatischRechnenVon")', function() {
      // uncomment below and update the code to test the property automatischRechnenVon
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property rekapitulation (base name: "Rekapitulation")', function() {
      // uncomment below and update the code to test the property rekapitulation
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property rueckstandMenge (base name: "RueckstandMenge")', function() {
      // uncomment below and update the code to test the property rueckstandMenge
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property steuercode (base name: "Steuercode")', function() {
      // uncomment below and update the code to test the property steuercode
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property leistungsverwaltungstyp (base name: "Leistungsverwaltungstyp")', function() {
      // uncomment below and update the code to test the property leistungsverwaltungstyp
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property steuerFW (base name: "SteuerFW")', function() {
      // uncomment below and update the code to test the property steuerFW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property steuerSW (base name: "SteuerSW")', function() {
      // uncomment below and update the code to test the property steuerSW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property stuecklistenkopf (base name: "Stuecklistenkopf")', function() {
      // uncomment below and update the code to test the property stuecklistenkopf
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property subtotalbezeichnungen (base name: "Subtotalbezeichnungen")', function() {
      // uncomment below and update the code to test the property subtotalbezeichnungen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property dim3 (base name: "Dim3")', function() {
      // uncomment below and update the code to test the property dim3
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property totalFW (base name: "TotalFW")', function() {
      // uncomment below and update the code to test the property totalFW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property totalInklusivFW (base name: "TotalInklusivFW")', function() {
      // uncomment below and update the code to test the property totalInklusivFW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property totalInklusivSW (base name: "TotalInklusivSW")', function() {
      // uncomment below and update the code to test the property totalInklusivSW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property totalOptional (base name: "TotalOptional")', function() {
      // uncomment below and update the code to test the property totalOptional
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property totalSW (base name: "TotalSW")', function() {
      // uncomment below and update the code to test the property totalSW
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property verpackungen (base name: "Verpackungen")', function() {
      // uncomment below and update the code to test the property verpackungen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property vertreter (base name: "Vertreter")', function() {
      // uncomment below and update the code to test the property vertreter
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property zusatzartikelreferenz (base name: "Zusatzartikelreferenz")', function() {
      // uncomment below and update the code to test the property zusatzartikelreferenz
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property rechnen (base name: "Rechnen")', function() {
      // uncomment below and update the code to test the property rechnen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property gesamtrabattVerbuchungAufteilen (base name: "GesamtrabattVerbuchungAufteilen")', function() {
      // uncomment below and update the code to test the property gesamtrabattVerbuchungAufteilen
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property erstelltAm (base name: "ErstelltAm")', function() {
      // uncomment below and update the code to test the property erstelltAm
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property erstelltVon (base name: "ErstelltVon")', function() {
      // uncomment below and update the code to test the property erstelltVon
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property geaendertAm (base name: "GeaendertAm")', function() {
      // uncomment below and update the code to test the property geaendertAm
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property geaendertVon (base name: "GeaendertVon")', function() {
      // uncomment below and update the code to test the property geaendertVon
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

    it('should have the property zusatzfelder (base name: "Zusatzfelder")', function() {
      // uncomment below and update the code to test the property zusatzfelder
      //var instance = new ProffixRestApiRequestSammlung.Positionen();
      //expect(instance).to.be();
    });

  });

}));
