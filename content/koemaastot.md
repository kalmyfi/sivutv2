---
title: "Metsästysalueet"
identifier:
description: Seuran metsästysalueet, koemaastot ja rauhoitusalueet kartalla
menu: Metsästys
weight: 50
---

## Metsästysalueet kartalla

<div class="alue-intro">
  <p>Kartassa näkyvät seuran <strong>rauhoitusalueet</strong> ja muut alueet. Karttaa voi liikuttaa ja zoomata — toimii myös mobiilissa.</p>
</div>

<div class="kartta-wrapper">
  <iframe
    src="https://kartta.paikkatietoikkuna.fi/published/fi/b94acba2-b3f6-4007-8e3b-1d7b0658067d"
    class="kartta-iframe"
    allowfullscreen
    loading="lazy"
    title="Kalmy rauhoitusalueet">
  </iframe>
</div>

<p class="kartta-linkki">
  <a href="https://kartta.paikkatietoikkuna.fi/published/fi/b94acba2-b3f6-4007-8e3b-1d7b0658067d" target="_blank" rel="noopener">
    <i class="fas fa-external-link-alt"></i> Avaa kartta koko näytölle
  </a>
</p>

---

## Koemaastot

<div class="alue-intro">
  <p>Numeroituina seuran alueella käytössä olevat <strong>ajokoekoemaastot</strong>. Karttaa voi liikuttaa ja zoomata — toimii myös mobiilissa.</p>
</div>

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<div class="kartta-wrapper" style="padding-bottom: 70.6%;">
  <div id="koemaastot-map" class="kartta-iframe" style="background:#fff;"></div>
</div>

<p class="kartta-linkki">
  <a href="/sivutv2/muut/aluekartta.pdf" target="_blank" rel="noopener">
    <i class="fas fa-file-pdf"></i> Lataa kartta PDF
  </a>
</p>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    var w = 9933, h = 7016;
    var bounds = [[0, 0], [h, w]];
    var map = L.map('koemaastot-map', {
      crs: L.CRS.Simple,
      minZoom: -4,
      maxZoom: 2,
      zoomSnap: 0.5,
      maxBounds: bounds,
      maxBoundsViscosity: 1.0
    });
    L.imageOverlay('/sivutv2/images/koemaastot.jpg', bounds).addTo(map);
    map.fitBounds(bounds, { padding: [0, 0] });
  });
</script>

---

## Ajokokeet 24/25

<div class="kausi-table-wrap">
<table>
  <thead>
    <tr>
      <th>Päivämäärä</th>
      <th>Koe / Tapahtuma</th>
      <th>Vastuuhenkilö</th>
      <th>Tila</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>25.8.2024</td>
      <td>LINT — Haminakallion maasto</td>
      <td>Petri Siironen</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>14.9.2024</td>
      <td>Alavieskan mest</td>
      <td>Ville Roimela</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>21.9.2024</td>
      <td>HIRV</td>
      <td>Pekka Pehkonen</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>21.9.2024</td>
      <td>Poliisin ja rajan mestaruus</td>
      <td>Jari Fors</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>29.9.2024</td>
      <td>PM-koe nartut</td>
      <td>Ville Roimela</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>4.10.2024</td>
      <td>AJOK</td>
      <td>Juha Manninen</td>
      <td><span class="tila-badge tila-peruttu"><i class="fas fa-times"></i> Peruttu</span></td>
    </tr>
    <tr>
      <td>11.10.2024</td>
      <td>KV-koe HIRV</td>
      <td>Ville Roimela</td>
      <td><span class="tila-badge tila-peruttu"><i class="fas fa-times"></i> Peruttu</span></td>
    </tr>
    <tr>
      <td>23.10.2024</td>
      <td>—</td>
      <td>Jari Fors</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>23.11.2024</td>
      <td>DREAJ PM-koe</td>
      <td>Tuomas Laakko</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>6.12.2024</td>
      <td>AJOK</td>
      <td>Juha Manninen</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>27.12.2024</td>
      <td>AJOK</td>
      <td>Juha Manninen</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
    <tr>
      <td>28.2.2025</td>
      <td>KV-erämiesjaot AJOK</td>
      <td>—</td>
      <td><span class="tila-badge tila-ok"><i class="fas fa-check"></i> Pidetty</span></td>
    </tr>
  </tbody>
</table>
</div>

<p class="koemaasto-huom"><i class="fas fa-info-circle"></i> Koemaasto ilmoitetaan viikkoa ennen koetta.</p>
