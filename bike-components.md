# Jaron's Bike Build — Component Registry

Complete list of all components and gear, formatted for clean website import.
Three formats included: **JSON**, **HTML table**, and **Markdown list**.

---

## JSON (recommended for web import)

```json
{
  "bike": {
    "name": "Madone SLR 7 AXS",
    "generation": "Gen 8",
    "year": 2025,
    "size": "Medium",
    "frameColor": "Matte Black",
    "wheelDecalColor": "White",
    "estimatedWeight": "7.3kg",
    "totalRetailValue": "$14,000+"
  },
  "components": [
    {
      "position": "01",
      "category": "Frame",
      "name": "Trek Madone SLR Gen 8",
      "tagline": "Flagship chassis, one rung down on the groupset.",
      "detail": "900 Series OCLV carbon. Same frame as the SLR 9 the pros race. Trek killed the Emonda because this does both: aero and lightweight. 1,146g frame.",
      "brand": "Trek",
      "url": "https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/madone/madone-slr/madone-slr-7-axs-gen-8/p/46688/",
      "brandUrl": "https://www.trekbikes.com"
    },
    {
      "position": "02",
      "category": "Groupset",
      "name": "SRAM Force AXS D2",
      "tagline": "Second tier, current gen, durability sorted.",
      "detail": "Wireless electronic shifting. 2x12 drivetrain. Red AXS saves 150g and $3,000. Force shifts identically and wears longer.",
      "brand": "SRAM",
      "url": "https://www.sram.com/en/sram/road/series/force-axs",
      "brandUrl": "https://www.sram.com"
    },
    {
      "position": "03",
      "category": "Wheels",
      "name": "Enve SES 4.5",
      "tagline": "Hookless, wide internal, built for comfort.",
      "detail": "49mm front / 55mm rear. Swapped in for the stock Bontrager Aeolus Pro 51. Wider rim bed rounds out the tire for more compliance and better handling. White decals.",
      "brand": "Enve",
      "url": "https://enve.com/products/ses-4-5",
      "brandUrl": "https://enve.com"
    },
    {
      "position": "04",
      "category": "Tires",
      "name": "Pirelli P Zero Race TLR RS",
      "tagline": "Fast without being fragile.",
      "detail": "Tubeless-ready. Race-level rolling resistance with enough sidewall protection for real-world Chicago roads.",
      "brand": "Pirelli",
      "url": "https://velo.pirelli.com/us/en-us/road/racing/p-zero-race-tlr-rs",
      "brandUrl": "https://velo.pirelli.com"
    },
    {
      "position": "05",
      "category": "Crankset",
      "name": "SRAM Force 170mm with Quarq DZero",
      "tagline": "Non-negotiable. For the knee.",
      "detail": "Most riders my height run 172.5mm. Shorter cranks open up the hip angle, reduce knee stress, work better at higher cadence. Power meter integrated.",
      "brand": "SRAM",
      "url": "https://www.sram.com/en/sram/road/products/cranksets",
      "brandUrl": "https://www.sram.com"
    },
    {
      "position": "06",
      "category": "Cockpit",
      "name": "Trek RSL Aero one-piece",
      "tagline": "80 / 42 / 90. Fit comes first.",
      "detail": "One-piece carbon bar/stem. 80mm reach, 42cm drop width, 90mm stem length. 3cm narrower at the tops than the drops for aero positioning.",
      "brand": "Trek / Bontrager",
      "url": "https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-bar-tape-grips-handlebars/road-bike-handlebars/c/B329/",
      "brandUrl": "https://www.trekbikes.com"
    },
    {
      "position": "07",
      "category": "Pedals",
      "name": "Look Keo Blade Carbon Ceramic",
      "tagline": "Low stack, because the cranks are short.",
      "detail": "8.5mm stack height from spindle to cleat contact. Pairing low-stack pedals with short cranks compounds the knee-friendly pedaling geometry.",
      "brand": "Look Cycle",
      "url": "https://www.lookcycle.com/us-en/product/keo-blade-carbon-ceramic",
      "brandUrl": "https://www.lookcycle.com"
    },
    {
      "position": "08",
      "category": "Shoes",
      "name": "Shimano S-Phyre RC703",
      "tagline": "Shares DNA with the RC903. Saves $200.",
      "detail": "Same carbon sole stiffness as Shimano's top-tier S-Phyre. BOA Li2 dials, race-level fit, half the price of the flagship.",
      "brand": "Shimano",
      "url": "https://bike.shimano.com/en-US/product/apparel/SH-RC703.html",
      "brandUrl": "https://bike.shimano.com"
    },
    {
      "position": "09",
      "category": "Helmet",
      "name": "MET Manta MIPS",
      "tagline": "Aero first. Pogačar's choice.",
      "detail": "MET's flagship aero road helmet. Solid top shell reduces drag, internal channeling keeps airflow honest, MIPS liner handles rotational impacts. What UAE Team Emirates races in.",
      "brand": "MET",
      "url": "https://www.met-helmets.com/en/helmets/road/manta-mips",
      "brandUrl": "https://www.met-helmets.com"
    },
    {
      "position": "10",
      "category": "Computer",
      "name": "Wahoo Elemnt Bolt V3",
      "tagline": "Wahoo wins on the ride.",
      "detail": "Physical buttons you can hit with cold or gloved hands. Better screen visibility in direct sun than Garmin. Native integration with SRAM AXS for gear data.",
      "brand": "Wahoo",
      "url": "https://www.wahoofitness.com/devices/bike-computers/gps-bike-computers/elemnt-bolt",
      "brandUrl": "https://www.wahoofitness.com"
    },
    {
      "position": "11",
      "category": "Eyewear",
      "name": "Oakley Sutro Lite Sweep",
      "tagline": "Prizm Road. Sweep geometry. Matte black.",
      "detail": "Half-frame for downward visibility, swept lens shape for wind protection, Prizm Road lens tuned to enhance road hazard contrast.",
      "brand": "Oakley",
      "url": "https://www.oakley.com/en-us/product/W0OO9465",
      "brandUrl": "https://www.oakley.com"
    },
    {
      "position": "12",
      "category": "Kit",
      "name": "Rapha RCC",
      "tagline": "Best cut Rapha makes.",
      "detail": "Pro Team fit without the pro team branding. Pink pocket binding so riders know you're part of the club.",
      "brand": "Rapha",
      "url": "https://www.rapha.cc/us/en_US/rcc",
      "brandUrl": "https://www.rapha.cc"
    }
  ]
}
```

---

## HTML table (ready to paste)

```html
<section class="bike-build">
  <header class="bike-build__header">
    <h1>Madone SLR 7 AXS · Gen 8</h1>
    <dl class="bike-build__meta">
      <div><dt>Year</dt><dd>2025</dd></div>
      <div><dt>Size</dt><dd>Medium</dd></div>
      <div><dt>Frame</dt><dd>Matte Black</dd></div>
      <div><dt>Est. Weight</dt><dd>7.3 kg</dd></div>
      <div><dt>Components</dt><dd>12</dd></div>
    </dl>
  </header>

  <table class="bike-build__table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Category</th>
        <th scope="col">Component</th>
        <th scope="col">Notes</th>
        <th scope="col">Brand</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>01</td>
        <td>Frame</td>
        <td><a href="https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/madone/madone-slr/madone-slr-7-axs-gen-8/p/46688/" target="_blank" rel="noopener">Trek Madone SLR Gen 8</a></td>
        <td>Flagship chassis, one rung down on the groupset.</td>
        <td><a href="https://www.trekbikes.com" target="_blank" rel="noopener">Trek</a></td>
      </tr>
      <tr>
        <td>02</td>
        <td>Groupset</td>
        <td><a href="https://www.sram.com/en/sram/road/series/force-axs" target="_blank" rel="noopener">SRAM Force AXS D2</a></td>
        <td>Second tier, current gen, durability sorted.</td>
        <td><a href="https://www.sram.com" target="_blank" rel="noopener">SRAM</a></td>
      </tr>
      <tr>
        <td>03</td>
        <td>Wheels</td>
        <td><a href="https://enve.com/products/ses-4-5" target="_blank" rel="noopener">Enve SES 4.5</a></td>
        <td>Hookless, wide internal, built for comfort. White decals.</td>
        <td><a href="https://enve.com" target="_blank" rel="noopener">Enve</a></td>
      </tr>
      <tr>
        <td>04</td>
        <td>Tires</td>
        <td><a href="https://velo.pirelli.com/us/en-us/road/racing/p-zero-race-tlr-rs" target="_blank" rel="noopener">Pirelli P Zero Race TLR RS</a></td>
        <td>Fast without being fragile.</td>
        <td><a href="https://velo.pirelli.com" target="_blank" rel="noopener">Pirelli</a></td>
      </tr>
      <tr>
        <td>05</td>
        <td>Crankset</td>
        <td><a href="https://www.sram.com/en/sram/road/products/cranksets" target="_blank" rel="noopener">SRAM Force 170mm with Quarq DZero</a></td>
        <td>Non-negotiable. For the knee.</td>
        <td><a href="https://www.sram.com" target="_blank" rel="noopener">SRAM</a></td>
      </tr>
      <tr>
        <td>06</td>
        <td>Cockpit</td>
        <td><a href="https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-bar-tape-grips-handlebars/road-bike-handlebars/c/B329/" target="_blank" rel="noopener">Trek RSL Aero one-piece</a></td>
        <td>80 / 42 / 90. Fit comes first.</td>
        <td><a href="https://www.trekbikes.com" target="_blank" rel="noopener">Trek</a></td>
      </tr>
      <tr>
        <td>07</td>
        <td>Pedals</td>
        <td><a href="https://www.lookcycle.com/us-en/product/keo-blade-carbon-ceramic" target="_blank" rel="noopener">Look Keo Blade Carbon Ceramic</a></td>
        <td>Low stack, because the cranks are short.</td>
        <td><a href="https://www.lookcycle.com" target="_blank" rel="noopener">Look Cycle</a></td>
      </tr>
      <tr>
        <td>08</td>
        <td>Shoes</td>
        <td><a href="https://bike.shimano.com/en-US/product/apparel/SH-RC703.html" target="_blank" rel="noopener">Shimano S-Phyre RC703</a></td>
        <td>Shares DNA with the RC903. Saves $200.</td>
        <td><a href="https://bike.shimano.com" target="_blank" rel="noopener">Shimano</a></td>
      </tr>
      <tr>
        <td>09</td>
        <td>Helmet</td>
        <td><a href="https://www.met-helmets.com/en/helmets/road/manta-mips" target="_blank" rel="noopener">MET Manta MIPS</a></td>
        <td>Aero first. Pogačar's choice.</td>
        <td><a href="https://www.met-helmets.com" target="_blank" rel="noopener">MET</a></td>
      </tr>
      <tr>
        <td>10</td>
        <td>Computer</td>
        <td><a href="https://www.wahoofitness.com/devices/bike-computers/gps-bike-computers/elemnt-bolt" target="_blank" rel="noopener">Wahoo Elemnt Bolt V3</a></td>
        <td>Wahoo wins on the ride.</td>
        <td><a href="https://www.wahoofitness.com" target="_blank" rel="noopener">Wahoo</a></td>
      </tr>
      <tr>
        <td>11</td>
        <td>Eyewear</td>
        <td><a href="https://www.oakley.com/en-us/product/W0OO9465" target="_blank" rel="noopener">Oakley Sutro Lite Sweep</a></td>
        <td>Prizm Road. Sweep geometry. Matte black.</td>
        <td><a href="https://www.oakley.com" target="_blank" rel="noopener">Oakley</a></td>
      </tr>
      <tr>
        <td>12</td>
        <td>Kit</td>
        <td><a href="https://www.rapha.cc/us/en_US/rcc" target="_blank" rel="noopener">Rapha RCC</a></td>
        <td>Best cut Rapha makes.</td>
        <td><a href="https://www.rapha.cc" target="_blank" rel="noopener">Rapha</a></td>
      </tr>
    </tbody>
  </table>
</section>
```

---

## Markdown list (for CMS or blog import)

### The Build

**2025 Trek Madone SLR 7 AXS · Gen 8** — Medium · Matte Black · Est. 7.3kg

| # | Category | Component | Notes |
|---|----------|-----------|-------|
| 01 | Frame | [Trek Madone SLR Gen 8](https://www.trekbikes.com/us/en_US/bikes/road-bikes/performance-road-bikes/madone/madone-slr/madone-slr-7-axs-gen-8/p/46688/) | Flagship chassis, one rung down on the groupset. |
| 02 | Groupset | [SRAM Force AXS D2](https://www.sram.com/en/sram/road/series/force-axs) | Second tier, current gen, durability sorted. |
| 03 | Wheels | [Enve SES 4.5](https://enve.com/products/ses-4-5) | Hookless, wide internal, built for comfort. White decals. |
| 04 | Tires | [Pirelli P Zero Race TLR RS](https://velo.pirelli.com/us/en-us/road/racing/p-zero-race-tlr-rs) | Fast without being fragile. |
| 05 | Crankset | [SRAM Force 170mm with Quarq DZero](https://www.sram.com/en/sram/road/products/cranksets) | Non-negotiable. For the knee. |
| 06 | Cockpit | [Trek RSL Aero one-piece](https://www.trekbikes.com/us/en_US/equipment/cycling-components/bike-bar-tape-grips-handlebars/road-bike-handlebars/c/B329/) | 80 / 42 / 90. Fit comes first. |
| 07 | Pedals | [Look Keo Blade Carbon Ceramic](https://www.lookcycle.com/us-en/product/keo-blade-carbon-ceramic) | Low stack, because the cranks are short. |
| 08 | Shoes | [Shimano S-Phyre RC703](https://bike.shimano.com/en-US/product/apparel/SH-RC703.html) | Shares DNA with the RC903. Saves $200. |
| 09 | Helmet | [MET Manta MIPS](https://www.met-helmets.com/en/helmets/road/manta-mips) | Aero first. Pogačar's choice. |
| 10 | Computer | [Wahoo Elemnt Bolt V3](https://www.wahoofitness.com/devices/bike-computers/gps-bike-computers/elemnt-bolt) | Wahoo wins on the ride. |
| 11 | Eyewear | [Oakley Sutro Lite Sweep](https://www.oakley.com/en-us/product/W0OO9465) | Prizm Road. Sweep geometry. Matte black. |
| 12 | Kit | [Rapha RCC](https://www.rapha.cc/us/en_US/rcc) | Best cut Rapha makes. |

---

## Usage Notes

**For a React / Next.js site:** Use the JSON block. Import it as a static data file and map over the components array.

**For a static HTML site or Webflow CMS:** Use the HTML table. All links have `target="_blank"` and `rel="noopener"` for security and usability.

**For a blog, Notion, or markdown-based CMS:** Use the Markdown table.

**Brand URLs verified:** Trek, SRAM, Enve, Pirelli, Look Cycle, Shimano, MET, Wahoo, Oakley, Rapha. All links go to the manufacturer's official product pages where available, or their brand homepages where a specific product page wasn't stable.

**Link maintenance tip:** Product URLs can break when brands rotate inventory. If a link goes dead, fall back to the `brandUrl` field and let users navigate to the product from there.
