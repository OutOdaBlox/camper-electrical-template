# Camper Electrical Template — Usage Guide

Speed-run future camper builds with this lightweight templating system.

---

## 1 · Edit `specs.yaml`
Update the YAML with your project-specific data:

- Batteries (count, model, chemistry)  
- BMS & main contactor  
- Solar array details (panel count/wattage, wiring)  
- Charge equipment (MPPT, DC-DC, inverter/charger)  
- Wire gauges, run lengths, region, etc.  

Optional: add `updatedDate: YYYY-MM-DD` to stamp generated docs.

---

## 2 · Validate the spec
```bash
npm ci          # install dev-deps (Ajv, Handlebars, etc.)
npm run validate
```
`validate-specs.mjs` checks `specs.yaml` against `specs.schema.json`.

---

## 3 · Generate docs & BOM
```bash
npm run build
```
This renders **from templates**:

- `docs/installation.md`  
- `docs/safety.md`  
- `bom/bom.csv`

All values are substituted from `specs.yaml`.

---

## 4 · Export diagrams
1. Open the `.drawio` sources (`diagrams/*.drawio`)  
2. Update Contents box, fuse ratings, labels, wire-gauge pills, etc.  
3. Export locally **or** let CI handle it.

Local export example (Linux/Mac):
```bash
/opt/drawio/drawio --export \
  --format svg --uncompressed \
  --output diagrams/dc_schematic.drawio.svg \
  diagrams/dc_schematic.drawio
```
Repeat for PNG + A3/A2 PDF as needed.

CI export: push a tag (e.g. `R1.5` or `v1.5`) and the GitHub Actions workflow will:
- Install draw.io headless
- Export SVG/PNG + A3/A2 PDFs
- Zip them (`dist/<tag>-exports.zip`)
- Publish a GitHub Release with the asset attached

---

## 5 · Package docs & BOM (optional)
```bash
npm run package
```
Creates `dist/docs-and-bom.zip` containing the freshly rendered docs and BOM.

---

## Turning this repo into a GitHub template
1. Go to **Settings → General**  
2. Enable **Template repository**  
3. For a new build, click **Use this template** → give it a name → clone → update `specs.yaml` → follow steps 1-5.

Happy building! 🔧⚡️
