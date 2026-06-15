# grandMA troubleshooting decision tree

Per-symptom branches over the official troubleshooting topics, with exact grandocs
pages, the steps each page contains, and grandMA2/dot2 equivalents. Every path
below is a real slug in the current build. Append `.md` to any path for raw
markdown. grandocs base URL: `https://grandocs.samcarlton.com`.

> **Unofficial mirror.** grandocs mirrors `help.malighting.com`; each page carries
> a canonical `sourceUrl`. For hardware, electrical, conformity, or safety
> questions, defer to the canonical page and to **official MA support / your MA
> distributor**. Never present the mirror as the authority for those topics.

## Triage order

1. Get **version + product + console/onPC/PU** and **topology** (see SKILL.md).
2. Is anyone **live**? If so, prefer the least destructive branch and warn first.
3. Is the symptom **a show-file/state issue, an update failure, a connection
   failure, a session/network issue, or a hardware/electrical fault**? Pick the
   branch below.

Destructive-step legend: ⚠ = wipes user settings or resets live state — save the
show and warn the user first.

---

## Branch A — Boots, but the show/state is wrong (⚠ Clean Start)

Use when the software boots normally but misbehaves when the show file loads, or
the console is in a bad state and you want a known-good baseline.

- **grandMA3:** [Clean Start](/grandma3/2-4/ts_clean_start/) — `ts_clean_start`.
  Console/Replay/Processing Unit: at the boot **mode-selection pop-up**, hold
  **Ctrl** and tap the mode; release Ctrl after it disappears. Boots with **no
  show file and all user settings reset to factory defaults** ⚠. onPC: Windows run
  the "grandMA3 onPC x.x.x.x Clean Start" app; macOS hold **option** while opening
  the app and confirm. Quote the exact steps from the page.
- **What it does NOT do:** it does not repair a corrupt show file or fix hardware —
  it isolates whether the problem is in the show/settings vs. the install/hardware.

## Branch B — Last-resort live-settings reset (⚠⚠ Panic macro — pre-show only)

Use only when a show file behaves unexpectedly **before** a show and you need to
return general/live settings to defaults. **Do not run during a live show** — the
page states it "can have a severe impact on the show."

- **grandMA3:** [Panic Macro](/grandma3/2-4/ts_panic_macro/) — `ts_panic_macro`.
  **Save the show file first** ⚠⚠. The macro restores ~64 general settings to
  defaults (clears the programmer, resets masters to 100%, turns off Art-Net/sACN
  I/O, remotes, timecode, plugins, etc. — full list is on the page). Import via the
  import list, tap **Panic** in the Macros pool, confirm with **Please Please**.
- Related: [Macros](/grandma3/2-4/macros/), [Create Macros](/grandma3/2-4/macro_create/).
- Order vs. Branch A: try Clean Start (whole-system baseline) before the Panic
  macro (in-show settings reset) unless the user specifically needs to keep the
  loaded show but reset its live state.

## Branch C — Software update / installer fails

- **grandMA3:** [Update Does Not Work](/grandma3/2-4/tc_update_does_not_work/) —
  `tc_update_does_not_work`. Causes and fixes from the page:
  - **Broken installer package** → delete and re-download.
  - **Installed from the zip** → unzip to the hard drive first, install from the
    uncompressed folder (do not install from inside the zip).
  - **Worn USB flash drive / no partition table** → format or replace; verify by
    copying files across; new drives may ship without a partition table.
  - **Broken USB port** → different port, update the port driver, or replace.
  - **Broken USB cable** → swap the cable.
- **Network/component updates (grandMA3):** [Network Update](/grandma3/2-4/update_network/)
  for updating networked stations/Nodes.
- **grandMA2:** keyword pages for component updates — `key_keyword_listupdate`,
  `key_keyword_networknodeupdate` under `/grandma2/`. Crash logs:
  `key_keyword_crashlogcopy`, `key_keyword_crashloglist`, `key_keyword_crashlogdelete`.
- **network switch (MA-Net switch):** [Update Firmware](/network/key_update_firmware/),
  and [Fallback to old firmware](/network/key_general_settings_fallback_old_firmware/).

## Branch D — A station / wing / onPC won't connect

Use for a USB-attached command/fader wing or a station that won't come online.

- **grandMA3:** [Station Does Not Connect](/grandma3/2-4/ts_station_does_not_connect/)
  — `ts_station_does_not_connect`. The page's guidance:
  - First, reset the station settings with a [Clean Start](/grandma3/2-4/ts_clean_start/) ⚠.
  - For a wing that won't reach onPC: power the wing off and on again.
  - Likely causes: damaged USB port on the wing or computer, damaged USB cable,
    recent OS updates or power settings, or an incomplete/corrupted onPC install.
- If it's a **session** connection problem (console reaches the network but won't
  join the show session), go to Branch E instead.
- **grandMA2 / dot2:** use the session keywords/pages in Branch E — there's no
  single MA2/dot2 "station does not connect" topic; the connection question is
  usually session- or network-config-shaped on those platforms.

## Branch E — Session / networking / IP problems

Use for multi-console sessions, stations not appearing, IP/subnet issues, or
managed-switch/multicast trouble.

**grandMA3 — session:**
- [Session](/grandma3/2-4/network_session/), [Create a Session](/grandma3/2-4/network_session_create/),
  [Join a Session](/grandma3/2-4/network_session_join/),
  [Invite](/grandma3/2-4/network_session_invite/),
  [Leave](/grandma3/2-4/network_session_leave/),
  [Dismiss](/grandma3/2-4/network_session_dismiss/),
  [Session Master](/grandma3/2-4/network_session_master/),
  [Session Key](/grandma3/2-4/network_session_key/),
  [Station Control](/grandma3/2-4/network_station_control/).
- Session keywords: `keyword_session`, `keyword_joinsession`, `keyword_leavesession`,
  `keyword_invite`, `keyword_station`, `keyword_stationsettings` under `/grandma3/2-4/`.

**grandMA3 — IP / interfaces / design / verification:**
- [Interfaces and IP](/grandma3/2-4/network_interface/) — IP/subnet setup.
- [Network Design](/grandma3/2-4/network_design/),
  [Protocols](/grandma3/2-4/network_design_protocols/),
  [WLAN](/grandma3/2-4/network_design_wlan/).
- [Network Tests](/grandma3/2-4/network_tests/) — verify connectivity.
- [Regulations and Standards](/grandma3/2-4/network_regulations/).
- [Web Remote](/grandma3/2-4/network_webremote/).

**grandMA2 — session/network:**
- `/grandma2/key_network/` ("Networking"), `key_network_dhcp`, `key_network_dmx_protocols`,
  `key_control_ma_switch_ip_address`.
- Session keywords: `key_keyword_joinsession`, `key_keyword_endsession`,
  `key_keyword_leavesession`, `key_keyword_invitestation`,
  `key_keyword_disconnectstation`, `key_keyword_networkinfo`,
  `key_keyword_networkspeedtest`, `key_keyword_setnetworkspeed` under `/grandma2/`.

**dot2 — session/network:**
- [Network Setup](/dot2/key_window_networksetup/),
  [Network Protocols Configuration](/dot2/key_window_networkprotocols/),
  [Network](/dot2/key_wa_network/),
  [Select Session Number](/dot2/key_window_selectsessionnumber/),
  [Session Collision](/dot2/key_window_sessioncollision/).

**MA-Net switch (managed network switch — the `/network/` product):**
- [Change IP address](/network/key_change_ip_address/),
  [Change subnet mask](/network/key_change_subnet_mask/),
  [Change default gateway](/network/key_change_default_gateway/),
  [DHCP client](/network/key_change_dhcp_client/),
  [Set the IP address on the PC](/network/key_set_the_ip_address_on_the_pc/).
- Multicast/switch tuning (common cause of session/output dropouts):
  [IGMP snooping](/network/key_edit_igmp_snooping/),
  [IGMP querier](/network/key_edit_igmp_querier/),
  [RSTP](/network/key_edit_rstp/),
  [Unknown flooding](/network/key_edit_unknown_flooding/),
  [Port mirroring](/network/key_general_settings_port_mirroring/),
  [Factory defaults](/network/key_factory_defaults/),
  [Reset settings](/network/key_reset_settings/).

**Common session checklist (confirm against the pages above, don't assert):**
session number matches, IPs on the same subnet, one Session Master, MA-Net version
matches across stations, managed switches have IGMP snooping + an active querier,
and WLAN is avoided for show-critical traffic.

## Branch F — Hardware, electrical, conformity, or safety

**Stop diagnosing and escalate.** Cite the canonical page and send the user to
**official MA support / their MA distributor**. Do not give electrical or rigging
advice from the mirror.

- **grandMA3 safety/conformity:** [Safety](/grandma3/2-4/key_safety/),
  [Console Safety Instructions](/grandma3/2-4/key_consoles_safetyinstructions/),
  [Conformity](/grandma3/2-4/key_conformity/) (per-device conformity/safety pages
  also exist, e.g. `key_pu_safety`, `key_i_o_node_safety`, `key_fader_wing_conformity`).
- **grandMA2 safety:** `/grandma2/key_safety_information/` and its sub-pages
  (`key_safety_information_dangers_caused_by_electric_cur`,
  `key_safety_information_general_safety_instructions`,
  `key_safety_information_intended_use`).
- **network switch safety:** [General Safety Instructions](/network/key_generals_safety_instructions/),
  [Dangers caused by Electric Current](/network/key_dangers_caused_by_electric_current/),
  [Intended Use](/network/key_intended_use/), [Support](/network/key_support/).

Always remind the user: **grandocs is an unofficial mirror** — for conformity,
electrical ratings, and safety procedures, the canonical `help.malighting.com`
page (`sourceUrl`) is authoritative, and hardware faults should go to MA support.

---

## Version note

Slugs above are for **grandMA3 v2.4** (`/grandma3/2-4/`), the default. If the user
runs another grandMA3 version, swap the segment (`2-4` → `2-3`, `2-2`, …); the
`ts_*` / `tc_*` slugs are generally stable across versions but confirm with the
MCP `list_products_versions()` tool or `/llms.txt`. grandMA2, dot2, utility, and
network have **no** version segment. If a page 404s on the mirror, fall back to the
canonical `help.malighting.com` page and tell the user which version you used.
