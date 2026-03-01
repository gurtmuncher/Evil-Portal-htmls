# Evil Portal HTMLs

Some evil portal htmls I made.

## What you need

- A wifi dev board like the esp32 board that you can buy from flippers website https://flipper.net/products/wifi-devboard
- Marauder firmware installed on your esp32 dev board
- And a Flipper Zero

## Files

- Google-identical.html - A google sign in that I tried to make look as close to the real thing as I could

## How to use

1. Put the html file on your sd card
2. Put the sd card back in your Flipper and go to apps_data → evil_portal in qflipper or your file browser then paste the htmls
3. Open GPIO in apps then ESP then click on [ESP32]Evil Portal
4. Pick your html file and start it

## How it works

Basically when someone connects to your fake wifi it shows them this page that looks like google. They think they gotta sign in so they type their email and password and hit next. Then it saves what they typed.

## Changing stuff

If you wanna change things just edit the html. The form sends to /get which is what marauder uses. You can change the placeholder text or colors or whatever.

## Disclaimer

Only use this if you have explicit permission to. I am not responsible if you do something stupid with this. This was also built purely for educational purposes.
## Credits

I made these using htmls I found here for reference https://github.com/bigbrodude6119/flipper-zero-evil-portal. The styling is based on how these sites actually look.

Thats pretty much it. Lmk if something doesnt work and if you think something could be changed for the better feel free to open a pull request.