---
title: "Tilastot"
description: "Hirven- ja kauriinkaatotilastot vuosittain"
menu: Metsästys
weight: 82
image:
---

## Kaatomäärät vuosittain

<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>

<div class="tilasto-kaaviot">
  <div class="tilasto-kaavio-wrap">
    <canvas id="hirviChart"></canvas>
  </div>
  <div class="tilasto-kaavio-wrap">
    <canvas id="kaurisChart"></canvas>
  </div>
</div>

<script>
  const chartDefaults = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: { display: false },
      title: { display: true, font: { size: 15, weight: '600', family: 'Inter' }, color: '#2d3a29', padding: { bottom: 16 } }
    },
    scales: {
      y: { beginAtZero: true, ticks: { stepSize: 5, font: { family: 'Inter' } }, grid: { color: 'rgba(0,0,0,0.06)' } },
      x: { ticks: { font: { family: 'Inter' } }, grid: { display: false } }
    }
  };

  new Chart(document.getElementById('hirviChart'), {
    type: 'bar',
    data: {
      labels: ['2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'],
      datasets: [{
        data: [7,25,37,44,27,40,25,22,19,15,13,12,20],
        backgroundColor: 'rgba(45,58,41,0.8)',
        borderColor: 'rgba(45,58,41,1)',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: { ...chartDefaults, plugins: { ...chartDefaults.plugins, title: { ...chartDefaults.plugins.title, text: 'Hirvenkaadot (kpl)' } } }
  });

  new Chart(document.getElementById('kaurisChart'), {
    type: 'bar',
    data: {
      labels: ['2011','2012','2013','2014','2015','2016','2017','2018','2019','2020','2021','2022','2023','2024','2025'],
      datasets: [{
        data: [7,10,5,10,15,18,20,15,20,20,14,5,null,10,2],
        backgroundColor: 'rgba(74,103,65,0.8)',
        borderColor: 'rgba(74,103,65,1)',
        borderWidth: 1,
        borderRadius: 4
      }]
    },
    options: { ...chartDefaults, plugins: { ...chartDefaults.plugins, title: { ...chartDefaults.plugins.title, text: 'Kauriinkaadot (kpl)' } } }
  });
</script>

---

{{< tilastot-grid >}}

{{< tilastot-kolumni >}}
{{% kausi otsikko="Hirvenkaadot 2025" tila="paattynyt" yhteensa="20 hirveä (11 urosta, 3 naarasta, 6 vasaa)" %}}
| Päivämäärä | Paikka | Uros | Naaras | Vasa |
| :--------: | :----: | :--: | :----: | :--: |
| 4.10.2025  |        |  2   |        |  3   |
| 5.10.2025  |        |  3   |   1    |  1   |
| 11.10.2025 |        |  2   |   1    |  1   |
| 12.10.2025 |        |  1   |        |      |
| 18.10.2025 |        |  1   |   1    |      |
| 2.11.2025  |        |  1   |        |      |
| 22.11.2025 |        |  1   |        |  1   |
{{% /kausi %}}
{{< /tilastot-kolumni >}}

{{< tilastot-kolumni >}}
{{% kausi otsikko="Kauriinkaadot 25/26" tila="paattynyt" yhteensa="2 kaurista (1 uros, 1 naaras) — pyynti keskeytetty 13.10.2025" %}}
| Päivämäärä |  Paikka  | Uros | Naaras | Vasa |
| :--------: | :------: | :--: | :----: | :--: |
| 28.9.2025  |  Nuttura |  1   |   1    |      |
{{% /kausi %}}
{{< /tilastot-kolumni >}}

{{< /tilastot-grid >}}

---

## Arkisto

{{< tilastot-grid >}}

{{< tilastot-kolumni >}}
<h3>Hirvenkaadot</h3>

{{< pdf-vuosi "2024" >}}
{{< pdf "Hirvenkaadot 2024" "/sivutv2/tilastot/hirvenkaadot2024.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2023" >}}
{{< pdf "Hirvenkaadot 2023" "/sivutv2/tilastot/hirvenkaadot2023.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2022" >}}
{{< pdf "Hirvenkaadot 2022" "/sivutv2/tilastot/hirvenkaadot2022.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2021" >}}
{{< pdf "Hirvenkaadot 2021" "/sivutv2/tilastot/hirvenkaadot2021.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2020" >}}
{{< pdf "Hirvenkaadot 2020" "/sivutv2/tilastot/hirvenkaadot2020.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2019" >}}
{{< pdf "Hirvenkaadot 2019" "/sivutv2/tilastot/hirvenkaadot2019.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2018" >}}
{{< pdf "Hirvenkaadot 2018" "/sivutv2/tilastot/hirvenkaadot2018.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2017" >}}
{{< pdf "Hirvenkaadot 2017" "/sivutv2/tilastot/hirvenkaadot2017.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2016" >}}
{{< pdf "Hirvenkaadot 2016" "/sivutv2/tilastot/hirvenkaadot2016.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2015" >}}
{{< pdf "Hirvenkaadot 2015" "/sivutv2/tilastot/hirvenkaadot2015.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2014" >}}
{{< pdf "Hirvenkaadot 2014" "/sivutv2/tilastot/hirvenkaadot2014.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2013" >}}
{{< pdf "Hirvenkaadot 2013" "/sivutv2/tilastot/hirvenkaadot2013.pdf" >}}
{{< /pdf-vuosi >}}

{{< /tilastot-kolumni >}}

{{< tilastot-kolumni >}}
<h3>Kauriinkaadot</h3>

{{< pdf-vuosi "2024" >}}
{{< pdf "Kauriinkaadot 2024" "/sivutv2/tilastot/kauriinkaadot2024.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2022" >}}
{{< pdf "Kauriinkaadot 2022" "/sivutv2/tilastot/kauriinkaadot2022.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2021" >}}
{{< pdf "Kauriinkaadot 2021" "/sivutv2/tilastot/kauriinkaadot2021.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2020" >}}
{{< pdf "Kauriinkaadot 2020" "/sivutv2/tilastot/kauriinkaadot2020.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2019" >}}
{{< pdf "Kauriinkaadot 2019" "/sivutv2/tilastot/kauriinkaadot2019.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2018" >}}
{{< pdf "Kauriinkaadot 2018" "/sivutv2/tilastot/kauriinkaadot2018.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2017" >}}
{{< pdf "Kauriinkaadot 2017" "/sivutv2/tilastot/kauriinkaadot2017.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2016" >}}
{{< pdf "Kauriinkaadot 2016" "/sivutv2/tilastot/kauriinkaadot2016.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2015" >}}
{{< pdf "Kauriinkaadot 2015" "/sivutv2/tilastot/kauriinkaadot2015.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2014" >}}
{{< pdf "Kauriinkaadot 2014" "/sivutv2/tilastot/kauriinkaadot2014.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2013" >}}
{{< pdf "Kauriinkaadot 2013" "/sivutv2/tilastot/kauriinkaadot2013.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2012" >}}
{{< pdf "Kauriinkaadot 2012" "/sivutv2/tilastot/kauriinkaadot2012.pdf" >}}
{{< /pdf-vuosi >}}

{{< pdf-vuosi "2011" >}}
{{< pdf "Kauriinkaadot 2011" "/sivutv2/tilastot/kauriinkaadot2011.pdf" >}}
{{< /pdf-vuosi >}}

{{< /tilastot-kolumni >}}

{{< /tilastot-grid >}}
