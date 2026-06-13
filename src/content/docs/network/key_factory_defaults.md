---
title: "Factory Defaults"
description: "The following tables describes the factory defaults and what will happen to various settings when you reset the switch."
product: network
lang: en
sourceUrl: "https://help.malighting.com/network/en/help/key_factory_defaults.html"
scrapedAt: "2026-06-12T21:30:26.282Z"
---
The following tables describes the factory defaults and what will happen to various settings when you reset the switch.

If you want to reset the switch, refer to [General Settings - Reset Settings](/network/key_reset_settings/).

## General Settings Defaults

This table describes the general settings defaults and what will happen to the general settings when you reset the switch.

| Reset mode                                                                                                                | Items affected                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Reset ALL settings to factory default by using the web interface- and -Hard reset with the menu button at the front panel | - Reset IP address to the default IP address, displayed at the front end display. The default IP address is always the factory-given IP address per device.
- Reset subnet mask to 255.255.255.0
- Reset default gateway to 0.0.0.0
- Reset password to "admin"
- Reset name to "MA Switch"
- Reset ID to "1"
- IGMP Snooping "No"
- IGMP Querier "No"
- Unknown Flooding "Yes"
- Disable filters
- Disable speed
- RSTP enabled
- All ports are manage ports |

## Preset Defaults

The following lists describes what preset includes what filters by default and what will happen to the presets when you reset the switch.

### Preset MA-Net2

The preset MA-Net2 contains the following filters by default:

- MA-Net2 crtl IPv4
- MA-Net2 data IPv4

### Preset dot2-Net

The preset dot2-Net contains the following filters by default:

- dot2-Net wing data
- dot2-Net wing
- dot2-Net wing ctrl
- dot2-Net ctrl IPv6
- dot2-Net data IPv6

### Preset Art-Net

The preset Art-Net contains the following filters by default:

- Art-Net

### Preset MA-Remote

The preset MA-Remote contains the following filters by default:

- HTTPS (dport 443)
- HTTPS (sport 443)
- HTTP (dport 80)
- HTTP (sport 80)
- MA Webremote (dport 8080)
- MA Webremote (sport 8080)
- MA Remote (7003)
- MA Remote (7002)
- MA Remote (7001) 

### Preset MA-Net1

The preset MA-Net1 contains the following filters by default:

- MA-Net

### Preset grandMA2

The preset grandMA2 contains the following filters by default:

- PSN
- DNS
- NTP
- SSH (dport 22)
- SSH (sport 22)
- syslog
- AVAHI
- SNMP trap
- SNMP
- KiNet
- Art-Net
- sACN
- MA-Net2 ctrl IPv4
- MA-Net2 data IPv4
- MIDI Show Control
- VPU remote (dport 7005)
- VPU remote (sport 7005)
- VPU remote (dport 7004)
- VPU remote (sport 7004)
- HTTPS (dport 443)
- HTTPS (sport 443)
- HTTP (dport 80)
- HTTP (sport 80)
- MA Webremote (dport 8080)
- MA Webremote (sport 8080)
- MA Remote (7003)
- MA Remote (7002)
- MA Remote (7001)
- Telnet (dport 30000)
- Telnet (sport 30000)
- Telnet (dport 23)
- Telnet (sport 23)
- nmbd (tcp)
- nmbd (udp)
- SMB (tcp 139)
- SMB (udp 138)
- SMB (udp 137)
- NFS (tcp)
- NFS (udp)
- FTP
- CITP MA
- CITP
- ShowNet
- PathPort
- ETC Net2

### Preset sACN

The preset sACN contains the following filters by default:

- sACN

## Filter Defaults

The following tables describes what filters exist by default along with their frame match and what will happen to the filters when you reset the switch.

| Filter                    | Frame Match                    |
| ------------------------- | ------------------------------ |
| PSN Standard              | IPv4 UDP dport 56565           |
| DNS                       | IPv4 UDP dport                 |
| NTP                       | IPv4 UDP dport 123             |
| SSH (dport 22)            | IPv4 TCP sport 22              |
| SSH (sport 22)            | IPv4 TCP dport 22              |
| syslog                    | IPv4 UDP dport 514             |
| AVAHI                     | IPv4 UDP dport 5353            |
| SNMP trap                 | IPv4 UDP dport 162             |
| SNMP                      | IPv4 UDP dport 161             |
| KiNet                     | IPv4 UDP dport 6038            |
| Art-Net                   | IPv4 UDP dport 6454            |
| sACN                      | IPv4 UDP dport 5568            |
| MA-Net2 ctrl IPv4         | IPv4 UDP dport 29998           |
| MA-Net2 data IPv4         | IPv4 UDP dport 29999           |
| dot2-Net wing data        | IPv6 UDP dport 30014           |
| dot2-Net wing             | IPv6 UDP dport 30013           |
| dot2-Net wing ctrl        | IPv6 UDP dport 30012           |
| dot2-Net ctrl IPv6        | IPv6 UDP dport 30010           |
| dot2-Net data IPv6        | IPv6 UDP dport 30011           |
| MIDI Show Control         | IPv4 UDP dport range 6000-6020 |
| MA-Net                    | IPv4 UPD dport 9138            |
| VPU remote (dport 7005)   | TCP dport 7005                 |
| VPU remote (sport 7005)   | TCP sport 7005                 |
| VPU remote (dport 7004)   | TCP dport 7004                 |
| VPU remote (sport 7004)   | TCP sport 7004                 |
| HTTPS (dport 443)         | IPv4 TCP sport 443             |
| HTTPS (sport 443)         | IPv4 TCP dport 443             |
| HTTP (dport 80)           | IPv4 TCP sport 80              |
| HTTP (sport 80)           | IPv4 TCP dport 80              |
| MA Webremote (dport 8080) | IPv4 TCP dport 8080            |
| MA Webremote (sport 8080) | IPv4 TCP sport 8080            |
| MA Remote (7003)          | TCP dport 7003                 |
| MA Remote (7002)          | TCP dport 7002                 |
| MA Remote (7001)          | TCP dport 7001                 |
| Telnet (dport 30000)      | TCP dport 30000                |
| Telnet (sport 30000)      | TCP sport 30000                |
| Telnet (dport 30001)      | TCP dport 30001                |
| Telnet (sport 30001)      | TCP sport 30001                |
| Telnet (dport 23)         | TCP dport 23                   |
| Telnet (sport 23)         | TCP sport 23                   |
| nmbd (tcp)                | IPv4 TCP dport 445             |
| nmbd (udp)                | IPv4 UDP dport 445             |
| SMB (tcp 139)             | TCP dport 139                  |
| SMB (udp 138)             | UDP dport 138                  |
| SMB (udp 137)             | UDP dport 137                  |
| NFS (tcp)                 | TCP dport 111                  |
| NFS (udp)                 | UDP dport 2049                 |
| FTP                       | TCP dport 21                   |
| CITP MA                   | TCP dport 30002                |
| CITP                      | UDP dport 4809                 |
| ShowNet                   | UDP dport 2501                 |
| PathPort                  | UDP dport 3792                 |
| ETC Net2                  | UDP dport 6107                 |
