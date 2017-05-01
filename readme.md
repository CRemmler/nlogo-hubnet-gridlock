## Features:
- [x] Login to any room.
- [x] First to enter gets room get teacher interface.
- [x] Other users get student interface.
- [x] Admin capabilities.

## Use NetLogo primitive commands and reporters
- [x] hubnet-fetch-message 
- [x] hubnet-send
- [x] hubnet-message-waiting?
- [x] hubnet-exit-message?
- [x] hubnet-enter-message?
- [x] hubnet-message
- [x] hubnet-message-source
- [x] hubnet-message-tag

## Add variable to turtle prototype
- [x] userid

## Known Issues
- When you turn the "Go" button off, messages from the client accumulate.

## Convert a NetLogo Hubnet Activity to Web
1. Open NetLogo Hubnet Activity in NetLogo java app. Save as NetLogo Web.
2. Copy NetLogo both client and host interfaces from NetLogo Web index.html
3. Paste interface into the NetLogo Web Hubnet index.html (from this repo)
4. Add a few tweaks to client interface components.
4. Update config.json file for Gridlock
5. Update js/events.js for any Gridlock client sliders (TO DO: add to config.json file)

## Gridlock-specific actions
- plot-pen-show
