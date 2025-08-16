# Safety ({{specs.version}})

Updated: {{specs.updatedDate}}{{#unless specs.updatedDate}}(set specs.updatedDate in specs.yaml){{/unless}}

General  
- Follow device manuals and local electrical regulations.  
- De-energize before service; verify absence of voltage with a meter; wear appropriate PPE.  

Protection  
- Battery positives individually fused per battery model/current.  
- Main contactor (e.g., {{specs.bms.control}}) functions as the primary system disconnect under BMS control.  
- Inverter protected by a Class-T fuse sized for the model and cable gauge.  
- Distribution, MPPT, and DC-DC circuits protected by appropriately sized fuses or breakers.  

BMS / Contactor Logic  
- BMS low/high-voltage or temperature events open the main contactor.  
- Contactor coil feed must be fused and taken from a protected supply.  
- Optional: include a manual emergency-stop switch in the coil circuit.  

Grounding / Bonding  
- Follow manufacturer guidance for DC negative / AC earth bonding.  
- RCD/MCB on AC distribution; shore-power inlet protected per local code.  

PV  
- PV isolator must be DC-rated; treat connectors as live whenever exposed to sunlight.  
- Use UV-rated PV cable and appropriate connectors (e.g., MC4).  
