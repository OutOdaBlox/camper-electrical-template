# {{specs.project}} – Installation ({{specs.version}})

Updated: {{specs.updatedDate}}{{#unless specs.updatedDate}}(set specs.updatedDate in specs.yaml){{/unless}}

Summary
- Batteries: {{specs.batteries.model}} (x{{specs.batteries.count}})
- BMS: {{specs.bms.model}} (controls {{specs.bms.control}})
- MPPT: {{specs.pv.controller.model}}
- DC-DC: {{specs.alternator.dcdc.model}}
- Inverter/Charger: {{specs.inverter.model}}
- Solar: {{specs.pv.panels.count}} × {{specs.pv.panels.watt}} W ({{specs.pv.panels.wiring}})
- 12 V Distribution: {{specs.low_voltage_distribution.fuse_block}}, bus bars {{specs.low_voltage_distribution.bus_bars.positive}} / {{specs.low_voltage_distribution.bus_bars.negative}}

Wiring Notes
- Main runs: {{specs.wiring.main_cable}} for battery / contactor / inverter.
- MPPT / DC-DC: {{specs.wiring.branch_cable}} typical (adjust per length and current).
- Confirm device fuse sizes per manufacturer; adjust for region {{specs.region}}.

PV ({{specs.pv.panels.count}} × {{specs.pv.panels.watt}} W, {{specs.pv.panels.wiring}})
1. Wire panels per configuration (roof → gland → PV isolator → MPPT IN).
2. Confirm MPPT voltage/current limits are respected.

SmartShunt
- Battery negatives to battery side; system negatives to load side.
- Torque per manufacturer.

Contactor & BMS
1. Place main contactor in battery positive path before + bus.
2. Power coil from protected fused feed.
3. BMS output drives coil via control relay if required.
4. Configure LVD / HVD / Temp in BMS app.

Commissioning
1. Verify polarity and torque on all terminations.
2. Close PV isolator and confirm MPPT sees array Voc.
3. Enable BMS, close contactor (pre-charge if applicable).
4. Power inverter/charger and verify AC output with no loads.
5. Check charge sources current / voltage.
6. Record baseline values in shunt/monitoring.
